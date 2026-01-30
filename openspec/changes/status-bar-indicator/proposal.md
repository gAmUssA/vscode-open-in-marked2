## Why

A status bar indicator provides always-visible access to the Open in Marked 2 command and shows users that the extension is active. It's especially useful for users who don't remember keyboard shortcuts or command names.

## What Changes

- Add a status bar item that appears when editing Markdown or AsciiDoc files
- Clicking the status bar item opens the current file in Marked 2
- Status bar shows an eye icon with "Marked 2" text

## Capabilities

### New Capabilities
- `status-bar`: Status bar indicator for quick access and visibility

### Modified Capabilities
<!-- None -->

## Impact

- **Modified files:** `src/extension.ts` (create and manage status bar item)
- **New UI element:** Status bar item with click handler
