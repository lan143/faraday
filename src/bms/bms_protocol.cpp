#include "bms_protocol.h"

#include <algorithm>
#include <cstdio>
#include <cstring>

namespace
{
    uint16_t readU16(const uint8_t* p)
    {
        return static_cast<uint16_t>((static_cast<uint16_t>(p[0]) << 8) | p[1]);
    }

    void appendToken(char* out, size_t outSize, size_t& offset, const char* token, bool& first)
    {
        const char* separator = first ? "" : "; ";
        const int written = snprintf(out + offset, outSize - offset, "%s%s", separator, token);
        if (written > 0) {
            offset += static_cast<size_t>(written);
            if (offset > outSize) {
                offset = outSize;
            }
        }
        first = false;
    }

    void finishTokenString(char* out, size_t outSize)
    {
        if (outSize > 0) {
            out[outSize - 1] = '\0';
        }
    }
}

uint16_t Faraday::Bms::Protocol::checksum(const uint8_t* data, uint16_t len)
{
    uint16_t sum = 0;
    for (uint16_t i = 0; i < len; ++i) {
        sum = static_cast<uint16_t>(sum + data[i]);
    }

    return static_cast<uint16_t>(0 - sum);
}

uint16_t Faraday::Bms::Protocol::buildCommandFrame(uint8_t command, uint8_t address, uint8_t* out)
{
    out[0] = JBD_PKT_START;
    out[1] = command;
    out[2] = address;
    out[3] = 0x00;  // no payload for READ/CLEAR requests

    const uint16_t crc = checksum(&out[2], 2);
    out[4] = static_cast<uint8_t>(crc >> 8);
    out[5] = static_cast<uint8_t>(crc & 0xFF);
    out[6] = JBD_PKT_END;

    return 7;
}

uint16_t Faraday::Bms::Protocol::buildReadFrame(uint8_t addr, uint8_t* out)
{
    return buildCommandFrame(JBD_CMD_READ, addr, out);
}

void Faraday::Bms::Protocol::FrameAssembler::onNotification(const uint8_t* data, uint16_t len)
{
    if (data == nullptr || len == 0 || _hasFrame) {
        return;
    }

    // A notification that starts a fresh frame (DD + function + ok status)
    // discards any partially assembled bytes from the previous frame.
    if (len >= 3 && data[0] == JBD_PKT_START && data[2] == 0x00) {
        _len = 0;
    }

    // Ignore leading noise while waiting for a frame start.
    if (_len == 0 && data[0] != JBD_PKT_START) {
        return;
    }

    const uint16_t room = static_cast<uint16_t>(sizeof(_buf) - _len);
    const uint16_t copyLen = std::min(len, room);
    if (copyLen > 0) {
        memcpy(_buf + _len, data, copyLen);
        _len = static_cast<uint16_t>(_len + copyLen);
    }

    tryComplete();
}

bool Faraday::Bms::Protocol::FrameAssembler::tryComplete()
{
    if (_len < 4) {
        return false;
    }

    if (_buf[0] != JBD_PKT_START) {
        _len = 0;
        return false;
    }

    const uint16_t expected = static_cast<uint16_t>(4 + _buf[3] + 3);
    if (_len < expected) {
        return false;
    }

    if (_len > expected) {
        _len = 0;
        return false;
    }

    const uint16_t crcExpected = static_cast<uint16_t>(
        (static_cast<uint16_t>(_buf[expected - 3]) << 8) | _buf[expected - 2]
    );
    const uint16_t crcActual = checksum(&_buf[2], static_cast<uint16_t>(_buf[3] + 2));
    const bool valid = _buf[expected - 1] == JBD_PKT_END
        && _buf[2] == 0x00
        && crcExpected == crcActual;

    if (valid) {
        _function = _buf[1];
        _status = _buf[2];
        _dataLen = _buf[3];
        _hasFrame = true;
    }

    _len = 0;

    return valid;
}

bool Faraday::Bms::Protocol::FrameAssembler::takeFrame(
    uint8_t& function,
    uint8_t& status,
    const uint8_t*& data,
    uint16_t& len
)
{
    if (!_hasFrame) {
        return false;
    }

    function = _function;
    status = _status;
    data = _buf + 4;
    len = _dataLen;
    _hasFrame = false;

    return true;
}

void Faraday::Bms::Protocol::FrameAssembler::reset()
{
    _len = 0;
    _hasFrame = false;
    _function = 0;
    _status = 0;
    _dataLen = 0;
}

bool Faraday::Bms::Protocol::parseBasicInfo(const uint8_t* data, uint16_t len, BmsBasicInfo& out)
{
    if (data == nullptr || len < 23) {
        return false;
    }

    const uint16_t rawCurrent = readU16(data + 2);
    const float scale = (data[20] & 0x80) != 0 ? 0.1f : 0.01f;

    out.totalVoltage = readU16(data + 0) * 0.01f;
    out.current = static_cast<int16_t>(rawCurrent) * scale;
    out.capacityRemaining = readU16(data + 4) * scale;
    out.nominalCapacity = readU16(data + 6) * scale;
    out.cycles = readU16(data + 8);
    // Bytes 12-13 carry cells 1-16 (low word) and bytes 14-15 carry cells
    // 17-32 (high word); bit i (0-based) means cell i+1 is balancing.
    out.balancerBitmask = (static_cast<uint32_t>(readU16(data + 14)) << 16) | readU16(data + 12);
    out.protectionBitmask = readU16(data + 16);
    out.swVersion = static_cast<float>(data[18] >> 4) + (data[18] & 0x0F) * 0.1f;
    out.soc = static_cast<float>(data[19]);
    out.mosfetBitmask = data[20];
    out.reportedCellCount = data[21];
    out.temperatureCount = std::min<uint8_t>(data[22], 6);
    out.power = out.totalVoltage * out.current;

    for (uint8_t i = 0; i < 6; ++i) {
        const uint16_t offset = static_cast<uint16_t>(23 + i * 2);
        if (i < out.temperatureCount && (offset + 1) < len) {
            out.temperatures[i] = (readU16(data + offset) - 2731) * 0.1f;
        } else {
            out.temperatures[i] = 0.0f;
        }
    }

    return true;
}

bool Faraday::Bms::Protocol::parseCells(
    const uint8_t* data,
    uint16_t len,
    uint8_t configuredCount,
    BmsCells& out,
    BmsBasicInfo* stats
)
{
    if (data == nullptr) {
        return false;
    }

    uint8_t count = static_cast<uint8_t>(std::min<uint16_t>(len / 2, 20));
    count = std::min(count, configuredCount);
    count = std::min<uint8_t>(count, 20);

    out.count = count;

    float minV = 0.0f;
    float maxV = 0.0f;
    float sum = 0.0f;

    for (uint8_t i = 0; i < count; ++i) {
        const float volts = readU16(data + i * 2) * 0.001f;
        out.volts[i] = volts;
        sum += volts;
        if (i == 0 || volts < minV) {
            minV = volts;
        }
        if (i == 0 || volts > maxV) {
            maxV = volts;
        }
    }

    // Clear any stale tail so a shrinking pack never exposes old cells.
    for (uint8_t i = count; i < 20; ++i) {
        out.volts[i] = 0.0f;
    }

    if (stats != nullptr && count > 0) {
        stats->minCellVoltage = minV;
        stats->maxCellVoltage = maxV;
        stats->avgCellVoltage = sum / static_cast<float>(count);
        stats->deltaCellVoltage = maxV - minV;
    }

    return count > 0;
}

bool Faraday::Bms::Protocol::parseErrorCounts(const uint8_t* data, uint16_t len, BmsErrorCounts& out)
{
    if (data == nullptr || len < 22) {
        return false;
    }

    out.shortCircuit = readU16(data + 0);
    out.chargeOvercurrent = readU16(data + 2);
    out.dischargeOvercurrent = readU16(data + 4);
    out.cellOvervoltage = readU16(data + 6);
    out.cellUndervoltage = readU16(data + 8);
    out.chargeOvertemperature = readU16(data + 10);
    out.chargeUndertemperature = readU16(data + 12);
    out.dischargeOvertemperature = readU16(data + 14);
    out.dischargeUndertemperature = readU16(data + 16);
    out.batteryOvervoltage = readU16(data + 18);
    out.batteryUndervoltage = readU16(data + 20);

    return true;
}

bool Faraday::Bms::Protocol::parseDeviceModel(const uint8_t* data, uint16_t len, char* out, size_t outSize)
{
    if (data == nullptr || out == nullptr || outSize == 0 || len == 0) {
        return false;
    }

    size_t copyLen = 0;
    while (copyLen < len && data[copyLen] != 0x00) {
        ++copyLen;
    }
    copyLen = std::min(copyLen, outSize - 1);

    memcpy(out, data, copyLen);
    out[copyLen] = '\0';

    return copyLen > 0;
}

void Faraday::Bms::Protocol::formatProtectionLabels(uint16_t bitmask, char* out, size_t outSize)
{
    if (out == nullptr || outSize == 0) {
        return;
    }

    out[0] = '\0';

    if (bitmask == 0) {
        snprintf(out, outSize, "None");
        finishTokenString(out, outSize);
        return;
    }

    static const char* const labels[16] = {
        "Cell overvoltage",
        "Cell undervoltage",
        "Pack overvoltage",
        "Pack undervoltage",
        "Charging over temperature",
        "Charging under temperature",
        "Discharging over temperature",
        "Discharging under temperature",
        "Charging overcurrent",
        "Discharging overcurrent",
        "Short circuit",
        "IC front-end error",
        "Mosfet Software Lock",
        "Charge timeout Close",
        "Unknown(0x0E)",
        "Unknown(0x0F)",
    };

    size_t offset = 0;
    bool first = true;

    for (uint8_t bit = 0; bit < 16; ++bit) {
        if ((bitmask & (1u << bit)) != 0) {
            appendToken(out, outSize, offset, labels[bit], first);
        }
    }

    finishTokenString(out, outSize);
}

void Faraday::Bms::Protocol::formatOperationLabels(uint8_t mosfetBitmask, char* out, size_t outSize)
{
    if (out == nullptr || outSize == 0) {
        return;
    }

    out[0] = '\0';

    if (mosfetBitmask == 0) {
        snprintf(out, outSize, "Idle");
        finishTokenString(out, outSize);
        return;
    }

    size_t offset = 0;
    bool first = true;

    if ((mosfetBitmask & 0x01) != 0) {
        appendToken(out, outSize, offset, "Charging", first);
    }
    if ((mosfetBitmask & 0x02) != 0) {
        appendToken(out, outSize, offset, "Discharging", first);
    }
    if ((mosfetBitmask & 0x18) != 0) {
        appendToken(out, outSize, offset, "Heating", first);
    }
    if ((mosfetBitmask & 0x40) != 0) {
        appendToken(out, outSize, offset, "Factory mode", first);
    }

    // Any remaining set bit (excluding the known charging/discharging/heating/
    // factory bits) is reported verbatim.
    static const uint8_t knownBits = 0x01 | 0x02 | 0x18 | 0x40;
    for (uint8_t bit = 0; bit < 8; ++bit) {
        if ((mosfetBitmask & (1u << bit)) != 0 && (knownBits & (1u << bit)) == 0) {
            char unknown[16];
            snprintf(unknown, sizeof(unknown), "Unknown(0x%02X)", bit);
            appendToken(out, outSize, offset, unknown, first);
        }
    }

    finishTokenString(out, outSize);
}
