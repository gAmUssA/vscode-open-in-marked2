# Open in Marked 2

A VS Code extension that opens Markdown and AsciiDoc files in [Marked 2](https://marked2app.com/) for preview.

## Features

- **Editor title button** - One-click access when viewing supported files
- Open the current Markdown or AsciiDoc file in Marked 2 with a single command
- Configurable path to Marked 2 application
- Supports Markdown: `.md`, `.markdown`, `.mdown`, `.mkd`
- Supports AsciiDoc: `.adoc`, `.asciidoc` (requires Marked 2 custom processor)

## Requirements

- macOS (Marked 2 is macOS-only)
- [Marked 2](https://marked2app.com/) installed

## Usage

1. Open a Markdown or AsciiDoc file in VS Code
2. Click the **eye icon** in the editor title bar, or
3. Run the command **"Open in Marked 2"** from the Command Palette (`Cmd+Shift+P`)

## Configuration

| Setting | Description | Default |
|---------|-------------|---------|
| `openInMarked2.appPath` | Path to the Marked 2 application | `/Applications/Marked 2.app` |

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

## License

MIT
