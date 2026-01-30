# Open in Marked 2

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/vikgamov.vscode-open-in-marked2)](https://marketplace.visualstudio.com/items?itemName=vikgamov.vscode-open-in-marked2)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/vikgamov.vscode-open-in-marked2)](https://marketplace.visualstudio.com/items?itemName=vikgamov.vscode-open-in-marked2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A VS Code extension that opens Markdown and AsciiDoc files in [Marked 2](https://marked2app.com/) for preview.

![Open in Marked 2](images/icon.png)

## Features

- **Editor title button** - One-click access when viewing supported files
- **Keyboard shortcut** - Press `Cmd+Shift+M` to open in Marked 2
- **Context menus** - Right-click in editor or file explorer
- **Open folders** - Open entire folders in Marked 2 for navigation
- **Status bar indicator** - Shows when editing supported files
- **Auto-save** - Automatically saves file before opening (configurable)
- Supports Markdown: `.md`, `.markdown`, `.mdown`, `.mkd`
- Supports AsciiDoc: `.adoc`, `.asciidoc` (requires Marked 2 custom processor)

## Requirements

- macOS (Marked 2 is macOS-only)
- [Marked 2](https://marked2app.com/) installed

## Usage

1. Open a Markdown or AsciiDoc file in VS Code
2. Use any of these methods:
   - Click the **eye icon** in the editor title bar
   - Press `Cmd+Shift+M`
   - Right-click in the editor and select "Open in Marked 2"
   - Right-click a file in the explorer and select "Open in Marked 2"
   - Click "Marked 2" in the status bar
3. To open a folder: Right-click on any folder in the explorer and select "Open Folder in Marked 2"

## Configuration

| Setting | Description | Default |
|---------|-------------|---------|
| `openInMarked2.appPath` | Path to the Marked 2 application | `/Applications/Marked 2.app` |
| `openInMarked2.autoSave` | Automatically save file before opening | `true` |
| `openInMarked2.showEditorTitleButton` | Show button in editor title bar | `true` |
| `openInMarked2.showStatusBar` | Show status bar indicator | `true` |
| `openInMarked2.showContextMenu` | Show in editor/file context menus | `true` |
| `openInMarked2.showFolderContextMenu` | Show "Open Folder" in folder context menu | `true` |

### Example

If you installed Marked 2 in a custom location:

```json
{
  "openInMarked2.appPath": "/Users/yourname/Applications/Marked 2.app"
}
```

## Development

```bash
# Install dependencies
npm install

# Build the extension
npm run build

# Watch for changes
npm run build:watch

# Package for distribution
npm run package
```

## Installation

### From VS Code Marketplace

1. Open VS Code
2. Go to Extensions (`Cmd+Shift+X`)
3. Search for "Open in Marked 2"
4. Click Install

### From VSIX

```bash
code --install-extension vscode-open-in-marked2-1.0.0.vsix
```

## License

MIT - see [LICENSE](LICENSE) for details
