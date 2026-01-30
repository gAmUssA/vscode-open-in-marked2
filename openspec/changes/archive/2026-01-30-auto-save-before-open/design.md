## Context

When a file has unsaved changes, opening it in Marked 2 shows stale content. This causes confusion when the preview doesn't match the editor.

## Goals / Non-Goals

**Goals:**
- Automatically save the document before opening in Marked 2
- Make auto-save behavior configurable (default: enabled)

**Non-Goals:**
- Prompt user before saving (too intrusive)
- Save all open files (only save the file being opened)

## Decisions

### Decision 1: Auto-save enabled by default

**Choice:** `openInMarked2.autoSave` defaults to `true`

**Rationale:** Most users expect the preview to match their current edits. Those who prefer manual control can disable it.

### Decision 2: Only save when document is dirty

**Choice:** Check `document.isDirty` before saving

**Rationale:** Avoid unnecessary save operations when file is already saved.
