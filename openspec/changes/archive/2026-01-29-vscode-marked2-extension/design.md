## Context

This is a greenfield VS Code extension project. The goal is to provide a seamless workflow for macOS users who prefer Marked 2 for Markdown preview over VS Code's built-in preview.

**Current state:** No extension exists. Users must manually open Marked 2 and drag files or use Finder.

**Constraints:**
- macOS only (Marked 2 is macOS-exclusive)
- Marked 2 default path: `/Applications/Marked 2.app`
- Must handle non-standard installation paths

## Goals / Non-Goals

**Goals:**
- Single command to open current Markdown file in Marked 2
- Configurable app path for non-standard installations
- Clean TypeScript codebase with proper build tooling
- CI pipeline that builds, tests, and packages the extension

**Non-Goals:**
- Windows/Linux support (Marked 2 doesn't exist on these platforms)
- Two-way sync between VS Code and Marked 2
- Embedded Marked 2 preview within VS Code
- Auto-refresh on file save (Marked 2 handles this natively)

## Decisions

### Decision 1: Use `open` command for launching Marked 2

**Choice:** Use macOS `open -a "Marked 2" <file>` via Node.js `child_process.exec`

**Alternatives considered:**
- AppleScript: More complex, no benefit for simple file opening
- Direct app bundle execution: Less portable, harder to configure

**Rationale:** The `open` command is the standard macOS way to open files with specific applications. It handles app activation, file association, and is configurable via the `-a` flag.

### Decision 2: Use esbuild for bundling

**Choice:** esbuild with single-file output

**Alternatives considered:**
- webpack: Slower, more complex configuration
- No bundling: Larger extension size, slower activation

**Rationale:** esbuild is fast, simple to configure, and produces optimized bundles. VS Code extensions benefit from single-file bundling for faster activation.

### Decision 3: Configuration via VS Code settings

**Choice:** Use `vscode.workspace.getConfiguration()` with a single setting for app path

**Alternatives considered:**
- Environment variables: Not user-friendly for VS Code users
- Separate config file: Unnecessary complexity

**Rationale:** VS Code settings are the standard way to configure extensions. Users can set values in settings.json or via the Settings UI.

### Decision 4: GitHub Actions for CI

**Choice:** Single workflow with build, lint, and package jobs

**Alternatives considered:**
- Multiple workflows: Unnecessary for a simple extension
- No CI: Misses opportunity for quality gates

**Rationale:** GitHub Actions is free for public repos and integrates well with VS Code extension publishing workflow.

## Risks / Trade-offs

- **Risk:** Marked 2 not installed → Show clear error message with link to Marked 2 website
- **Risk:** Custom path invalid → Validate path exists before attempting to open
- **Risk:** File not saved → Prompt user to save or use temp file (out of scope for v1)
- **Trade-off:** macOS-only limits audience but matches Marked 2's platform availability
