## Why

Users currently need to open the Command Palette and search for "Open in Marked 2" to preview their Markdown files. Adding a button to the editor title bar provides one-click access, improving discoverability and workflow speed. Additionally, Marked 2 supports custom processors for AsciiDoc files, so the extension should support `.adoc` and `.asciidoc` files as well.

## What Changes

- Add a button icon to the editor title bar when a Markdown or AsciiDoc file is open
- Button triggers the existing `openInMarked2.open` command
- Button only visible for supported files (`.md`, `.markdown`, `.mdown`, `.mkd`, `.adoc`, `.asciidoc`)
- Extend file type validation to include AsciiDoc extensions

## Capabilities

### New Capabilities
- `editor-title-button`: Adds a clickable button to the editor title bar for quick access to Open in Marked 2

### Modified Capabilities
- `open-in-marked2`: Extend supported file extensions to include `.adoc` and `.asciidoc`

## Impact

- **Modified files:** `package.json` (add menu contribution, update activation events), `src/extension.ts` (add AsciiDoc extensions)
- **New files:** Icon asset (SVG or use built-in icon)
- **Specs:** Update `open-in-marked2` spec to include AsciiDoc file support
