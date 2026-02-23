# Kalender ↔ Boltify Color Mapping

## Primary Color Mapping

| Boltify Token | Boltify Value | Kalender Equivalent | Kalender Value |
|---------------|--------------|---------------------|----------------|
| `primary-500` | `#66FF4C` (green) | `sky-500` | `#0EA5E9` |
| `primary-400` | `#80FF94` | `sky-400` | `#38BDF8` |
| `primary-600` | `#59E644` | `sky-600` | `#0284C7` |
| `secondary-500` | `#FF7A47` (orange) | `blue-500` | `#3B82F6` |
| `secondary-400` | `#FF8C66` | `blue-400` | `#60A5FA` |
| `secondary-600` | `#E66E40` | `blue-600` | `#2563EB` |
| N/A | N/A | `cyan-400` (accent) | `#22D3EE` |

## Token Translation Rules

When copying Boltify patterns to Kalender, replace:

```
primary-*   →  Use hsl var (--primary) for themed, or sky-* for direct Tailwind
secondary-* →  Use hsl var (--secondary) for themed, or blue-* for direct Tailwind
```

## CSS Variables (Kalender's globals.css)

```css
:root {
  --primary: 199 89% 48%;           /* sky-500 #0EA5E9 */
  --primary-foreground: 0 0% 100%;  /* white */
  --secondary: 217 91% 60%;         /* blue-500 #3B82F6 */
  --secondary-foreground: 0 0% 100%;/* white */
  --accent: 187 92% 69%;            /* cyan-400 #22D3EE */
  --accent-foreground: 240 10% 4%;  /* near-black */
}
```

## Full Color Usage Comparison

### Backgrounds

| Context | Boltify | Kalender |
|---------|---------|----------|
| Page | `bg-zinc-100 dark:bg-zinc-950` | `bg-zinc-100 dark:bg-zinc-950` |
| Card | `bg-white dark:bg-zinc-950` | `bg-white dark:bg-zinc-950` |
| Dropdown | `bg-white dark:bg-zinc-900` | Same |
| Input | `bg-zinc-100 dark:bg-zinc-800` | Same |
| Soft badge | `bg-{color}-500/10` | Same |
| Primary button | `bg-primary-500` | `bg-primary` (CSS var) |

### Borders

| Context | Boltify | Kalender |
|---------|---------|----------|
| Card | `border-zinc-500/10 dark:border-zinc-500/25` | `border-zinc-200 dark:border-zinc-500/25` |
| Dropdown | `border-zinc-300/25 dark:border-zinc-800/50` | Same |
| Outline button | `border-{color}-500/50` | Same |
| Bottom bar | `border-zinc-200 dark:border-neutral-700` | `border-zinc-200 dark:border-zinc-500/25` |

### Text

| Context | Boltify | Kalender |
|---------|---------|----------|
| Headings | `text-black dark:text-white` | `text-zinc-900 dark:text-white` |
| Body | `text-zinc-800 dark:text-zinc-200` | Same |
| Muted | `text-zinc-600 dark:text-neutral-400` | `text-zinc-500 dark:text-zinc-400` |
| Links | `text-zinc-600 hover:text-zinc-800 dark:text-neutral-400 dark:hover:text-neutral-200` | `text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white` |
| Active nav | `text-black dark:text-white` + before marker | Same + before marker |

### Buttons (Kalender-specific)

| Type | Classes |
|------|---------|
| Primary solid | `bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl` |
| Outline | `border border-primary/50 text-zinc-800 hover:border-primary dark:text-white rounded-xl` |
| Ghost | `text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-zinc-800` |
| Danger | `bg-red-500 hover:bg-red-600 text-white` |

### Nav Active Link

| Boltify | Kalender |
|---------|----------|
| `before:bg-primary-400` | `before:bg-primary/40` (or `before:bg-sky-400`) |

## Kalender-Specific Patterns Not in Boltify

1. **Gradient text**: `bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 bg-clip-text text-transparent`
2. **Accent color (cyan-400)**: Used for highlights, not present in Boltify
3. **Pricing cards**: Dynamic from API (not static)
4. **i18n system**: Custom context-based (pt/en/es), not react-i18next
5. **Theme toggle**: 3-state (Light/Dark/System) in navbar
6. **ISR**: Next.js `revalidate: 300` for pricing data

## Quick Decision Guide

When adding a new component or section:

1. **Use CSS vars** (`bg-primary`, `text-primary`, `border-primary`) when the element should respect the Kalender theme
2. **Use Tailwind colors directly** (`bg-sky-500`, `text-blue-500`) when you need a specific shade not covered by CSS vars
3. **Use zinc palette** for all neutral/gray tones (never use `gray-*` or `neutral-*`)
4. **Follow Boltify's border pattern**: `border-zinc-500/10 dark:border-zinc-500/25` for cards
5. **Follow Boltify's transition**: `transition-all duration-300 ease-in-out`
6. **Dark mode**: Always add `dark:` variants, test both modes
