# CapMonster

Lightweight desktop app to preview and record video/audio from capture cards. Built with Electron and Vue.js.

Perfect for streaming setups, Nintendo Switch capture, retro gaming, or any HDMI capture device (Elgato, AverMedia, generic USB grabbers, etc.).

## Features

- **Live preview** from any connected capture card at up to 1080p 60fps
- **Record** video + audio to WebM (VP9/Opus)
- **Screenshot** capture to PNG
- **Low-latency audio** monitoring (no echo cancellation, no processing)
- **Fullscreen** mode (double-click or F11)
- **Device memory** — remembers your last selected video/audio devices
- **Keyboard shortcuts** for everything
- **Cross-platform** — macOS, Windows, Linux

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `F5` | Start / Stop recording |
| `F9` | Take screenshot |
| `F11` | Toggle fullscreen |
| `M` | Toggle mute |

## Install

Download the latest release for your platform from the [Releases](https://github.com/josuemartinez/capmonster/releases) page:

| Platform | Format |
|----------|--------|
| macOS | `.dmg` |
| Windows | `.exe` |
| Linux | `.AppImage` |

## Development

```bash
# Clone
git clone https://github.com/josuemartinez/capmonster.git
cd capmonster

# Install dependencies
pnpm install

# Run
pnpm start
```

### Build for distribution

```bash
pnpm dist:mac     # macOS .dmg
pnpm dist:win     # Windows .exe
pnpm dist:linux   # Linux .AppImage
```

## Release

Push a version tag to trigger the CI/CD pipeline:

```bash
git tag v1.0.0
git push origin v1.0.0
```

GitHub Actions will automatically build for all platforms and create a release with downloadable binaries.

## Tech Stack

- [Electron](https://www.electronjs.org/) — Desktop runtime
- [Vue.js 3](https://vuejs.org/) — Reactive UI
- [MediaRecorder API](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder) — Recording
- [electron-builder](https://www.electron.build/) — Packaging & distribution

## License

[MIT](LICENSE)
