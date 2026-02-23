# Landing Page Patterns

Extracted from Boltify's `src/pages/LandingPage/` — adapted for Kalender.

---

## Page Structure

```tsx
<Wrapper>
  <SectionHeader />        {/* sticky navbar */}
  <Container>
    <SectionHero />         {/* hero with 2-col grid */}
    <SectionIcons />        {/* icon showcase */}
    <SectionComponents />   {/* component grid */}
    <SectionExamples />     {/* example showcase */}
    <SectionTemplates />    {/* template showcase */}
    <SectionResponsive />   {/* responsive demo */}
    <SectionFooter />       {/* multi-col footer */}
  </Container>
</Wrapper>
```

---

## Navbar / Header

### Container
```html
<header class="sticky top-4 z-50 flex w-full flex-wrap py-7 backdrop-blur-sm
               lg:flex-nowrap lg:justify-start dark:bg-zinc-950/25">
  <nav class="relative container mx-auto flex w-full basis-full flex-wrap
              items-center px-4 lg:grid lg:grid-cols-12 lg:px-6">
```

### Layout Grid
```
Logo:     lg:col-span-3
Nav:      lg:col-span-6 (centered)
Actions:  lg:col-span-3 (right-aligned)
```

### Navigation Links with Active Highlighter
```html
<a class="inline-block text-black transition focus:outline-hidden dark:text-white
          {active ? 'before:bg-primary-400 relative before:absolute before:start-0
                     before:bottom-0.5 before:-z-1 before:h-1 before:w-full'
                  : 'hover:text-zinc-600 dark:hover:text-neutral-300'}">
```

**Key pattern**: `::before` pseudo-element for active indicator:
- `relative` on the link
- `before:absolute before:start-0 before:bottom-0.5` positioning
- `before:-z-1` behind text
- `before:h-1 before:w-full` dimensions
- `before:bg-primary-400` color (use `before:bg-sky-400` for Kalender)

### Action Buttons
```html
<!-- Ghost/outline login -->
<Button variant="outline" color="zinc" rounded="rounded-xl">Sign in</Button>

<!-- Primary CTA -->
<a class="bg-primary-500 hover:bg-primary-600 inline-flex cursor-pointer items-center
          gap-x-2 rounded-xl border border-transparent px-3 py-2 text-sm font-medium
          text-black transition focus:outline-hidden">
  CTA Text
</a>
```

### Mobile Menu
```html
<!-- Hamburger button -->
<Button variant="outline" color="zinc" rounded="rounded-xl" icon="Menu11" />

<!-- Offcanvas -->
<Offcanvas isOpen={isOpen} setIsOpen={setIsOpen}>
  <OffcanvasHeader>Menu</OffcanvasHeader>
  <OffcanvasBody>{menu}</OffcanvasBody>
</Offcanvas>
```

### Scroll-Spy Implementation
```typescript
useEffect(() => {
  const handleScroll = () => {
    const offset = 80;
    let current = sections[0].id;
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) {
        const top = el.getBoundingClientRect().top - offset;
        if (top <= 0) current = section.id;
      }
    }
    setActive(current);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

## Hero Section

### Container
```html
<div id="main" class="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
  <div class="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
```

### Left Column (text)
```html
<h1 class="block text-3xl font-bold text-zinc-800 sm:text-4xl lg:text-6xl
           lg:leading-tight dark:text-white">
  Start your journey with <span class="text-primary-600">Boltify</span>
</h1>

<p class="mt-3 text-lg text-zinc-800 dark:text-neutral-400">
  Description text
</p>
```

### CTA Buttons
```html
<div class="mt-7 grid w-full gap-3 sm:inline-flex">
  <Button variant="solid" color="primary" rightIcon="ArrowRight01" class="py-3!">
    Get started
  </Button>
  <Button variant="outline" rounded="rounded-xl" color="zinc">
    Contact sales team
  </Button>
</div>
```

### Compatibility Tags
```html
<div class="mt-6 auto-cols-max items-center gap-3 sm:flex md:gap-6">
  <span class="text-xs font-semibold uppercase dark:text-white">Compatible with:</span>
  <dl class="flex auto-cols-max items-center gap-3 md:gap-6">
    <dd class="flex items-center gap-x-2 text-xs font-semibold uppercase dark:text-white">
      <svg>...</svg> React
    </dd>
  </dl>
</div>
```

### Right Column (visual demo)
```html
<div class="group relative ms-4 flex h-full items-center justify-center
            [&_*]:transition-all [&_*]:duration-300 [&_*]:ease-in-out">
  <!-- Background cards (faded, small) -->
  <div class="absolute -translate-x-[15rem] -translate-y-[10rem] scale-50 opacity-10">
    <div class="min-w-xl"><Component /></div>
  </div>

  <!-- Foreground cards (interactive, hover-movable) -->
  <div class="absolute -translate-x-[9rem] -translate-y-[5rem] scale-50
              group-hover:-translate-x-[7rem] group-hover:-translate-y-[3rem]">
    <div class="min-w-sm"><Component /></div>
  </div>
</div>
```

---

## Components Grid Section

### Container
```html
<div id="components" class="container mx-auto scroll-mt-24 px-4 py-10
                            sm:px-6 lg:px-8 lg:py-14">
```

### Header
```html
<div class="mx-auto mb-8 max-w-[64rem] lg:mb-14">
  <h2 class="text-3xl font-bold text-zinc-800 lg:text-4xl dark:text-neutral-200">
    Title
  </h2>
  <p class="mt-3 text-center text-zinc-800 dark:text-neutral-200">
    Description
  </p>
</div>
```

### Grid
```html
<div class="grid grid-cols-12 gap-4">
  <div class="col-span-12 lg:col-span-6 xl:col-span-3">
    <Card class="cursor-pointer outline-2 outline-offset-2 outline-transparent
                 transition-all duration-300 ease-in-out hover:outline-blue-500">
      <CardBody class="flex items-center justify-center gap-2">
        <Icon icon={icon} color="zinc" size="text-4xl" />
        <span class="text-xl font-bold">Name</span>
        <Badge variant="soft">UI</Badge>
      </CardBody>
    </Card>
  </div>
</div>
```

---

## Footer

### Container
```html
<footer class="container mx-auto mt-auto w-full px-4 py-10 sm:px-6 lg:px-8">
```

### Grid Layout
```html
<div class="mb-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
  <!-- Brand column: col-span-full hidden lg:col-span-1 lg:block -->
  <!-- Product column -->
  <!-- Company column -->
  <!-- Resources column -->
  <!-- Developers column -->
</div>
```

### Brand Column
```html
<div class="col-span-full hidden lg:col-span-1 lg:block">
  <a class="flex-none text-xl font-semibold text-black dark:text-white">
    <img src={logo} class="h-8" />
  </a>
  <p class="mt-3 text-xs text-zinc-600 sm:text-sm dark:text-neutral-400">
    © 2025 Company Name.
  </p>
</div>
```

### Column Heading
```html
<h4 class="text-xs font-semibold text-zinc-900 uppercase dark:text-neutral-100">
  Section Title
</h4>
```

### Column Links
```html
<div class="mt-3 grid space-y-3 text-sm">
  <p>
    <a class="inline-flex gap-x-2 text-zinc-600
              hover:text-zinc-800 focus:text-zinc-800
              dark:text-neutral-400
              dark:hover:text-neutral-200 dark:focus:text-neutral-200">
      Link Text
    </a>
  </p>
</div>
```

### Bottom Bar
```html
<div class="mt-5 border-t border-zinc-200 pt-5 dark:border-neutral-700">
  <div class="sm:flex sm:items-center sm:justify-between">
    <!-- Left: language selector + legal links -->
    <div class="flex flex-wrap items-center gap-3">
      <!-- Language dropdown -->
      <div class="space-x-4 text-sm">
        <a class="text-zinc-600 hover:text-zinc-800 dark:text-neutral-400 dark:hover:text-neutral-200">
          Terms
        </a>
      </div>
    </div>

    <!-- Right: social icons -->
    <div class="space-x-4">
      <a class="inline-block text-zinc-500 hover:text-zinc-800
                dark:text-neutral-500 dark:hover:text-neutral-200">
        <svg class="size-4 shrink-0">...</svg>
      </a>
    </div>
  </div>
</div>
```

### Social Icons
```
Size:  size-4 shrink-0
Color: text-zinc-500 hover:text-zinc-800 dark:text-neutral-500 dark:hover:text-neutral-200
```

---

## Section Backgrounds (alternating)

```
Page bg:       bg-zinc-100 dark:bg-zinc-950
White section: bg-white dark:bg-zinc-950 (cards look different on white)
Page section:  bg-zinc-100 dark:bg-zinc-950 (matches page bg)
```

Pattern: alternate between white and page-bg sections to create visual separation without borders.

---

## Scroll Margin
```html
<div id="section" class="scroll-mt-24">
```
Used on sections targeted by nav links for proper scroll offset accounting for sticky header.

---

## Container Pattern
```css
@utility container {
  @apply max-w-full sm:max-w-[640px] md:max-w-[768px]
         lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px];
}
```

Or Tailwind default: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
