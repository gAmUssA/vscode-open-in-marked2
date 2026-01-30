## Why

Users expect to find file-related actions in context menus. Adding "Open in Marked 2" to both the editor context menu (right-click in editor) and file explorer context menu makes the command more discoverable and allows opening files without first opening them in the editor.

## What Changes

- Add "Open in Marked 2" to editor context menu for Markdown/AsciiDoc files
- Add "Open in Marked 2" to file explorer context menu for Markdown/AsciiDoc files
- Explorer context menu should work on file selection without opening the file

## Capabilities

### New Capabilities
- `context-menu`: Context menu entries for editor and file explorer

### Modified Capabilities
- `open-in-marked2`: Support opening files by URI (for explorer context menu, file may not be open in editor)

## Impact

- **Modified files:** `package.json` (add menu contributions), `src/extension.ts` (handle URI argument)
