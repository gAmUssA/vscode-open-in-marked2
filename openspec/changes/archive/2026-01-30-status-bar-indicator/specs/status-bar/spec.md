## ADDED Requirements

### Requirement: Status bar indicator

The extension SHALL display a status bar item when editing Markdown or AsciiDoc files.

#### Scenario: Status bar visible for Markdown files

- **WHEN** user opens a Markdown file
- **THEN** a status bar item with eye icon and "Marked 2" text appears

#### Scenario: Status bar visible for AsciiDoc files

- **WHEN** user opens an AsciiDoc file
- **THEN** a status bar item with eye icon and "Marked 2" text appears

#### Scenario: Status bar hidden for unsupported files

- **WHEN** user opens a file that is not Markdown or AsciiDoc
- **THEN** the status bar item is hidden

#### Scenario: Status bar updates on editor change

- **WHEN** user switches between editors
- **THEN** the status bar visibility updates based on the new active file

### Requirement: Status bar click action

The status bar item SHALL open the current file in Marked 2 when clicked.

#### Scenario: Click status bar to open file

- **WHEN** user clicks the status bar item
- **THEN** the current file opens in Marked 2
