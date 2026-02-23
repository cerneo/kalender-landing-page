# Design Tokens

## Color Palette

### Boltify Primary (green — NOT used in Kalender)
```css
--color-primary-50:  #F5FFF4;
--color-primary-100: #E6FFEC;
--color-primary-200: #CCFFD8;
--color-primary-300: #99FFAD;
--color-primary-400: #80FF94;
--color-primary-500: #66FF4C;
--color-primary-600: #59E644;
--color-primary-700: #4CC63B;
--color-primary-800: #3E9E32;
--color-primary-900: #307729;
--color-primary-950: #1C4E1F;
```

### Boltify Secondary (orange — NOT used in Kalender)
```css
--color-secondary-50:  #FFF4EF;
--color-secondary-100: #FFE4DA;
--color-secondary-200: #FFC6B0;
--color-secondary-300: #FFA388;
--color-secondary-400: #FF8C66;
--color-secondary-500: #FF7A47;
--color-secondary-600: #E66E40;
--color-secondary-700: #CC6138;
--color-secondary-800: #B35430;
--color-secondary-900: #8A3F24;
--color-secondary-950: #4A2113;
```

### Available Named Colors
```typescript
type TColors =
  | 'primary'    // configurable per-project
  | 'secondary'  // configurable per-project
  | 'zinc'       // neutral gray
  | 'red'        // danger/error
  | 'amber'      // warning
  | 'lime'       // success alt
  | 'emerald'    // success
  | 'sky'        // info — THIS IS KALENDER'S PRIMARY
  | 'blue'       // — THIS IS KALENDER'S SECONDARY
  | 'violet'     // accent alt
```

### Zinc Scale (used extensively)
```
zinc-50:  #fafafa
zinc-100: #f4f4f5   ← light page bg
zinc-200: #e4e4e7   ← light borders
zinc-300: #d4d4d8
zinc-400: #a1a1aa   ← muted text (light)
zinc-500: #71717a   ← secondary text
zinc-600: #52525b   ← body text (light)
zinc-700: #3f3f46
zinc-800: #27272a   ← body text (dark), headings (light)
zinc-900: #18181b
zinc-950: #09090b   ← dark page bg, dark card bg
```

## Typography

### Font Family
```css
--font-sans: "Urbanist", ui-sans-serif, system-ui, sans-serif;
/* Kalender uses: Inter (via Google Fonts) */
```

### Heading Scale
```css
h1, .h1 { @apply text-4xl text-black dark:text-white; }
h2, .h2 { @apply text-3xl text-black dark:text-white; }
h3, .h3 { @apply text-2xl text-black dark:text-white; }
h4, .h4 { @apply text-xl text-black dark:text-white; }
h5, .h5 { @apply text-lg text-black dark:text-white; }
h6, .h6 { @apply text-base text-black dark:text-white; }
```

### Font Size Config
```
Default: 13px (Boltify admin)
Options: 12 | 13 | 14 | 15 | 16 | 17 | 18
```

## Spacing

Boltify uses Tailwind's default spacing scale. Key patterns:
```
Container:    max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Section py:   py-10 (small) | py-14 (medium) | py-20 (large)
Card padding: p-4 (header/body/footer)
Gaps:         gap-2 (tight) | gap-4 (default) | gap-6 (relaxed) | gap-8 (generous)
```

## Borders

### Border Width Options
```typescript
type TBorderWidth =
  | 'border-0'
  | 'border'      // 1px
  | 'border-2'    // 2px (Boltify default)
  | 'border-4'
  | 'border-8'
```

### Border Colors
```css
/* Default border color (TW4 override) */
border-color: var(--color-zinc-200, currentColor);

/* Card borders */
border border-zinc-500/10 dark:border-zinc-500/25

/* Dropdown/menu borders */
border-zinc-300/25 dark:border-zinc-800/50

/* Dividers inside components */
border-b border-inherit last:border-none

/* Separator */
border-s border-zinc-500/25
```

### Border Radius Options
```typescript
type TRounded =
  | 'rounded-none'
  | 'rounded-xs'
  | 'rounded-sm'
  | 'rounded-md'
  | 'rounded-lg'    // Boltify default
  | 'rounded-xl'
  | 'rounded-2xl'
  | 'rounded-3xl'
  | 'rounded-full'
```

## Shadows
```
Card:     (no shadow by default, border only)
Modal:    shadow-2xl
Dropdown: shadow-lg
Tooltip:  drop-shadow-lg backdrop-blur-xs
```

## Transitions

### Global Default
```typescript
transition: 'transition-all duration-300 ease-in-out'
```

### Link Transitions
```css
a { @apply transition-opacity duration-300 ease-in-out; }
a:hover { @apply opacity-75; }
```

### Specific Patterns
```
Standard:    transition-all duration-300 ease-in-out
Backdrop:    ease: 'easeInOut', duration: 0.3  (framer-motion)
Collapse:    duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98]
Card hover:  transition-all duration-300 ease-in-out hover:outline-blue-500
```

## Dark Mode

### Implementation
```css
/* TW4 custom variant */
@custom-variant dark (&:where(.dark, .dark *));

/* Class-based (TW3) */
darkMode: ["class"]
```

### Base Styles
```css
body {
  @apply bg-zinc-100 text-zinc-800 dark:bg-zinc-950 dark:text-zinc-200;
}

html.dark {
  @apply bg-zinc-950;
}
```

### Dark Mode Modes
```typescript
type TDarkMode = 'dark' | 'light' | 'system';
// Default: 'system'
```

### Key Dark Mode Patterns
```
Background:     bg-zinc-100          → dark:bg-zinc-950
Card bg:        bg-white             → dark:bg-zinc-950
Text heading:   text-black           → dark:text-white
Text body:      text-zinc-800        → dark:text-zinc-200
Text muted:     text-zinc-600        → dark:text-neutral-400
Text subtle:    text-zinc-500        → dark:text-zinc-400
Card border:    border-zinc-500/10   → dark:border-zinc-500/25
Dropdown bg:    bg-white             → dark:bg-zinc-900
Dropdown border:border-zinc-300/25   → dark:border-zinc-800/50
Input bg:       bg-zinc-100          → dark:bg-zinc-800
Input border:   border-zinc-100      → dark:border-zinc-800
Link text:      text-zinc-600        → dark:text-neutral-400
Link hover:     hover:text-zinc-800  → dark:hover:text-neutral-200
```

## Theme Config (Boltify)

```typescript
const themeConfig = {
  projectTitle: 'Bolt',
  language: 'en',
  theme: 'system',           // 'dark' | 'light' | 'system'
  themeColor: 'blue',        // default color for all components
  themeColorShade: '500',    // shade intensity
  rounded: 'rounded-lg',    // default border radius
  borderWidth: 'border-2',  // default border width
  transition: 'transition-all duration-300 ease-in-out',
  fontSize: 13,
};
```
