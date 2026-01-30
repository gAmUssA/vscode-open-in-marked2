## ADDED Requirements

### Requirement: Configurable Marked 2 application path

The extension SHALL allow users to configure the path to the Marked 2 application via VS Code settings.

#### Scenario: Use default path

- **WHEN** user has not configured a custom path
- **THEN** the system uses `/Applications/Marked 2.app` as the default path

#### Scenario: Use custom path

- **WHEN** user configures `openInMarked2.appPath` setting with a valid path
- **THEN** the system uses the configured path to launch Marked 2

#### Scenario: Invalid custom path

- **WHEN** user configures `openInMarked2.appPath` with a path that does not exist
- **THEN** the system displays an error message indicating the configured path is invalid

### Requirement: Settings schema

The extension SHALL contribute a configuration schema to VS Code settings.

#### Scenario: Setting appears in VS Code settings UI

- **WHEN** user opens VS Code settings and searches for "Marked 2"
- **THEN** the `openInMarked2.appPath` setting is visible with description and default value
