# Design System Documentation

This document outlines the design patterns and components used in this project. **Always reference `Hero.tsx` as the primary guide** when implementing new features from screenshots or designs.

## Table of Contents
1. [Responsiveness & Breakpoints](#responsiveness--breakpoints)
2. [Theme Behavior](#theme-behavior)
3. [Layout & Spacing](#layout--spacing)
4. [Pill Component](#pill-component)
5. [Main Heading](#main-heading)
6. [Sub Heading](#sub-heading)
7. [Main CTA Button (Let's Talk)](#main-cta-button-lets-talk)
8. [Secondary CTA Button (Testimonials)](#secondary-cta-button-testimonials)
9. [Carousel (Logo Carousel)](#carousel-logo-carousel)
10. [Future Components](#future-components)

---

## Responsiveness & Breakpoints

**CRITICAL:** Always prioritize mobile-first design, with special attention to iPhone and Samsung Galaxy S25 sizes.

### Target Devices (Priority Order)
1. **iPhone** (Most Important)
   - iPhone SE (375px width)
   - iPhone 12/13/14/15 (390px width)
   - iPhone 14 Pro Max / 15 Pro Max (430px width)
2. **Samsung Galaxy S25** (Most Important)
   - Approx 360-412px width (varies by model)
3. **Tablet** (Important)
   - iPad (768px width)
   - iPad Pro (1024px width)

### Tailwind Breakpoints
- **Base (Mobile):** `< 640px` - iPhone, Samsung Galaxy S25
- **sm:** `≥ 640px` - Larger phones, small tablets
- **md:** `≥ 768px` - Tablets (iPad)
- **lg:** `≥ 1024px` - Desktop, iPad Pro
- **xl:** `≥ 1280px` - Large desktop

### Responsive Patterns

#### Container Widths
```tsx
// Mobile-first approach
className="w-full sm:w-[90%] md:w-[80%] lg:w-[44%]"
```
- **Mobile (iPhone/Samsung):** `w-full` (100% width with padding)
- **Small screens:** `sm:w-[90%]` (90% width)
- **Tablets:** `md:w-[80%]` (80% width)
- **Desktop:** `lg:w-[44%]` (44% width for optimal reading)

#### Typography Scaling
```tsx
// Example: Main Heading
className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px]"
```
- **Mobile (iPhone/Samsung):** `text-2xl` (24px)
- **Small screens:** `sm:text-3xl` (30px)
- **Tablets:** `md:text-4xl` (36px)
- **Desktop:** `lg:text-[46px]` (46px)

#### Padding & Spacing
```tsx
// Section padding
className="px-4 sm:px-6 md:px-8"
// Vertical spacing
className="pt-16 sm:pt-20 md:pt-24"
```

### Mobile-First Testing Checklist
- [ ] Test on iPhone SE (375px) - smallest common iPhone
- [ ] Test on iPhone 15 Pro Max (430px) - largest iPhone
- [ ] Test on Samsung Galaxy S25 (360-412px)
- [ ] Test on iPad (768px)
- [ ] Ensure text is readable without zooming
- [ ] Ensure buttons are easily tappable (min 44x44px)
- [ ] Verify no horizontal scrolling
- [ ] Check that images scale properly

---

## Theme Behavior

**CRITICAL:** The application defaults to **light mode on first load**. Dark mode is only activated when the user explicitly clicks the dark mode toggle icon.

### Theme Initialization
**Reference: `contexts/ThemeContext.tsx`**

```tsx
// Default state - always starts as false (light mode)
const [isDarkMode, setIsDarkMode] = useState(false);

// On mount - only load dark mode if user previously selected it
useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    setIsDarkMode(true);
  }
  // Always default to light mode if no saved preference
}, []);
```

### Theme Behavior Rules
1. **First Load:** Always light mode (white background)
2. **User Toggle:** Dark mode only activates when user clicks the dark mode icon
3. **Persistence:** User preference is saved to `localStorage` and restored on subsequent visits
4. **No System Preference:** The app does NOT follow system dark/light mode preference

### Implementation Notes
- Always check `isDarkMode` from `useTheme()` hook
- Provide both light and dark mode styles for all components
- Test both themes during development
- Ensure sufficient contrast in both modes

---

## Layout & Spacing

### Container Pattern
**Reference: `Hero.tsx` line 58**

```tsx
<div className="w-full sm:w-[90%] md:w-[80%] lg:w-[44%] text-center flex flex-col gap-y-0">
```

**Key Points:**
- Use `gap-y-0` on the container (no vertical gap)
- Apply individual `mb-*` (margin-bottom) values to each child element
- Container width: `w-full` → `sm:w-[90%]` → `md:w-[80%]` → `lg:w-[44%]`
- Always center content with `text-center` and `items-center`

### Spacing Values
- Profile/Greeting section: `mb-8`
- Main heading: `mb-6`
- Sub heading: `mb-8`
- CTA buttons: `mb-14 sm:mb-16`

---

## Pill Component

**Reference: `About.tsx` lines 18-24**

The "Pill" is a small badge/tag component used for status indicators or short text labels. Example: "Hi, I am Zakeer Sadikeen"

### Pill Structure
```tsx
<div className={`relative inline-flex items-center px-[12px] py-[7px] rounded-xl whitespace-nowrap ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#E0E0E0]'} border-[0.5px] shadow-sm`}>
  <p className={`text-xs sm:text-sm md:text-[15px] font-medium ${isDarkMode ? 'text-zinc-100' : 'text-black'}`} style={{ letterSpacing: '-0.6px' }}>
    Hi, I am Zakeer Sadikeen
  </p>
</div>
```

### Pill Specifications
- **Padding:** `px-[12px] py-[7px]`
- **Border Radius:** `rounded-xl`
- **Border:** `border-[0.5px]`
  - Light mode: `border-[#E0E0E0]`
  - Dark mode: `border-zinc-800`
- **Background:**
  - Light mode: `bg-white`
  - Dark mode: `bg-zinc-900`
- **Shadow:** `shadow-sm`
- **Text:**
  - Size: `text-xs sm:text-sm md:text-[15px]`
  - Weight: `font-medium`
  - Letter spacing: `-0.6px`
  - Color: Light mode `text-black`, Dark mode `text-zinc-100`
- **Layout:** `inline-flex items-center whitespace-nowrap`

### Optional: Pill with Status Indicator
**Reference: `Hero.tsx` lines 72-80**

If the pill needs a status indicator (green dot), add this before the text:
```tsx
<div className="relative flex items-center justify-center">
  {/* Animated beaming circle */}
  <div className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 beam-animation"></div>
  {/* Green dot */}
  <div className="relative w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500"></div>
</div>
```

**Note:** When using status indicator, adjust padding: `pl-[10px] sm:pl-[12px] pr-[7px]` and add `gap-1.5 sm:gap-2` to the container.

---

## Main Heading

**Reference: `Hero.tsx` lines 86-94**

### Main Heading Structure
```tsx
<h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-semibold ${isDarkMode ? 'text-zinc-50' : ''} leading-[1.05] mx-auto px-2 sm:px-0 my-0 mb-6`} style={isDarkMode ? { letterSpacing: '-1.7px' } : { color: '#171717', letterSpacing: '-1.7px' }}>
  Your heading text here
</h1>
```

### Main Heading Specifications
- **Font Sizes:** `text-2xl` → `sm:text-3xl` → `md:text-4xl` → `lg:text-[46px]`
- **Font Weight:** `font-semibold`
- **Line Height:** `leading-[1.05]`
- **Letter Spacing:** `-1.7px`
- **Color:**
  - Light mode: `#171717`
  - Dark mode: `text-zinc-50`
- **Spacing:** `mb-6` (margin-bottom)
- **Alignment:** `mx-auto` (centered)

### Responsive Line Breaks
For large screens, you can add line breaks:
```tsx
<span className="lg:hidden">Single line text</span>
<span className="hidden lg:inline">Multi-line text<br />with break</span>
```

---

## Sub Heading

**Reference: `Hero.tsx` lines 97-100**

### Sub Heading Structure
```tsx
<p className={`text-base font-light mx-auto text-center px-2 sm:px-0 ${isDarkMode ? 'text-white' : ''} mb-8`} style={{ color: isDarkMode ? '#ffffff' : '#171717', letterSpacing: '-0.6px', lineHeight: '19.2px' }}>
  Your subheading text here
</p>
```

### Sub Heading Specifications
- **Font Size:** `text-base` (16px)
- **Font Weight:** `font-light`
- **Line Height:** `19.2px`
- **Letter Spacing:** `-0.6px`
- **Color:**
  - Light mode: `#171717`
  - Dark mode: `#ffffff` (`text-white`) - **White text in dark mode**
- **Spacing:** `mb-8` (margin-bottom)
- **Alignment:** `mx-auto text-center` (centered)

---

## Main CTA Button (Let's Talk)

**Reference: `Hero.tsx` lines 104-106**

### Main CTA Structure
```tsx
<button className={`w-full sm:w-auto px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg ${isDarkMode ? 'bg-white hover:bg-zinc-100 text-black' : 'bg-zinc-900 hover:bg-zinc-800 text-white'} text-base lg:text-[15px] font-medium transition-colors duration-200 cursor-pointer`} style={{ letterSpacing: '-0.6px' }}>
  Let&apos;s Talk
</button>
```

### Main CTA Specifications
- **Width:** `w-full sm:w-auto` (full width on mobile, auto on larger screens)
- **Padding:** `px-2.5 sm:px-3 py-1 sm:py-1.5`
- **Border Radius:** `rounded-lg`
- **Background:**
  - Light mode: `bg-zinc-900 hover:bg-zinc-800` (Black background)
  - Dark mode: `bg-white hover:bg-zinc-100` (White background)
- **Text Color:**
  - Light mode: `text-white` (White text on black background)
  - Dark mode: `text-black` (Black text on white background)
- **Font Size:** `text-base lg:text-[15px]`
- **Font Weight:** `font-medium`
- **Letter Spacing:** `-0.6px`
- **Transitions:** `transition-colors duration-200`

---

## Secondary CTA Button (Testimonials)

**Reference: `Hero.tsx` lines 107-109**

### Secondary CTA Structure
```tsx
<button className={`w-full sm:w-auto px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg ${isDarkMode ? 'bg-zinc-900 hover:bg-zinc-700 text-zinc-100' : 'bg-[#F5F5F5] hover:bg-[#EBEBEB] text-zinc-900'} text-base lg:text-[15px] font-medium transition-colors duration-700 ease-out cursor-pointer`} style={{ letterSpacing: '-0.6px' }}>
  Testimonials
</button>
```

### Secondary CTA Specifications
- **Width:** `w-full sm:w-auto` (full width on mobile, auto on larger screens)
- **Padding:** `px-2.5 sm:px-3 py-1 sm:py-1.5`
- **Border Radius:** `rounded-lg`
- **Background:**
  - Light mode: `bg-[#F5F5F5] hover:bg-[#EBEBEB]`
  - Dark mode: `bg-zinc-900 hover:bg-zinc-700`
- **Text Color:**
  - Light mode: `text-zinc-900`
  - Dark mode: `text-zinc-100`
- **Font Size:** `text-base lg:text-[15px]`
- **Font Weight:** `font-medium`
- **Letter Spacing:** `-0.6px`
- **Transitions:** `transition-colors duration-700 ease-out` (slower transition than main CTA)

### CTA Button Container
**Reference: `Hero.tsx` line 103**

```tsx
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0 mb-14 sm:mb-16">
  {/* Buttons here */}
</div>
```

- **Layout:** `flex flex-col sm:flex-row` (stacked on mobile, horizontal on larger screens)
- **Gap:** `gap-3 sm:gap-4`
- **Spacing:** `mb-14 sm:mb-16`

---

## Carousel (Logo Carousel)

**Reference: `Hero.tsx` lines 112-154**

### Carousel Container Structure
```tsx
<div className="w-full max-w-[65%] mx-auto overflow-hidden relative">
  {/* Left fade gradient */}
  <div className={`absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 z-10 pointer-events-none ${isDarkMode ? 'bg-gradient-to-r from-black to-transparent' : 'bg-gradient-to-r from-white to-transparent'}`}></div>
  
  {/* Right fade gradient */}
  <div className={`absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 z-10 pointer-events-none ${isDarkMode ? 'bg-gradient-to-l from-black to-transparent' : 'bg-gradient-to-l from-white to-transparent'}`}></div>
  
  {/* Animated content */}
  <motion.div
    className="flex items-center gap-5 sm:gap-7 md:gap-9 lg:gap-12"
    animate={{
      x: [0, animationDistance],
    }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 42,
      ease: "linear",
    }}
  >
    {/* Carousel items */}
  </motion.div>
</div>
```

### Carousel Specifications
- **Container:** `w-full max-w-[65%] mx-auto overflow-hidden relative`
- **Fade Gradients:**
  - Width: `w-16 sm:w-28 md:w-36`
  - Light mode: `from-white to-transparent`
  - Dark mode: `from-black to-transparent`
- **Gap between items:** `gap-5 sm:gap-7 md:gap-9 lg:gap-12`
- **Animation:**
  - Duration: `42` seconds
  - Ease: `linear`
  - Repeat: `Infinity`
  - Type: `loop`

### Carousel Item Structure
```tsx
<div key={i} className={`flex items-center gap-2 sm:gap-3 opacity-40 flex-shrink-0 whitespace-nowrap ${isDarkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
  <Image 
    src={logo.image} 
    alt={logo.text} 
    width={120} 
    height={40} 
    className="h-4.5 sm:h-5.5 md:h-6.5 w-auto object-contain"
  />
</div>
```

### Carousel Item Specifications
- **Opacity:** `opacity-40`
- **Layout:** `flex items-center gap-2 sm:gap-3`
- **Text Color:**
  - Light mode: `text-zinc-400`
  - Dark mode: `text-zinc-600`
- **Image Sizing:** Varies by logo type (see Hero.tsx lines 142-148 for specific sizing)

---

## Future Components

### Third CTA Button
A third button will be added later. When implementing, follow the same pattern as the existing CTA buttons but with appropriate styling variations.

---

## Implementation Guidelines

### When Implementing from Screenshots:

1. **Always start with `Hero.tsx` as the reference**
2. **Use the exact spacing pattern:** `gap-y-0` container with individual `mb-*` values
3. **Match the component specifications** listed above
4. **Maintain theme support:** Always include `isDarkMode` checks for colors and backgrounds
5. **Follow responsive breakpoints:** `sm:`, `md:`, `lg:` as shown in examples
6. **Preserve letter spacing and typography** values exactly as specified
7. **Test on iPhone and Samsung Galaxy S25** - these are the most important devices
8. **Mobile-first approach:** Design for mobile, then enhance for larger screens
9. **Remember:** Light mode is default on first load, dark mode only when user toggles

### Common Patterns:

- **Container width:** `w-full sm:w-[90%] md:w-[80%] lg:w-[44%]`
- **Text alignment:** `text-center` with `mx-auto` for centering
- **Letter spacing:** `-0.6px` for body text, `-1.7px` for headings
- **Border radius:** `rounded-xl` for pills, `rounded-lg` for buttons
- **Shadows:** `shadow-sm` for elevated elements

---

## Theme Colors Reference

### Light Mode
- Background: `bg-white`
- Text Primary: `#171717`
- Text Secondary: `#171717` (subheading)
- Pill Background: `bg-white`
- Pill Border: `border-[#E0E0E0]`
- Main CTA: `bg-zinc-900` with `text-white` (Black background, white text)
- Secondary CTA: `bg-[#F5F5F5]`

### Dark Mode
- Background: `bg-black`
- Text Primary: `text-zinc-50`
- Text Secondary: `#ffffff` (`text-white`) - **White subheading in dark mode**
- Pill Background: `bg-zinc-900`
- Pill Border: `border-zinc-800`
- Main CTA: `bg-white` with `text-black` (White background, black text)
- Secondary CTA: `bg-zinc-900`

---

**Last Updated:** Based on `Hero.tsx` and `About.tsx` components
**Primary Reference:** `components/Hero.tsx`

