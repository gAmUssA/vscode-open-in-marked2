## ADDED Requirements

### Requirement: Editor title bar button

The extension SHALL display a button in the editor title bar when a supported file is open.

#### Scenario: Button visible for Markdown files

- **WHEN** user opens a file with `.md`, `.markdown`, `.mdown`, or `.mkd` extension
- **THEN** a button with an eye icon appears in the editor title bar

#### Scenario: Button visible for AsciiDoc files

- **WHEN** user opens a file with `.adoc` or `.asciidoc` extension
- **THEN** a button with an eye icon appears in the editor title bar

#### Scenario: Button hidden for unsupported files

- **WHEN** user opens a file that is not Markdown or AsciiDoc
- **THEN** the button is not visible in the editor title bar

### Requirement: Button triggers Open in Marked 2 command

The button SHALL execute the `openInMarked2.open` command when clicked.

#### Scenario: Click button to open file

- **WHEN** user clicks the editor title bar button
- **THEN** the current file opens in Marked 2 application
