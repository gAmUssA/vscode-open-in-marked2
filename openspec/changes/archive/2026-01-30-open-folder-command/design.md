## Context

Marked 2 supports opening folders for navigation between multiple Markdown files. This is useful for documentation projects with many files.

## Goals / Non-Goals

**Goals:**
- Add new command "Open Folder in Marked 2" that opens the workspace root
- Available in command palette

**Non-Goals:**
- Multi-root workspace support (uses first folder)
- Folder picker (uses workspace root)

## Decisions

### Decision 1: Use first workspace folder

**Choice:** Open `workspaceFolders[0]` when command is invoked

**Rationale:** Simple and covers the common case. Multi-root workspace support can be added later if needed.
