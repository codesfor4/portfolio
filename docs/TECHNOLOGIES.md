# Technology Stack

## Core Technologies

### React 19.2.3
- **Role:** UI library for building component-based interfaces
- **Usage:** All UI components, state management, event handling
- **Features Used:** Hooks (useState, useEffect, useRef), JSX

### TypeScript ~5.8.2
- **Role:** Static type checking and enhanced IDE support
- **Usage:** All `.tsx` files, interfaces, type definitions
- **Configuration:** Strict mode enabled in tsconfig.json

### Vite 6.2.0
- **Role:** Build tool and development server
- **Usage:** Fast HMR, production builds, env variable handling
- **Plugins:** @vitejs/plugin-react for JSX transformation

---

## Styling

### Tailwind CSS (CDN)
- **Role:** Utility-first CSS framework
- **Source:** `https://cdn.tailwindcss.com`
- **Usage:** All component styling via utility classes

**Common Utilities Used:**
```
Layout:     flex, grid, gap, p-*, m-*, w-*, h-*
Colors:     bg-slate-*, text-blue-*, border-*
Effects:    backdrop-blur-*, shadow-*, opacity-*
Animation:  animate-pulse, animate-bounce, transition-*
Responsive: sm:*, md:*, lg:*
```

### Custom CSS (index.html)
```css
/* Glassmorphism effect */
.glass-card {
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(148, 163, 184, 0.1);
}

/* Glow effect */
.glow-effect {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
}

/* Custom scrollbar */
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: #1e293b; }
::-webkit-scrollbar-thumb { background: #3b82f6; border-radius: 4px; }
```

### Google Fonts
- **Font:** Inter
- **Weights:** 300-700
- **Usage:** Primary font family for all text

---

## Icons

### Lucide React 0.561.0
- **Role:** SVG icon library
- **Usage:** Navigation icons, social links, feature icons

**Icons Used:**
```typescript
import {
  Menu, X,                    // Navigation
  Mail, Github, Linkedin,     // Social
  ExternalLink, Code,         // Project links
  Zap, Target, TrendingUp,    // Traits
  GraduationCap, Briefcase,   // Journey
  ChevronLeft, ChevronRight,  // Scroll navigation
  MessageCircle, Send         // Chat
} from 'lucide-react';
```

---

## AI Integration

### Google Generative AI (@google/genai) 1.34.0
- **Role:** AI chatbot functionality
- **Model:** `gemini-2.0-flash`
- **API Key:** Stored in `.env.local` as `GEMINI_API_KEY`

**Configuration:**
```typescript
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

const response = await ai.models.generateContent({
  model: 'gemini-2.0-flash',
  contents: messages,
  config: {
    systemInstruction: '...'
  }
});
```

---

## Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| typescript | ~5.8.2 | TypeScript compiler |
| @types/node | ^22.10.2 | Node.js type definitions |
| @vitejs/plugin-react | ^5.0.0 | React support for Vite |

---

## Build & Runtime

### Package Scripts
```json
{
  "dev": "vite --port 3000",      // Development server
  "build": "vite build",           // Production build
  "preview": "vite preview"        // Preview production build
}
```

### Module System
- **Type:** ES Modules (ESM)
- **Target:** ES2022
- **Module Resolution:** Bundler

### Path Aliases
```typescript
// tsconfig.json & vite.config.ts
"@/*" → "./*"  // Import from root using @/
```

---

## Browser Compatibility

**Target Browsers:**
- Modern browsers with ES2022 support
- Chrome 90+, Firefox 90+, Safari 15+, Edge 90+

**Features Requiring Modern Browsers:**
- CSS backdrop-filter (glassmorphism)
- CSS scroll-snap
- ES2022 JavaScript features
- Import maps (in index.html)
