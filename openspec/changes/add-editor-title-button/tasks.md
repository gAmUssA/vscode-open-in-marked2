## 1. Update File Type Support

- [x] 1.1 Add `.adoc` and `.asciidoc` to the `SUPPORTED_EXTENSIONS` array in `src/extension.ts`
- [x] 1.2 Update error message from "not a Markdown file" to "not a supported file type"
- [x] 1.3 Add `onLanguage:asciidoc` to activation events in `package.json`

## 2. Add Editor Title Button

- [x] 2.1 Add `editor/title` menu contribution to `package.json`
- [x] 2.2 Configure `when` clause for Markdown and AsciiDoc language IDs
- [x] 2.3 Use `$(eye)` icon for the button

## 3. Update Documentation

- [x] 3.1 Update README.md to mention AsciiDoc support
- [x] 3.2 Update README.md to document the editor title button
- [x] 3.3 Add entry to CHANGELOG.md for new features
