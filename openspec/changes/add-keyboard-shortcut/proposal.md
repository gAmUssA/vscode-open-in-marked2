## Why

Power users prefer keyboard shortcuts over mouse clicks for frequently used commands. Adding a default keybinding for "Open in Marked 2" enables faster workflow without reaching for the mouse or opening the command palette.

## What Changes

- Add a default keyboard shortcut `Cmd+Shift+M` for the Open in Marked 2 command
- Keybinding only active when editing Markdown or AsciiDoc files

## Capabilities

### New Capabilities
- `keyboard-shortcut`: Default keybinding for quick access to Open in Marked 2

### Modified Capabilities
<!-- None -->

## Impact

- **Modified files:** `package.json` (add keybindings contribution)
- **No code changes:** Uses existing command
