## Why

When a file has unsaved changes, opening it in Marked 2 shows stale content that doesn't match what's in the editor. This causes confusion when the preview doesn't reflect recent edits. Auto-saving before opening ensures Marked 2 always shows the current content.

## What Changes

- Automatically save the active document before opening in Marked 2 (if it has unsaved changes)
- Add optional setting to disable auto-save behavior

## Capabilities

### New Capabilities
- `auto-save`: Automatically save file before opening in Marked 2

### Modified Capabilities
- `open-in-marked2`: Save document before launching Marked 2
- `extension-configuration`: Add setting to control auto-save behavior

## Impact

- **Modified files:** `package.json` (add configuration option), `src/extension.ts` (add save logic)
