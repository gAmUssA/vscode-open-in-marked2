## Why

VS Code users who write Markdown need a way to preview their documents in Marked 2, a powerful macOS Markdown preview app with advanced features like custom styles, export options, and live preview. Currently, users must manually open files in Marked 2, breaking their workflow.

## What Changes

- Create a new VS Code extension from scratch with full TypeScript scaffold
- Add "Open in Marked 2" command that opens the current Markdown file in Marked 2
- Provide configurable path to Marked 2 application (for non-standard installations)
- Include build tooling (npm scripts, esbuild bundling)
- Include CI readiness with GitHub Actions workflow for build/test/package

## Capabilities

### New Capabilities
- `open-in-marked2`: Core command to open current Markdown file in Marked 2 app
- `extension-configuration`: VS Code settings for configurable Marked 2 app path
- `extension-scaffold`: Base extension structure with TypeScript, build commands, and CI

### Modified Capabilities
<!-- None - this is a new project -->

## Impact

- **New files:** `package.json`, `src/extension.ts`, `tsconfig.json`, `.vscodeignore`, `esbuild.js`, `.github/workflows/ci.yml`, `README.md`, `CHANGELOG.md`
- **Dependencies:** `@types/vscode`, `esbuild`, `typescript`
- **Platform:** macOS only (Marked 2 is macOS-exclusive)
