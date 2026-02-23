# UI Component Patterns

All components use a consistent variant system with `TColors` × `TVariant` matrices.

---

## Button

### Variants: `solid | outline | default | soft | link`
### Dimensions: `xs | sm | default | lg | xl`

### Solid Variant Classes
```
sky:     border-sky-500 bg-sky-500 hover:border-sky-600 hover:bg-sky-600 text-zinc-200
blue:    border-blue-500 bg-blue-500 hover:border-blue-600 hover:bg-blue-600 text-zinc-200
zinc:    border-zinc-500 bg-zinc-500 hover:border-zinc-600 hover:bg-zinc-600 text-zinc-200
red:     border-red-500 bg-red-500 hover:border-red-600 hover:bg-red-600 text-zinc-200
emerald: border-emerald-500 bg-emerald-500 hover:border-emerald-600 hover:bg-emerald-600 dark:text-zinc-800
amber:   border-amber-500 bg-amber-500 hover:border-amber-600 hover:bg-amber-600 dark:text-zinc-800
violet:  border-violet-500 bg-violet-500 hover:border-violet-600 hover:bg-violet-600 text-zinc-200
```

### Outline Variant Classes
```
sky:     border-sky-500/50 bg-transparent text-black hover:border-sky-500 dark:text-white
blue:    border-blue-500/50 bg-transparent text-black hover:border-blue-500 dark:text-white
zinc:    border-zinc-500/50 bg-transparent text-black hover:border-zinc-500 dark:text-white
red:     border-red-500/50 bg-transparent text-black hover:border-red-500 dark:text-white
```

### Soft Variant Classes
```
sky:     border-transparent bg-sky-500/25 text-sky-500 hover:border-sky-600/50 hover:bg-sky-600/50
blue:    border-transparent bg-blue-500/25 text-blue-500 hover:border-blue-600/50 hover:bg-blue-600/50
zinc:    border-transparent bg-zinc-500/25 text-zinc-500 hover:border-zinc-600/50 hover:bg-zinc-600/50
```

### Default Variant Classes
```
sky:     border-transparent bg-transparent text-sky-500 hover:text-sky-400
blue:    border-transparent bg-transparent text-blue-500 hover:text-blue-400
zinc:    border-transparent bg-transparent text-zinc-500 hover:text-zinc-400
```

### Link Variant Classes
```
sky:     border-transparent bg-transparent text-zinc-800 hover:text-sky-400 dark:text-zinc-200 dark:hover:text-sky-400
blue:    border-transparent bg-transparent text-zinc-800 hover:text-blue-400 dark:text-zinc-200 dark:hover:text-blue-400
zinc:    border-transparent bg-transparent text-zinc-800 hover:text-zinc-400 dark:text-zinc-200 dark:hover:text-zinc-400
```

### Dimension Classes
```
xs:      px-3 py-0.5 text-xs     (icon-only: px-0.5)
sm:      px-4 py-1 text-sm       (icon-only: px-1)
default: px-5 py-1.5 text-base   (icon-only: px-1.5)
lg:      px-6 py-2 text-lg       (icon-only: px-2)
xl:      px-7 py-2.5 text-xl     (icon-only: px-2.5)
```

### Base Classes
```
inline-flex items-center justify-center cursor-pointer
[variant classes] [dimension classes] [borderWidth] [rounded] [transition]
```

### Disabled State
```
opacity-50 pointer-events-none
```

---

## Card

### Structure
```tsx
<Card>                    {/* outer wrapper */}
  <CardHeader>            {/* flex justify-between, px-4 pb-4 first:pt-4 */}
    <CardHeaderChild>     {/* flex items-center gap-4 */}
      <CardTitle>         {/* text-2xl font-semibold */}
      <CardSubTitle>      {/* text-lg font-semibold text-zinc-500 */}
    </CardHeaderChild>
    <CardHeaderChild>     {/* right side actions */}
  </CardHeader>
  <CardBody>              {/* grow px-4 pb-4 first:pt-4 */}
  <CardBodyCollapse>      {/* animated height with framer-motion */}
  <CardFooter>            {/* flex justify-between, px-4 pb-4 first:pt-4 */}
</Card>
```

### Card Base Classes
```
flex flex-col
bg-white dark:bg-zinc-950
border border-zinc-500/10 dark:border-zinc-500/25
overflow-hidden
[rounded]  /* auto = roundedCustom(1), or explicit */
```

### Card Separator
```
h-8 rounded-full border-s border-zinc-500/25
```

---

## Badge

### Variants: `solid | outline | default | soft`

### Solid Variant
```
sky:     bg-sky-500 border-transparent text-zinc-800 dark:text-zinc-200
blue:    bg-blue-500 border-transparent text-zinc-800 dark:text-zinc-200
emerald: bg-emerald-500 border-transparent text-zinc-800 dark:text-zinc-200
red:     bg-red-500 border-transparent text-zinc-800 dark:text-zinc-200
amber:   bg-amber-500 border-transparent text-zinc-800 dark:text-zinc-200
```

### Outline Variant
```
sky:     border-sky-500 bg-sky-500/10 text-sky-500
blue:    border-blue-500 bg-blue-500/10 text-blue-500
emerald: border-emerald-500 bg-emerald-500/10 text-emerald-500
red:     border-red-500 bg-red-500/10 text-red-500
```

### Soft Variant
```
sky:     text-sky-500 bg-sky-500/10 border-transparent
blue:    text-blue-500 bg-blue-500/10 border-transparent
emerald: text-emerald-500 bg-emerald-500/10 border-transparent
red:     text-red-500 bg-red-500/10 border-transparent
```

### Base Classes
```
inline-flex items-center gap-x-1.5 px-2 [borderWidth] [rounded]
```

---

## Modal

### Structure
```tsx
<Modal isOpen={isOpen} setIsOpen={setIsOpen} size="md">
  <ModalHeader>Title</ModalHeader>
  <ModalBody>Content</ModalBody>
  <ModalFooter>
    <ModalFooterChild>Left</ModalFooterChild>
    <ModalFooterChild>Right</ModalFooterChild>
  </ModalFooter>
</Modal>
```

### Sizes
```
sm:  40rem
md:  48rem (default)
lg:  64rem
xl:  80rem
2xl: 96rem
custom: any px or string
```

### Content Classes
```
bg-white dark:bg-zinc-950
border border-zinc-500/10 dark:border-zinc-500/25
shadow-2xl
[rounded] (default: rounded-2xl)
```

### Backdrop
```
fixed top-0 left-0 z-[1050] h-screen w-screen backdrop-blur-md
```

### Animation (framer-motion)
```
initial:  { opacity: 0, y: '-50%' }
animate:  { opacity: 1, x: '0%', y: '0%' }
exit:     { opacity: 0, y: '-50%' }
duration: 0.3, ease: 'easeInOut'
```

---

## Accordion

### Structure
```tsx
<Accordion activeItemId="item-1" sign="plus" signPosition="left">
  <AccordionItem id="item-1" title="Question 1">Answer 1</AccordionItem>
  <AccordionItem id="item-2" title="Question 2">Answer 2</AccordionItem>
</Accordion>
```

### Container Classes
```
border border-zinc-500/10 dark:border-zinc-500/25
[rounded]
```

### Item Classes
```
border-b border-inherit last:border-none
```

### Button Classes
```
flex w-full items-center p-4 hover:opacity-75
transition-all duration-300 ease-in-out
[color active class]
```

### Active Color Classes
```
sky:  data-active:text-sky-500
blue: data-active:text-blue-500
zinc: data-active:text-zinc-500
```

### Sign Options
```
plus:  MinusSign (open) / PlusSign (closed)
arrow: ArrowUp01 (open) / ArrowDown01 (closed)
no:    no icon
```

### Sign Position: `left | right`

### Collapse Content
```
px-4 pb-4
```

---

## Dropdown

### Structure
```tsx
<Dropdown>
  <DropdownToggle>
    <Button>Toggle</Button>
  </DropdownToggle>
  <DropdownMenu placement="bottom-start">
    <DropdownItem>Item 1</DropdownItem>
    <DropdownDivider />
    <DropdownItem isActive>Item 2</DropdownItem>
  </DropdownMenu>
</Dropdown>
```

### Menu Classes
```
flex flex-col gap-2 px-2 py-2
z-[9999]
min-w-60
border-zinc-300/25 bg-white shadow-lg
dark:border-zinc-800/50 dark:bg-zinc-900
[borderWidth] [rounded]
```

### Item Classes
```
p-2 flex items-center w-full
whitespace-nowrap cursor-pointer rounded-sm
border-zinc-300/25 dark:border-zinc-800/50
hover:bg-zinc-500/10  (when not disabled)
transition-all duration-300 ease-in-out
```

### Item Active State
```
bg-zinc-500/5
```

### Item Disabled State
```
opacity-50 cursor-not-allowed
```

---

## Alert

### Variants: `solid | outline | default | soft`

### Structure
```tsx
<Alert
  variant="outline"
  color="sky"
  icon="InformationCircle"
  title="Info"
  isClosable>
  Alert message content
</Alert>
```

### Base Classes
```
relative flex h-fit items-stretch p-4
[borderWidth] [rounded] [variant classes]
```

### Outline Variant (most common for info)
```
sky:     border-sky-500 bg-sky-500/10 text-sky-500
red:     border-red-500 bg-red-500/10 text-red-500
emerald: border-emerald-500 bg-emerald-500/10 text-emerald-500
amber:   border-amber-500 bg-amber-500/10 text-amber-500
```

### Soft Variant
```
sky:     bg-sky-500/10 text-sky-500 border-transparent
red:     bg-red-500/10 text-red-500 border-transparent
```

---

## Avatar

### Variants: `solid | outline | default | soft`
### Default variant: `soft`
### Default rounded: `rounded-full`

### Size Options
```
w-2 | w-2.5 | w-3 | w-3.5 | w-4 | w-5 | w-6 | w-7 | w-8
w-9 | w-10 | w-11 | w-12 (default) | w-14 | w-16 | w-20
w-24 | w-28 | w-32 | w-36 | w-40 | w-44 | w-48 | w-52
w-56 | w-60 | w-64 | w-72 | w-80 | w-96
```

### Soft Variant (default)
```
sky:  border-transparent bg-sky-500/25 text-sky-500
blue: border-transparent bg-blue-500/25 text-blue-500
zinc: border-transparent bg-zinc-500/25 text-zinc-500
```

### Base Classes
```
aspect-square [size] [borderWidth] [rounded] [variant classes]
```

### With Image
```
object-cover [base classes]
```

### Without Image (initials)
```
flex items-center justify-center font-bold [base classes]
```

---

## Tooltip

### Classes
```
z-[9998] px-2 py-1
max-w-xs
border-zinc-500/10 drop-shadow-lg backdrop-blur-xs
[borderWidth] [rounded]
```

### Arrow
```
fill-zinc-50 backdrop-blur-xs dark:fill-zinc-950
[&>path:first-of-type]:stroke-zinc-500/10
```

---

## Progress

### Container
```
flex overflow-hidden bg-zinc-200/50 dark:bg-zinc-700/50
h-2 w-full (horizontal)
h-32 w-2 (vertical)
[rounded] (default: rounded-full)
```

### Bar Color Classes
```
sky:     bg-sky-500
blue:    bg-blue-500
emerald: bg-emerald-500
red:     bg-red-500
amber:   bg-amber-500
```

### Bar Base Classes
```
flex flex-col items-center justify-center overflow-hidden
text-center text-xs whitespace-nowrap text-white
transition-all duration-300 ease-in-out
```

---

## Toast (Toastify overrides)
```css
.Toastify__toast {
  border: 1px solid theme('colors.zinc.500/25');
}
.Toastify__close-button {
  right: 1rem; top: 1rem;
}
.Toastify__close-button > svg {
  fill: theme('colors.zinc.500');
  stroke: theme('colors.zinc.950');
  stroke-width: 1;
}
```
