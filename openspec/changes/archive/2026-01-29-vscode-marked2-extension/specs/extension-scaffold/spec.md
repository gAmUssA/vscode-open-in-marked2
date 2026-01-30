## ADDED Requirements

### Requirement: TypeScript project structure

The extension SHALL use TypeScript with proper project configuration.

#### Scenario: TypeScript compilation succeeds

- **WHEN** developer runs `npm run compile`
- **THEN** TypeScript files in `src/` are compiled without errors

#### Scenario: Type checking enabled

- **WHEN** developer writes code with type errors
- **THEN** the TypeScript compiler reports the errors

### Requirement: Build tooling with esbuild

The extension SHALL use esbuild for bundling the extension into a single file.

#### Scenario: Development build

- **WHEN** developer runs `npm run build`
- **THEN** the extension is bundled to `dist/extension.js`

#### Scenario: Production build

- **WHEN** developer runs `npm run package`
- **THEN** the extension is bundled with minification enabled

### Requirement: GitHub Actions CI workflow

The extension SHALL include a GitHub Actions workflow for continuous integration.

#### Scenario: CI runs on push

- **WHEN** code is pushed to the repository
- **THEN** GitHub Actions runs the CI workflow

#### Scenario: CI runs on pull request

- **WHEN** a pull request is opened
- **THEN** GitHub Actions runs the CI workflow

#### Scenario: CI workflow steps

- **WHEN** CI workflow executes
- **THEN** it installs dependencies, runs linting, compiles TypeScript, and builds the extension

### Requirement: VS Code extension manifest

The extension SHALL include a valid `package.json` with VS Code extension metadata.

#### Scenario: Extension activates on Markdown files

- **WHEN** user opens a Markdown file
- **THEN** the extension activates (activation event: `onLanguage:markdown`)

#### Scenario: Command registered in command palette

- **WHEN** user opens the command palette
- **THEN** "Open in Marked 2" command is available
