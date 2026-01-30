## ADDED Requirements

### Requirement: Open workspace folder in Marked 2

The extension SHALL provide a command that opens the workspace folder in Marked 2 for folder navigation.

#### Scenario: Open folder successfully

- **WHEN** user executes the "Open Folder in Marked 2" command with a workspace open
- **THEN** the workspace root folder opens in Marked 2

#### Scenario: No workspace open

- **WHEN** user executes the "Open Folder in Marked 2" command with no workspace open
- **THEN** the system displays an error message "No workspace folder open"

#### Scenario: Marked 2 not installed

- **WHEN** user executes the command and Marked 2 is not found at the configured path
- **THEN** the system displays an error message with instructions to install Marked 2 or configure the path
