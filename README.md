# Open in Marked 2

A VS Code extension that opens Markdown files in [Marked 2](https://marked2app.com/) for preview.

## Features

- Open the current Markdown file in Marked 2 with a single command
- Configurable path to Marked 2 application
- Supports `.md`, `.markdown`, `.mdown`, and `.mkd` file extensions

## Requirements

- macOS (Marked 2 is macOS-only)
- [Marked 2](https://marked2app.com/) installed

## Usage

1. Open a Markdown file in VS Code
2. Run the command **"Open in Marked 2"** from the Command Palette (`Cmd+Shift+P`)

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
