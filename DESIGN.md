# DESIGN.md — nathanasfaw.com

A design system for Nathan Asfaw's software engineering portfolio. Read this before
changing any layout, component, or style. Every value below exists as a CSS custom
property in `src/layouts/Layout.astro`; use the token, never the raw value.

---

## 1. Visual Theme & Atmosphere

**Editorial minimalism with an engineer's accent.** The page reads like a well-set
printed résumé that happens to live in a terminal: a pure white canvas, near-black
ink, one oversized grotesque headline, and body copy set in a widely spaced
monospace. There is no brand color. Hierarchy comes from scale, weight, and
whitespace alone.

- **Mood:** calm, confident, unhurried. Lots of air; nothing competes with the words.
- **Voice in type:** lowercase for the greeting, navigation, and links (friendly,
  informal); uppercase tracked labels for section names (structural, quiet).
- **Signature moves:**
  1. A full-viewport hero with a greeting at display size (up to 8rem).
  2. Monospace body copy at generous line height (2.0).
  3. Hairline rules and bordered grid cells instead of cards, shadows, or fills.
  4. Square corners everywhere. Nothing is rounded.

---

## 2. Color Palette & Roles

Monochrome only. Every pairing below meets WCAG AA; body pairings meet AAA.

### Light (default)

| Token                 | Hex       | Role                                                     |
| --------------------- | --------- | -------------------------------------------------------- |
| `--color-bg`          | `#ffffff` | Page canvas                                              |
| `--color-ink`         | `#111111` | Headlines, nav, buttons, strong rules (18.9:1 on bg)     |
| `--color-text`        | `#2b2b2b` | Running body copy (14.2:1)                               |
| `--color-muted`       | `#5f5f5f` | Descriptions, periods, captions, labels (6.4:1)          |
| `--color-line`        | `#e5e5e5` | Hairline dividers and grid-cell borders                  |
| `--color-tile`        | `#111111` | Monogram tile fill                                       |
| `--color-tile-text`   | `#ffffff` | Monogram tile glyphs                                     |

### Dark (`prefers-color-scheme: dark`)

| Token                 | Hex       | Role                          |
| --------------------- | --------- | ----------------------------- |
| `--color-bg`          | `#0e0e0e` | Page canvas                   |
| `--color-ink`         | `#f4f4f4` | Headlines, nav, buttons       |
| `--color-text`        | `#dcdcdc` | Body copy                     |
| `--color-muted`       | `#a1a1a1` | Secondary copy (7.5:1)        |
| `--color-line`        | `#2a2a2a` | Hairlines                     |
| `--color-tile`        | `#f4f4f4` | Monogram tile fill            |
| `--color-tile-text`   | `#0e0e0e` | Monogram tile glyphs          |

**Rules**
- No accent hue. Interactive state is shown by underline, inversion, or weight.
- Never use pure `#000`. Ink is `#111` so large type doesn't vibrate on white.
- Photos are the only source of color on the page; let them carry it.

---

## 3. Typography Rules

Two families, both system stacks. No web fonts are downloaded, so text renders instantly.

| Role    | Stack                                                                                        |
| ------- | -------------------------------------------------------------------------------------------- |
| Display / UI (`--font-sans`) | `'Helvetica Neue', Helvetica, Arial, 'Segoe UI', system-ui, sans-serif`  |
| Body / code (`--font-mono`)  | `ui-monospace, 'SF Mono', Menlo, Consolas, 'Liberation Mono', 'Courier New', monospace` |

**Pairing logic:** a neutral grotesque for things you *scan* (names, titles, nav), and a
monospace for things you *read* (descriptions, intro), which nods to the engineering
craft without becoming a gimmick.

### Scale

| Token              | Size                         | Family | Weight | Tracking  | Line height | Used for                       |
| ------------------ | ---------------------------- | ------ | ------ | --------- | ----------- | ------------------------------ |
| `--text-display`   | `clamp(3rem, 11vw, 8rem)`    | sans   | 700    | `-0.045em`| 1.0         | Hero greeting                  |
| `--text-xl`        | `clamp(1.5rem, 4vw, 2.25rem)`| sans   | 700    | `-0.02em` | 1.2         | Contact email                  |
| `--text-lg`        | `1.25rem`                    | sans   | 700    | `-0.01em` | 1.35        | Item titles (roles, projects)  |
| `--text-md`        | `1.0625rem`                  | sans   | 400–700| `0`       | 1.4         | Nav links, wordmark, button    |
| `--text-body`      | `0.9375rem`                  | mono   | 400    | `0.02em`  | 2.0         | Paragraphs, descriptions       |
| `--text-sm`        | `0.8125rem`                  | mono   | 400    | `0.02em`  | 1.6         | Periods, tags, captions        |
| `--text-label`     | `0.875rem`                   | sans   | 700    | `0.14em`  | 1.2         | Section labels (UPPERCASE)     |

**Rules**
- Section labels: uppercase via CSS, muted color, never larger than `--text-label`.
- Greeting, nav, and links: lowercase. Apply with `text-transform: lowercase` on UI
  labels so the source text stays properly cased for screen readers.
- Body measure: cap paragraphs at `65ch`.
- Title pattern for roles: `Role — Organization` with an em dash and spaces.

---

## 4. Component Stylings

### Header
- Sticky on desktop, static on mobile. Background `--color-bg`, 1px `--color-line` bottom border.
- Left: wordmark, `--text-md`, weight 700, lowercase.
- Right: lowercase nav links (`--text-md`, weight 400, `--color-ink`), `--space-8` apart,
  then one **outlined button**.
- Mobile: wordmark and button on row one; nav scrolls horizontally on row two.

### Outlined button
- `1.5px solid var(--color-ink)`, square corners, padding `--space-3` × `--space-5`.
- Sans, weight 700, `--text-md`, lowercase.
- Hover/focus: invert (ink fill, bg-colored text). No transitions longer than 120ms.

### Hero
- Fills the viewport below the header (`100svh` minus header height).
- Content left-aligned and vertically centered within the container.
- Greeting `--text-display`; intro line in mono `--text-body` at `--color-muted`,
  ending in an underlined "read more" link to the About section.

### Section label
- `h2` styled as `--text-label`, muted, uppercase, tracked.
- `padding-bottom: --space-6`, 1px `--color-line` bottom border, `margin-bottom: --space-12`.

### Bordered grid (Experience)
- Cells share 1px `--color-line` borders: the grid draws top and left; each cell
  draws right and bottom.
- Cell padding: `--space-9` (36px) desktop, `--space-6` mobile.
- Inside: a 48px **monogram tile** (`--color-tile` fill, 2–3 letter mono glyphs),
  then title (`--text-lg`), period (`--text-sm`, muted), description (`--text-body`, muted).
- 1 column on mobile, 2 columns from `56rem`.

### Project row
- A numbered list with 1px `--color-line` dividers between rows. No cards.
- Columns on desktop: index (`01`, mono, muted) · content · link. Stacked on mobile.
- Tags: mono `--text-sm`, 1px `--color-line` border, square, padding `--space-1` × `--space-2`.
- Link: lowercase, underlined, with a trailing `↗` marked `aria-hidden`.

### Links
- Inline: `--color-ink`, 1px underline, offset `0.25em`. Hover: `--color-muted`.
- Nav: no underline at rest; underline on hover and focus.

### Photography
- Square corners, no borders, no shadows, and no filters on top of the photo.
- Portrait headshot cropped to `4 / 5`; group photos full container width with a mono caption.
- Always served via Astro `<Image>` with `widths` + `sizes`; always meaningful alt text.

---

## 5. Layout Principles

### Spacing scale (4px base)

| Token        | Value   | Typical use                                       |
| ------------ | ------- | ------------------------------------------------- |
| `--space-1`  | 4px     | Tag padding (vertical)                            |
| `--space-2`  | 8px     | Tag padding (horizontal), tag gaps                |
| `--space-3`  | 12px    | Button padding (vertical), title → period         |
| `--space-4`  | 16px    | Mobile gutter, period → description               |
| `--space-5`  | 20px    | Button padding (horizontal), tile → text          |
| `--space-6`  | 24px    | Label underline gap, mobile cell padding          |
| `--space-8`  | 32px    | Nav link gap, paragraph gap                       |
| `--space-9`  | 36px    | Grid cell padding (desktop)                       |
| `--space-12` | 48px    | Label → content                                   |
| `--space-16` | 64px    | Between subsections                               |
| `--space-24` | 96px    | Between sections (mobile)                         |
| `--space-32` | 128px   | Between sections (desktop)                        |

### Containers
- `--container`: `90rem` max for the header bar; `--content`: `76rem` for sections.
- Side gutters: `clamp(1rem, 5vw, 4rem)`.
- Prose blocks never exceed `65ch`, even inside a wide container.

### Rhythm
- Sections are separated by whitespace (`--section-gap`), not by background changes.
- Each section begins with a section label; nothing sits above it.

---

## 6. Depth & Elevation

Flat. There are **no shadows, gradients, blurs, or rounded corners** anywhere.
Depth comes from hairlines (`--color-line`) and, for the one sticky element (the header),
a solid background with a bottom border.

---

## 7. Do's and Don'ts

**Do**
- Let whitespace do the work; when in doubt, add space, not decoration.
- Keep one display-size element per page (the greeting).
- Use mono for anything longer than a sentence.
- Use tokens for every color, size, and space.

**Don't**
- Add an accent color, gradient, or icon set.
- Round corners or add drop shadows.
- Uppercase anything other than section labels.
- Ship client-side JavaScript for visual effects.
- Use web fonts; the system stacks are deliberate.

---

## 8. Responsive Behavior

Mobile first. Breakpoints:

| Name | Min width | Changes                                                               |
| ---- | --------- | --------------------------------------------------------------------- |
| base | —         | Single column; header in two rows; hero at ~80svh                     |
| md   | `48rem`   | Sticky one-row header; About goes two-column; project rows use 3 columns |
| lg   | `56rem`   | Experience grid goes two-column                                       |

- Tap targets ≥ 44px tall (nav links and button get vertical padding on mobile).
- No horizontal page scroll at 320px; only the mobile nav row may scroll sideways.
- Respect `prefers-reduced-motion` (smooth scrolling off).

---

## 9. Agent Prompt Guide

> Build in the style of nathanasfaw.com: white canvas `#ffffff`, ink `#111111`, muted
> `#5f5f5f`, hairlines `#e5e5e5`, no accent color. Headings in Helvetica Neue/Arial bold
> with tight tracking; body in a system monospace at 15px, line-height 2, letter-spacing
> 0.02em. Lowercase nav and links, uppercase tracked section labels over a 1px rule.
> Square corners, no shadows. Use the 4px spacing tokens. Content comes from
> `src/data/*`; components only lay it out.
