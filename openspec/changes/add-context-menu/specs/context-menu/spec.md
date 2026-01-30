## ADDED Requirements

### Requirement: Editor context menu entry

The extension SHALL display "Open in Marked 2" in the editor context menu for supported files.

#### Scenario: Right-click in editor

- **WHEN** user right-clicks in an editor with a Markdown or AsciiDoc file
- **THEN** "Open in Marked 2" appears in the context menu
- **AND** clicking it opens the file in Marked 2

### Requirement: File explorer context menu entry

The extension SHALL display "Open in Marked 2" in the file explorer context menu for supported files.

#### Scenario: Right-click on file in explorer

- **WHEN** user right-clicks on a Markdown or AsciiDoc file in the file explorer
- **THEN** "Open in Marked 2" appears in the context menu
- **AND** clicking it opens the file in Marked 2 without opening it in the editor first

## MODIFIED Requirements

### Requirement: Open current Markdown file in Marked 2

The extension SHALL provide a command that opens the currently active Markdown or AsciiDoc file in the Marked 2 application. The command SHALL accept an optional URI argument for opening files that are not currently active in the editor.

#### Scenario: Open via URI argument

- **WHEN** command is invoked with a file URI argument
- **THEN** the system opens the specified file in Marked 2
