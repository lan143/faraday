#include "mtd262mb_illuminance.h"

std::pair<float, bool> Faraday::MTD262MBIlluminance::getIlluminance() const
{
    // Saifuli MTDX62-MB Wiren Board template: input register 0x01, s16, scale
    // 0.1 -> lux. The Modbus client returns the raw 16-bit value as a positive
    // long (or -1 on failure), so the sign extension is applied here.
    auto val = _client.inputRegisterRead(_address, kIlluminanceRegister);
    if (val == -1) {
        return {0.0f, false};
    }

    if (val > 32767) {
        val -= 65536;
    }

    float lux = static_cast<float>(val) * kIlluminanceScale;
    if (lux < 0.0f) {
        lux = 0.0f;
    }

    return {lux, true};
}
