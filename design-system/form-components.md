# Form Component Patterns

## Input

### Variants: `solid | default | gray | underline`
### Dimensions: `sm | default | lg`

### Default Variant Classes
```
General:
  dark:bg-zinc-900 dark:text-zinc-400
  border-zinc-200 dark:border-zinc-700
  placeholder-zinc-500
  focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-zinc-600

Validation (invalid):
  border-red-500! ring-4 ring-red-500/30

Validation (valid):
  border-emerald-500! focus:ring-4 focus:ring-emerald-500/30
```

### Solid Variant Classes
```
General:
  border-zinc-100 dark:border-zinc-800
  bg-zinc-100 dark:bg-zinc-800
  hover:border-blue-500 dark:hover:border-blue-500
  focus:border-zinc-300 dark:focus:border-zinc-800
  focus:bg-transparent dark:focus:bg-transparent
  disabled:border-zinc-500!
```

### Gray Variant Classes
```
General:
  bg-zinc-100 dark:bg-zinc-700
  dark:text-zinc-400
  border-transparent dark:border-transparent
  dark:placeholder-zinc-500
  focus:ring-blue-500 dark:focus:ring-zinc-600
  focus:border-blue-500
```

### Underline Variant Classes
```
General:
  border-b-2 border-x-transparent! border-b-zinc-200 border-t-transparent!
  bg-transparent pe-0 dark:border-b-zinc-700 dark:text-zinc-400 dark:placeholder-zinc-500
  focus:border-x-transparent focus:border-b-blue-500 focus:border-t-transparent focus:ring-0
  dark:focus:border-b-zinc-600 dark:focus:ring-zinc-600
```

### Dimension Classes
```
sm:      px-4 py-2 text-sm     (h-10 for color)
default: px-4 py-3 text-base   (h-12 for color)
lg:      px-4 py-4 text-lg     (h-16 for color)
```

### Base Classes
```
w-full peer block appearance-none outline-0
text-black dark:text-white
disabled:pointer-events-none disabled:opacity-50
[variantClasses] [dimensionClasses] [rounded]
```

### Floating Label
```html
<div class="relative w-full">
  <input class="peer placeholder:text-transparent!
                autofill:pb-2 autofill:pt-6
                not-placeholder-shown:pb-2 not-placeholder-shown:pt-6
                focus:border-blue-500 focus:pb-2 focus:pt-6 focus:ring-blue-500
                p-4 [variant] [rounded]" />
  <label class="pointer-events-none absolute start-0 top-0 h-full origin-[0_0]
                truncate border border-transparent p-4 text-sm
                transition duration-100 ease-in-out
                peer-not-placeholder-shown:translate-x-0.5
                peer-not-placeholder-shown:-translate-y-1.5
                peer-not-placeholder-shown:scale-90
                peer-not-placeholder-shown:text-zinc-500
                peer-focus:translate-x-0.5
                peer-focus:-translate-y-1.5
                peer-focus:scale-90
                peer-focus:text-zinc-500
                dark:text-white dark:peer-not-placeholder-shown:text-zinc-500
                dark:peer-focus:text-zinc-500">
    Label
  </label>
</div>
```

---

## Select

Same variant system as Input (solid | default | gray | underline).
Same dimension system (sm | default | lg).

### Base Classes
```
w-full appearance-none outline-0
text-black dark:text-white
disabled:pointer-events-none disabled:opacity-50
transition-all duration-300 ease-in-out
[variantClasses] [dimensionClasses] [rounded]
```

---

## Checkbox

### Variants: `default | switch`
### Dimensions: `sm | default | lg | xl`

### Default Variant Classes
```
border-zinc-200 dark:border-zinc-700
hover:border-blue-500 dark:hover:border-blue-500
disabled:!border-zinc-500
bg-center bg-no-repeat bg-transparent
checked:bg-blue-500 indeterminate:bg-blue-500
[rounded]
```

### Switch Variant Classes
```
rounded-full
border-zinc-100 dark:border-zinc-800
hover:border-blue-500 dark:hover:border-blue-500
disabled:!border-zinc-500
bg-left bg-no-repeat bg-transparent bg-auto bg-origin-content
checked:bg-blue-500 checked:!bg-right
```

### Dimension Classes
```
sm:      w-5 h-5 (checkbox) | w-8 h-5 (switch)   me-1 text-sm
default: w-7 h-7 (checkbox) | w-12 h-7 (switch)  me-1.5 text-base
lg:      w-9 h-9 (checkbox) | w-16 h-9 (switch)   me-2 text-lg
xl:      w-10 h-10 (checkbox) | w-[4.5rem] h-10 (switch) me-2.5 text-xl
```

### Base Classes
```
cursor-pointer appearance-none
disabled:!opacity-25
[borderWidth] transition-all duration-300 ease-in-out
!transition-[background-position,border-color,background-color]
[variantClasses] [dimensionClasses]
```

### Container Layout
```html
<div class="flex items-center py-1.5">
  <input type="checkbox" class="[checkbox classes]" />
  <div class="flex flex-col">
    <label class="cursor-pointer text-base [dimensionLabel]">Label</label>
    <label class="cursor-pointer text-sm text-zinc-500 [dimensionLabel]">Description</label>
  </div>
</div>
```

---

## Offcanvas (Mobile Menu / Slide Panel)

### Structure
```tsx
<Offcanvas isOpen={isOpen} setIsOpen={setIsOpen} position="right">
  <OffcanvasHeader>Title</OffcanvasHeader>
  <OffcanvasBody>Content</OffcanvasBody>
  <OffcanvasFooter>
    <OffcanvasFooterChild>Left</OffcanvasFooterChild>
    <OffcanvasFooterChild>Right</OffcanvasFooterChild>
  </OffcanvasFooter>
</Offcanvas>
```

### Position Options: `top | right (default) | bottom | left`

### Content Classes
```
bg-white/75 dark:bg-zinc-950/95 backdrop-blur-md
```

### Dialog Classes
```
pointer-events-none fixed w-full h-full shadow-2xl
max-w-[30rem]  (horizontal: left/right)
max-h-[30rem]  (vertical: top/bottom)
```

### Backdrop
```
fixed top-0 left-0 z-[1050] h-screen w-screen backdrop-blur-xs
```

### Animation (framer-motion)
```
right:  initial { opacity: 0, x: '50%' }   exit { opacity: 0, x: '50%' }
left:   initial { opacity: 0, x: '-50%' }  exit { opacity: 0, x: '-50%' }
top:    initial { opacity: 0, y: '-50%' }  exit { opacity: 0, y: '-50%' }
bottom: initial { opacity: 0, y: '50%' }   exit { opacity: 0, y: '50%' }
```

---

## Collapse (used inside Accordion)

### Animation (framer-motion)
```typescript
variants: {
  open: { opacity: 1, height: 'auto' },
  collapsed: { opacity: 0, height: 0 },
}
transition: {
  duration: 0.8,
  ease: [0.04, 0.62, 0.23, 0.98],
}
```

### Base Classes
```
overflow-hidden
```

---

## Validation Feedback

### Invalid State
```
border-red-500! ring-4 ring-red-500/30
```

### Valid State
```
border-emerald-500! focus:ring-4 focus:ring-emerald-500/30
```

### Disabled State
```
disabled:pointer-events-none disabled:opacity-50
```
