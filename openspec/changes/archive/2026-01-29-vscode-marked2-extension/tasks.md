## 1. Project Setup

- [x] 1.1 Create `package.json` with VS Code extension metadata, scripts, and dependencies
- [x] 1.2 Create `tsconfig.json` with TypeScript configuration
- [x] 1.3 Create `esbuild.js` build script for bundling
- [x] 1.4 Create `.vscodeignore` to exclude dev files from packaged extension

## 2. Extension Core

- [x] 2.1 Create `src/extension.ts` with activate/deactivate functions
- [x] 2.2 Implement `openInMarked2` command handler
- [x] 2.3 Add Markdown file validation (check extensions: .md, .markdown, .mdown, .mkd)
- [x] 2.4 Implement Marked 2 launch using macOS `open` command

## 3. Configuration

- [x] 3.1 Add configuration contribution to `package.json` for `openInMarked2.appPath`
- [x] 3.2 Implement configuration reading in extension code
- [x] 3.3 Add path validation before launching Marked 2

## 4. Error Handling

- [x] 4.1 Handle "no active editor" case with user-friendly message
- [x] 4.2 Handle "not a Markdown file" case with user-friendly message
- [x] 4.3 Handle "Marked 2 not found" case with instructions

## 5. CI/CD

- [x] 5.1 Create `.github/workflows/ci.yml` with build and lint jobs
- [x] 5.2 Add npm scripts for lint, compile, build, and package

## 6. Documentation

- [x] 6.1 Create `README.md` with installation and usage instructions
- [x] 6.2 Create `CHANGELOG.md` with initial release notes
