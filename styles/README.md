# Marked 2 Custom Styles

Three custom CSS stylesheets for [Marked 2](https://marked2app.com/) optimized for:
- **Comfortable reading** of technical documentation and notes
- **Presentation mode** for conference talks and meetups

Target display: 16" MacBook Pro (3456 × 2234)

---

## Available Styles

### 1. Editorial / Magazine (`marked2-editorial.css`)

A refined, elegant typography style with serif fonts.

| Element | Font |
|---------|------|
| Headings | Playfair Display |
| Body | Source Serif Pro |
| Code | JetBrains Mono |

**Aesthetic:** Classic editorial feel with decorative horizontal rules, warm accent colors (burgundy), and traditional typographic hierarchy.

---

### 2. Technical / Modern (`marked2-technical.css`)

A clean, geometric sans-serif style with strong visual hierarchy.

| Element | Font |
|---------|------|
| Headings | Inter |
| Body | Inter |
| Code | Fira Code |

**Aesthetic:** GitHub-inspired dark mode, blue accent colors, geometric markers on H3 headings, and crisp borders.

---

### 3. Warm / Approachable (`marked2-warm.css`)

A friendly, inviting style with warm colors and rounded aesthetics.

| Element | Font |
|---------|------|
| Headings | Nunito |
| Body | Lato |
| Code | IBM Plex Mono |

**Aesthetic:** Orange/green gradient accents, custom bullet points, rounded corners, and a cream-colored background.

---

## Installation

### Step 1: Install Fonts (Recommended)

Each theme uses system fonts as fallbacks, but for the best experience, install the recommended fonts:

#### Editorial Style Fonts

1. **Playfair Display** (Headings)
   - Download: https://fonts.google.com/specimen/Playfair+Display
   
2. **Source Serif Pro** (Body)
   - Download: https://fonts.google.com/specimen/Source+Serif+Pro
   
3. **JetBrains Mono** (Code)
   - Download: https://www.jetbrains.com/lp/mono/

#### Technical Style Fonts

1. **Inter** (Headings & Body)
   - Download: https://fonts.google.com/specimen/Inter
   
2. **Fira Code** (Code with ligatures)
   - Download: https://github.com/tonsky/FiraCode

#### Warm Style Fonts

1. **Nunito** (Headings)
   - Download: https://fonts.google.com/specimen/Nunito
   
2. **Lato** (Body)
   - Download: https://fonts.google.com/specimen/Lato
   
3. **IBM Plex Mono** (Code)
   - Download: https://fonts.google.com/specimen/IBM+Plex+Mono

#### Installing Fonts on macOS

```bash
# Option 1: Double-click the .ttf/.otf file and click "Install Font"

# Option 2: Drag fonts to Font Book.app

# Option 3: Copy to system fonts folder
cp *.ttf ~/Library/Fonts/
```

### Step 2: Add Style to Marked 2

1. Open **Marked 2** → **Settings** (⌘,)
2. Go to the **Style** tab
3. Click the **+** button under "Custom Styles"
4. Select the `.css` file you want to use
5. Select the style from the dropdown

Alternatively, use the Marked 2 URL handler:
```
x-marked://addstyle?file=/path/to/marked2-editorial.css
```

---

## Features

### Light & Dark Mode Support

All styles support both modes via:
- `@media (prefers-color-scheme: dark)` - Follows system preference
- `.inverted` class - Follows Marked 2's "Preview Dark Mode" setting

### Typography Optimized for Reading

- **Body text**: 18-19px base size (comfortable at arm's length ~60cm)
- **Line height**: 1.65-1.7 for readability
- **Max width**: 42-44em (~75-80 characters per line)
- **Paragraph spacing**: 1.5em between paragraphs

### Presentation-Ready Headings

- **H1**: 2.75em - Works as slide titles
- **H2**: 2em - Section headers
- **H3**: 1.5em - Subsections
- High contrast for projection

### Code Block Styling

- Distinct background colors
- 1.25em+ padding
- Rounded corners (6-10px)
- Horizontal scroll (no wrapping)
- Syntax highlighting compatible

### Print Styles

All themes include `@media print` rules:
- White background
- Black text
- No decorative shadows
- Page break handling

---

## Customization

Each stylesheet uses CSS custom properties (variables) at the top for easy customization:

```css
:root {
  /* Typography */
  --font-heading: "Your Font", fallback;
  --font-body: "Your Font", fallback;
  --font-code: "Your Mono Font", fallback;
  
  /* Font Sizes */
  --font-size-base: 18px;
  --font-size-h1: 2.75em;
  
  /* Colors */
  --color-bg: #ffffff;
  --color-text: #333333;
  --color-accent: #0066cc;
  
  /* Spacing */
  --content-max-width: 42em;
  --spacing-paragraph: 1.5em;
}
```

### Quick Customizations

**Change accent color:**
```css
:root {
  --color-accent: #your-color;
  --color-link: #your-color;
}
```

**Increase font size for presentations:**
```css
:root {
  --font-size-base: 22px;
  --font-size-h1: 3em;
}
```

**Wider content area:**
```css
:root {
  --content-max-width: 50em;
}
```

---

## Horizontal Rules as Slide Breaks

Each theme styles `---` (horizontal rules) as visual section dividers suitable for presentation slide breaks:

- **Editorial**: Section symbol (§) centered
- **Technical**: Diamond (◆) with gradient line
- **Warm**: Stars (✦) with gradient bar

---

## Browser/Webkit Inspector

To debug or customize styles in Marked 2:
1. Right-click in the preview
2. Select "Inspect Element"
3. Use the Webkit Inspector to test CSS changes

Or press `⌃⌥I` (Control + Option + I)

---

## License

These styles are provided for personal use. Feel free to modify and share.
