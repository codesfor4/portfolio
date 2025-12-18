# Project File Structure

```
aditya's-modern-portfolio/
│
├── components/                 # React UI Components
│   ├── Navbar.tsx             # Navigation bar with responsive menu
│   ├── Hero.tsx               # Landing section with typewriter effect
│   ├── Projects.tsx           # Featured projects grid showcase
│   ├── Journey.tsx            # Horizontal timeline (education/work)
│   ├── Skills.tsx             # Vertical skills timeline
│   ├── About.tsx              # Personal info and traits
│   ├── Footer.tsx             # Footer with social links
│   └── AIChatButton.tsx       # Floating AI chat assistant
│
├── docs/                       # Documentation (this folder)
│   ├── FILE_STRUCTURE.md      # Project structure overview
│   ├── COMPONENTS.md          # Component documentation
│   ├── TECHNOLOGIES.md        # Tech stack details
│   ├── FEATURES.md            # Feature documentation
│   ├── SETUP.md               # Installation & setup guide
│   └── ARCHITECTURE.md        # Architecture overview
│
├── App.tsx                     # Main application component
├── index.tsx                   # React entry point
├── index.html                  # HTML template with styles
│
├── vite.config.ts             # Vite build configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies & scripts
├── metadata.json              # App metadata
│
├── .env.local                 # Environment variables (API keys)
├── .gitignore                 # Git ignore rules
└── README.md                  # Project readme
```

## Directory Breakdown

### `/components`
Contains all React components that make up the portfolio. Each component is self-contained with its own styling and logic.

### `/docs`
Project documentation including this file structure guide, component docs, and setup instructions.

### Root Files

| File | Purpose |
|------|---------|
| `App.tsx` | Main app component, section routing, scroll tracking |
| `index.tsx` | React DOM entry point, renders App component |
| `index.html` | HTML template, includes Tailwind CDN, custom CSS |
| `vite.config.ts` | Vite dev server and build configuration |
| `tsconfig.json` | TypeScript compiler options and path aliases |
| `package.json` | Project dependencies and npm scripts |
| `metadata.json` | App name, description, permissions |
| `.env.local` | Environment variables (Gemini API key) |
| `.gitignore` | Files/folders to exclude from git |
