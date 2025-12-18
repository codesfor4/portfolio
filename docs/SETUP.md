# Setup & Installation Guide

## Prerequisites

- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher (comes with Node.js)
- **Git:** For version control (optional)

---

## Quick Start

### 1. Clone or Download
```bash
# If using git
git clone <repository-url>
cd aditya's-modern-portfolio

# Or download and extract the ZIP file
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create or edit `.env.local` file in the root directory:
```env
GEMINI_API_KEY=your_google_gemini_api_key_here
```

**Getting a Gemini API Key:**
1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Click "Get API Key"
4. Create a new API key
5. Copy and paste into `.env.local`

### 4. Start Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:3000`

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create production build in `/dist` |
| `npm run preview` | Preview production build locally |

---

## Production Build

### Building for Production
```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Previewing Production Build
```bash
npm run preview
```

### Deployment
The `dist/` folder can be deployed to any static hosting service:
- **Vercel:** Connect repo, auto-deploys on push
- **Netlify:** Drag & drop `dist/` folder
- **GitHub Pages:** Use gh-pages branch
- **AWS S3:** Upload `dist/` contents
- **Firebase Hosting:** `firebase deploy`

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | Yes* | Google Gemini API key for AI chat |

*The AI chat feature will not work without this key, but the rest of the site will function normally.

### How Env Variables Work
- Vite exposes env variables prefixed with `VITE_` to the client
- In code, access via `import.meta.env.VITE_GEMINI_API_KEY`
- The `vite.config.ts` maps `GEMINI_API_KEY` to `VITE_GEMINI_API_KEY`

---

## Project Structure After Setup

```
aditya's-modern-portfolio/
├── node_modules/          # Installed dependencies
├── dist/                  # Production build (after npm run build)
├── components/            # React components
├── docs/                  # Documentation
├── .env.local             # Your environment variables
└── ...
```

---

## Troubleshooting

### Port 3000 Already in Use
```bash
# Use a different port
npm run dev -- --port 3001
```

### Dependencies Not Installing
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### TypeScript Errors
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

### AI Chat Not Working
1. Verify `GEMINI_API_KEY` is set in `.env.local`
2. Restart dev server after adding env variable
3. Check browser console for API errors
4. Ensure API key has Gemini API access enabled

### Styles Not Loading
1. Check internet connection (Tailwind loads from CDN)
2. Clear browser cache
3. Check browser console for CDN errors

---

## Development Tips

### Hot Module Replacement (HMR)
Vite provides instant updates when you save files. No need to refresh the browser.

### Path Aliases
Use `@/` to import from the project root:
```typescript
// Instead of
import { Component } from '../../components/Component';

// Use
import { Component } from '@/components/Component';
```

### TypeScript Strict Mode
The project uses strict TypeScript. All variables must be typed and null checks are required.

### Tailwind IntelliSense
Install the "Tailwind CSS IntelliSense" VS Code extension for autocomplete.
