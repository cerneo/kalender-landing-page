# Kalender Design System (based on Boltify)

Reference documentation extracted from the Boltify design system, adapted for Kalender's color palette.

## Files

| File | Content |
|------|---------|
| [tokens.md](./tokens.md) | Design tokens: colors, typography, spacing, borders, shadows, transitions, dark mode |
| [components.md](./components.md) | UI component patterns: Button, Card, Badge, Modal, Accordion, Dropdown, Alert, Avatar, Tooltip, Progress |
| [form-components.md](./form-components.md) | Form patterns: Input, Select, Checkbox/Switch, Offcanvas, Collapse, Validation |
| [landing-patterns.md](./landing-patterns.md) | Landing page section patterns: Header/Navbar, Hero, Features, Footer |
| [kalender-mapping.md](./kalender-mapping.md) | How Boltify tokens map to Kalender's identity colors |

## Quick Reference

### Kalender Colors (mapped from Boltify)
```
Primary:   sky-500   (#0EA5E9) — Boltify uses primary-500 (green #66FF4C)
Secondary: blue-500  (#3B82F6) — Boltify uses secondary-500 (orange #FF7A47)
Accent:    cyan-400  (#22D3EE) — Kalender-specific
```

### Core Patterns (Boltify)
```
Page background:  bg-zinc-100 dark:bg-zinc-950
Card background:  bg-white dark:bg-zinc-950
Card border:      border border-zinc-500/10 dark:border-zinc-500/25
Transition:       transition-all duration-300 ease-in-out
Border radius:    rounded-lg (default)
Typography:       font-sans "Urbanist" (Boltify) / Inter (Kalender)
Dark mode:        class-based (.dark)
```

### Component Variant System
All components follow the same variant pattern:
- **solid** — filled background, colored border
- **outline** — transparent bg, colored border at 50% opacity, hover fills border
- **soft** — colored bg at 10-25% opacity, colored text, transparent border
- **default** — transparent everything, colored text only
- **link** (Button only) — transparent, text hover changes to color
