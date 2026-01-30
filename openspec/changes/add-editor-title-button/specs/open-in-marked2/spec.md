## MODIFIED Requirements

### Requirement: Open current Markdown file in Marked 2

The extension SHALL provide a command that opens the currently active Markdown or AsciiDoc file in the Marked 2 application.

#### Scenario: Successfully open Markdown file

- **WHEN** user executes the "Open in Marked 2" command with a Markdown file active
- **THEN** the system opens the file in Marked 2 application
- **AND** Marked 2 becomes the active application

#### Scenario: Successfully open AsciiDoc file

- **WHEN** user executes the "Open in Marked 2" command with an AsciiDoc file active
- **THEN** the system opens the file in Marked 2 application
- **AND** Marked 2 becomes the active application

#### Scenario: No active editor

- **WHEN** user executes the "Open in Marked 2" command with no file open
- **THEN** the system displays an error message "No active file to open"

#### Scenario: Unsupported file active

- **WHEN** user executes the "Open in Marked 2" command with an unsupported file active
- **THEN** the system displays an error message "Current file is not a supported file type"

#### Scenario: Marked 2 not installed

- **WHEN** user executes the command and Marked 2 is not found at the configured path
- **THEN** the system displays an error message with instructions to install Marked 2 or configure the path

### Requirement: Support Markdown file extensions

The extension SHALL recognize files with `.md`, `.markdown`, `.mdown`, and `.mkd` extensions as Markdown files.

#### Scenario: Recognize .md extension

- **WHEN** user opens a file with `.md` extension
- **THEN** the system treats it as a valid file for the Open in Marked 2 command

#### Scenario: Recognize .markdown extension

- **WHEN** user opens a file with `.markdown` extension
- **THEN** the system treats it as a valid file for the Open in Marked 2 command

## ADDED Requirements

### Requirement: Support AsciiDoc file extensions

The extension SHALL recognize files with `.adoc` and `.asciidoc` extensions as AsciiDoc files.

#### Scenario: Recognize .adoc extension

- **WHEN** user opens a file with `.adoc` extension
- **THEN** the system treats it as a valid file for the Open in Marked 2 command

#### Scenario: Recognize .asciidoc extension

- **WHEN** user opens a file with `.asciidoc` extension
- **THEN** the system treats it as a valid file for the Open in Marked 2 command
