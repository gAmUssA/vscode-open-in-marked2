## Why

Marked 2 supports opening folders for navigation between multiple Markdown files. For documentation projects with many files, opening the entire workspace folder in Marked 2 provides a better experience than opening individual files.

## What Changes

- Add new command "Open Folder in Marked 2" that opens the workspace root in Marked 2
- Command available in command palette and optionally in explorer context menu

## Capabilities

### New Capabilities
- `open-folder`: New command to open workspace folder in Marked 2

### Modified Capabilities
<!-- None -->

## Impact

- **Modified files:** `package.json` (add new command), `src/extension.ts` (implement folder opening)
- **New command:** `openInMarked2.openFolder`
