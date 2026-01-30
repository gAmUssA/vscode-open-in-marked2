## Context

The extension currently provides a command palette entry for "Open in Marked 2". Users want faster access via a button in the editor title bar, which is a common pattern for file-specific actions in VS Code extensions.

Additionally, Marked 2 supports custom processors, allowing it to render AsciiDoc files. The extension should recognize AsciiDoc files alongside Markdown.

## Goals / Non-Goals

**Goals:**
- Add a button to the editor title bar that appears for supported file types
- Use a recognizable icon (Marked 2 logo or eye/preview icon)
- Extend file type support to include AsciiDoc (`.adoc`, `.asciidoc`)
- Button triggers the existing command, no new logic needed

**Non-Goals:**
- Custom icon design (use VS Code's built-in icons)
- Context menu entries (future enhancement)
- Keyboard shortcut (already available via command palette)

## Decisions

### Decision 1: Use VS Code's built-in `eye` icon

**Choice:** Use `$(eye)` icon reference from VS Code's built-in icon set

**Alternatives considered:**
- Custom SVG icon: Requires bundling assets, more maintenance
- Marked 2 logo: Copyright concerns, not available as built-in icon

**Rationale:** Built-in icons are consistent with VS Code's design language, require no additional assets, and are immediately available.

### Decision 2: Use `editor/title` menu contribution point

**Choice:** Add button via `contributes.menus["editor/title"]` in package.json

**Alternatives considered:**
- Editor actions API: More complex, not needed for simple button
- Status bar item: Less discoverable, not file-specific

**Rationale:** The `editor/title` contribution point is the standard way to add buttons to the editor title bar. It supports `when` clauses for conditional visibility.

### Decision 3: Use `resourceLangId` for conditional visibility

**Choice:** Show button when `resourceLangId == markdown || resourceLangId == asciidoc`

**Alternatives considered:**
- `resourceExtname` matching: More verbose, requires listing all extensions
- Always visible: Confusing for non-supported files

**Rationale:** VS Code's language ID system handles extension-to-language mapping. Markdown and AsciiDoc have well-defined language IDs.

## Risks / Trade-offs

- **Risk:** AsciiDoc language ID may vary by extension → Test with common AsciiDoc extensions, fall back to extension matching if needed
- **Trade-off:** Using built-in icon is less distinctive but more maintainable
