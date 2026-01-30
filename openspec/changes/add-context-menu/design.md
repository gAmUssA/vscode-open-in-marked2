## Context

Users expect file-related actions in context menus. The extension should appear in both editor right-click menu and file explorer right-click menu.

## Goals / Non-Goals

**Goals:**
- Add "Open in Marked 2" to editor context menu
- Add "Open in Marked 2" to file explorer context menu
- Support opening files by URI (file may not be open in editor)

**Non-Goals:**
- Multi-file selection support (future enhancement)

## Decisions

### Decision 1: Accept URI argument in command handler

**Choice:** Modify `openInMarked2` function to accept optional `vscode.Uri` parameter

**Rationale:** Explorer context menu passes the file URI as an argument. The command must handle both cases: called from editor (no URI, use active editor) and called from explorer (URI provided).
