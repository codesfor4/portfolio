# Features Documentation

## Visual Features

### Glassmorphism Design
- Semi-transparent backgrounds with blur effects
- Applied to cards, navigation, and chat modal
- Creates modern, layered depth effect

### Gradient Effects
- **Logo:** Blue-to-indigo gradient text
- **Profile Image:** Gradient glow border
- **Background Orbs:** Multi-color gradient blobs

### Animations
| Animation | Usage | Type |
|-----------|-------|------|
| Typewriter | Hero job titles | Custom interval-based |
| Bounce | "Available" badge | Tailwind animate-bounce |
| Pulse | Decorative elements | Tailwind animate-pulse |
| Fade/Slide | Section entries | Custom CSS keyframes |
| Scale | Hover effects | Tailwind transform |

### Dark Theme
- **Background:** slate-950 (#020617)
- **Cards:** slate-900/800 with transparency
- **Accents:** Blue-400 to Indigo-600 spectrum
- **Text:** White/gray hierarchy

---

## Interactive Features

### Navigation
- **Scroll Tracking:** Active section highlighted based on viewport
- **Smooth Scroll:** Clicking nav items smoothly scrolls to sections
- **Sticky Header:** Navbar becomes opaque with blur on scroll
- **Mobile Menu:** Hamburger toggle reveals full-screen menu

### Project Cards
- Image zoom on hover (scale-110)
- Glass card elevation effect
- Technology tag chips
- External link buttons

### Journey Timeline
- Horizontal scroll container
- Left/right navigation arrows
- Scroll snap for precise card positioning
- Smooth scroll behavior

### Skills Timeline
- Zigzag alternating layout
- Central vertical line with glowing dots
- Card hover glow effect
- Responsive centered layout on mobile

---

## AI Chat Assistant

### Overview
Floating chat button that opens a modal AI assistant powered by Google Gemini.

### User Flow
1. User clicks chat bubble icon (bottom-right)
2. Modal opens with welcome message
3. User types question and sends
4. AI responds with context-aware answer
5. Conversation history maintained in session

### AI Behavior
- **Persona:** Professional assistant for Aditya's portfolio
- **Focus Areas:** Data analysis, Python, AI automation, QA
- **Tone:** Helpful, concise, professional

### Technical Details
```
Model: gemini-2.0-flash
API: Google Generative AI
State: Local React state (not persisted)
Error Handling: Fallback message on failure
```

### Chat UI Elements
- Floating trigger button with icon
- Modal overlay with glassmorphism
- Message bubbles (user: right, AI: left)
- Input field with send button
- Loading indicator ("Thinking...")
- Close button (X)

---

## Responsive Design

### Breakpoints
| Breakpoint | Width | Usage |
|------------|-------|-------|
| Default | 0-639px | Mobile layout |
| sm | 640px+ | Small tablets |
| md | 768px+ | Tablets |
| lg | 1024px+ | Desktop |

### Layout Changes by Breakpoint

**Hero Section:**
- Mobile: Stacked (image above text)
- Desktop: Two columns (image left, text right)

**Navigation:**
- Mobile: Hamburger menu
- Desktop: Horizontal menu bar

**Projects Grid:**
- Mobile: Single column
- Desktop: Three columns

**Skills Timeline:**
- Mobile: Centered single column
- Desktop: Alternating left/right zigzag

**About Section:**
- Mobile: Stacked layout
- Desktop: Two columns

---

## Accessibility Features

### Keyboard Navigation
- Tab navigation through interactive elements
- Enter key submits chat messages
- Focus states on buttons and links

### Visual Accessibility
- High contrast color scheme
- Clear visual hierarchy
- Readable font sizes (min 14px)
- Icon + text combinations

### Semantic HTML
- Proper heading hierarchy (h1, h2, h3)
- Section landmarks
- Descriptive link text
- Alt text placeholders for images

---

## Performance Optimizations

### Build Optimizations
- Vite's fast HMR for development
- Tree-shaking unused code
- Code splitting by routes
- Minification in production

### Runtime Optimizations
- Lazy image loading potential
- Efficient scroll event handling
- Minimal re-renders with proper state management
- CDN-loaded Tailwind (cached)

### Network Optimizations
- Google Fonts preconnect
- External dependencies via CDN with caching
- Minimal JavaScript bundle size
