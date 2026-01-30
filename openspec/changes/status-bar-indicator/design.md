## Context

A status bar indicator provides always-visible access to the Open in Marked 2 command and shows users that the extension is active.

## Goals / Non-Goals

**Goals:**
- Add a status bar item that appears when editing Markdown or AsciiDoc files
- Clicking the status bar item opens the current file in Marked 2
- Show an eye icon with "Marked 2" text

**Non-Goals:**
- Status bar item configuration (always visible for supported files)
- Multiple status bar items

## Decisions

### Decision 1: Right-aligned status bar item

**Choice:** Use `StatusBarAlignment.Right` with priority 100

**Rationale:** Right side is conventional for file-related actions. Priority 100 places it in a reasonable position.

### Decision 2: Update visibility on editor change

**Choice:** Listen to `onDidChangeActiveTextEditor` event

**Rationale:** Status bar should only show for supported file types, so we need to update visibility when the active editor changes.
