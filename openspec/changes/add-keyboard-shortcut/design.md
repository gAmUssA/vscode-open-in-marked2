## Context

The extension provides "Open in Marked 2" via command palette and editor title button. Power users want keyboard-driven access.

## Goals / Non-Goals

**Goals:**
- Add default keybinding `Cmd+Shift+M` for quick access
- Only active when editing Markdown or AsciiDoc files

**Non-Goals:**
- Custom keybinding configuration (users can override in VS Code settings)

## Decisions

### Decision 1: Use Cmd+Shift+M as default keybinding

**Choice:** `Cmd+Shift+M` (M for Marked)

**Alternatives considered:**
- `Cmd+Shift+P` then type: Too slow
- `Cmd+M`: May conflict with minimize window

**Rationale:** Memorable (M for Marked), unlikely to conflict, follows VS Code conventions.
