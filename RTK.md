# RTK.md — using `rtk` with Faraday

Repo-specific companion to the global RTK guide (`~/.claude/RTK.md`). The global file
explains what `rtk` is and how it saves tokens; this file only maps Faraday tasks to
commands. ESP32 builds here pull the whole `ed-*` family and produce long toolchain output,
so filtering helps, but the exit code is still the contract.

## Task → command

| Task | Command |
|---|---|
| Firmware build, errors only | `rtk err pio run -e faraday` |
| Full build tail incl. RAM/Flash | `rtk summary pio run -e faraday` |
| USB firmware upload | `rtk err pio run -e faraday -t upload` |
| Serial monitor (interactive) | `pio device monitor` — plain, never wrapped |
| Web UI to LittleFS (USB) | `rtk err pio run -e faraday -t uploadfs` |
| OTA firmware (target from `.env`) | `rtk err pio run -e faraday_ota -t upload` |
| OTA filesystem (what `make ui` uses) | `rtk err pio run -e faraday_ota -t uploadfsota` |
| Frontend build/typecheck | `rtk err npm --prefix frontend run build` |
| Full OTA pipeline | `rtk summary make deploy` |
| Backup config zip | `rtk err make backup` |
| Restore config zip | `rtk err make restore ZIP=build/deploy/latest.zip` |
| Device status over HTTP | `make status` (or `rtk curl http://<device-ip>/api/status`) |
| LittleFS UI size gate | `du -sk data` (warn above `262144` B) |
| Firmware/UI artifact size | `ls -l .pio/build/faraday/firmware.bin data` |
| Working tree / history | `rtk git status`, `rtk git log --oneline -10` |
| Find a symbol/key | `rtk grep -rn "mqttStateTopic" src` |
| Inspect a dependency API | `rtk grep -rn "applyConfig" .pio/libdeps/faraday/ed-network/src` |
| Dependency summary | `rtk deps` |

Notes:

- `rtk err` is the default for builds/uploads: it keeps warnings and errors, drops the long
  success chatter. `rtk summary` is for the final memory/flash lines.
- `pio run -e faraday -t uploadfs` rewrites the LittleFS image; it does not build the
  firmware. Run a normal build/upload too when both changed.
- `make status` and every OTA target need the untracked `.env`; `make help` works without it.
- There is no test command to filter — `pio run -e faraday` and
  `cd frontend && npm run build` are the only automated checks.

## Finding and reading code

- Search source with `rtk grep -rn "<pattern>" src`; use `rtk rg` if you prefer ripgrep
  semantics (respects `.gitignore`, faster on `.pio`).
- Library APIs are the usual unknown: grep the checked-out dependency under
  `.pio/libdeps/faraday/<lib>/src`. The ed-* dependencies are pinned in `platformio.ini`.
- Do not `rtk read` the built bundle `data/assets/*.js|css`; edit `frontend/src` and rebuild.
- If filtered output omits something you need, recover it with `rtk recall <hash>` (the hash
  is printed in the truncated result) or re-run the raw command via `rtk proxy <cmd>`.

## Where output lands

- Build artifacts: `.pio/build/faraday/` (`firmware.bin`, `littlefs.bin`, map/elf).
- `data/` is Vite output; `emptyOutDir: true` deletes untracked files there on every build.
- OTA backups and restore temp files: `build/deploy/` (gitignored, contains secrets).
- Device logs: the serial console for live boot/runtime output; the `NetworkLogger` also
  batches them into two 16 KiB buffers and POSTs to the configured log host every 10 s while
  the device is online (default placeholder `192.168.1.2:5555/_bulk`).
- Deploy/firmware version stamps come from git; with no commits yet they resolve to
  `unknown`.

## Project-specific caveats

- The serial monitor is interactive: use plain `pio device monitor` (115200 8N1), not through
  `rtk`, or the live stream and exception decoder are unusable.
- Do not wrap `pio device monitor` or long interactive `make deploy` runs in a filter if you
  need to watch progress; the exit code is what matters.
- Never print `FARADAY_OTA_AUTH` from `.env` into logs or docs. `scripts/ota_env.py` injects
  it into `env:faraday_ota` at build time; `.env` itself must stay untracked.
- `pio run -e faraday_ota` without a command-line target may build with the dev fallback
  password; an actual upload target fails fast when `.env` keys are missing.
- Uploading the filesystem erases the whole LittleFS (`/config.bin` included). Take a
  backup (`make backup`) before `uploadfs`/`make ui`.
- Batch related reads/greps into one shell call to avoid extra turns.
