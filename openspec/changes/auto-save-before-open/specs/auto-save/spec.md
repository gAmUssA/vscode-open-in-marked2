## ADDED Requirements

### Requirement: Auto-save before opening

The extension SHALL automatically save the active document before opening it in Marked 2 when the document has unsaved changes.

#### Scenario: Save dirty document before opening

- **WHEN** user opens a file with unsaved changes in Marked 2
- **AND** auto-save is enabled
- **THEN** the system saves the document before opening in Marked 2

#### Scenario: Skip save for clean document

- **WHEN** user opens a file with no unsaved changes in Marked 2
- **THEN** the system opens the file without saving

#### Scenario: Auto-save disabled

- **WHEN** user opens a file with unsaved changes in Marked 2
- **AND** auto-save is disabled in settings
- **THEN** the system opens the file without saving

## MODIFIED Requirements

### Requirement: Extension configuration

The extension SHALL provide a configuration option `openInMarked2.autoSave` to control auto-save behavior.

#### Scenario: Auto-save setting visible in VS Code settings

- **WHEN** user opens VS Code settings and searches for "Marked 2"
- **THEN** the `openInMarked2.autoSave` setting is visible with description and default value of `true`
