# Changelog

All notable changes to the "Open in Marked 2" extension will be documented in this file.

## [1.0.1] - 2026-01-30

### Changed

- Renamed extension to "Better Open in Marked2"
- Updated GitHub repository URLs

## [1.0.0] - 2026-01-30

### Added

- Prepared for VS Code Marketplace publishing
- Added extension icon
- Added LICENSE file
- Added marketplace badges to README
- Added installation instructions

## [0.0.3] - 2026-01-30

### Added

- Keyboard shortcut `Cmd+Shift+M` for quick access
- Context menu entries in editor and file explorer
- "Open Folder in Marked 2" command for opening folders
- Right-click on folders in explorer to open in Marked 2
- Auto-save file before opening in Marked 2 (configurable via `openInMarked2.autoSave`)
- Status bar indicator for Markdown/AsciiDoc files
- Configuration options to show/hide UI elements:
  - `showEditorTitleButton` - Toggle editor title bar button
  - `showStatusBar` - Toggle status bar indicator
  - `showContextMenu` - Toggle context menu entries
  - `showFolderContextMenu` - Toggle folder context menu entry

## [0.0.2] - 2026-01-30

### Added

- Editor title bar button for one-click access to Open in Marked 2
- AsciiDoc file support (`.adoc`, `.asciidoc`) for use with Marked 2 custom processors

### Changed

- Updated error message for unsupported file types

## [0.0.1] - 2026-01-29

### Added

- Initial release
- "Open in Marked 2" command to open current Markdown file in Marked 2
- Configurable path to Marked 2 application via `openInMarked2.appPath` setting
- Support for `.md`, `.markdown`, `.mdown`, and `.mkd` file extensions
- Error handling for missing files, non-Markdown files, and missing Marked 2 installation
