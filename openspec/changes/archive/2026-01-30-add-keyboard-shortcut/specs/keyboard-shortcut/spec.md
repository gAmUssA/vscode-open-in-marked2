## ADDED Requirements

### Requirement: Default keyboard shortcut

The extension SHALL provide a default keyboard shortcut `Cmd+Shift+M` for the Open in Marked 2 command.

#### Scenario: Trigger command with keyboard shortcut

- **WHEN** user presses `Cmd+Shift+M` while editing a Markdown or AsciiDoc file
- **THEN** the current file opens in Marked 2

#### Scenario: Shortcut inactive for unsupported files

- **WHEN** user presses `Cmd+Shift+M` while editing a non-Markdown/AsciiDoc file
- **THEN** the shortcut does not trigger the Open in Marked 2 command
