# Component Documentation

## Overview

This portfolio uses a component-based architecture with 8 main React components. All components are written in TypeScript and use Tailwind CSS for styling.

---

## Navbar.tsx

**Purpose:** Fixed navigation bar with responsive design

**Features:**
- Sticky positioning with backdrop blur on scroll
- Active section highlighting based on scroll position
- Responsive hamburger menu for mobile
- Smooth scroll navigation to sections

**Props:** None (uses internal state)

**Key State:**
- `isScrolled` - Tracks if page has been scrolled
- `isMobileMenuOpen` - Controls mobile menu visibility
- `activeSection` - Currently active navigation item

**Navigation Items:**
- Home (#home)
- Projects (#projects)
- Journey (#journey)
- Skills (#skills)
- About (#about)

---

## Hero.tsx

**Purpose:** Landing section with personal introduction

**Features:**
- Typewriter effect cycling through job titles
- Profile image with gradient glow border
- "Available for Work" animated badge
- Call-to-action buttons

**Subcomponents:**
- `Typewriter` - Internal component for typing animation

**Typewriter Roles:**
```typescript
['Data Analyst', 'Python Engineer', 'AI Automation Specialist', 'QA Expert']
```

**CTA Buttons:**
- "View My Work" → #projects
- "My Journey" → #journey

---

## Projects.tsx

**Purpose:** Showcase featured projects in a grid layout

**Features:**
- 3-column responsive grid
- Project cards with hover effects
- Technology tags
- Code and Live Demo links

**Subcomponents:**
- `ProjectCard` - Individual project display card

**ProjectCard Props:**
```typescript
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  codeLink: string;
  liveLink: string;
}
```

**Featured Projects:**
1. Predictive Analytics Dashboard (SQL, Power BI, Python)
2. Automated Lead Gen Bot (n8n, Python, API)
3. Health Tech QA Suite (Selenium, JIRA, Python)

---

## Journey.tsx

**Purpose:** Horizontal scrollable timeline of milestones

**Features:**
- Horizontal scroll container
- Manual navigation buttons (left/right)
- Scroll snap behavior
- Education and work experience cards

**Subcomponents:**
- `JourneyCard` - Individual milestone card

**JourneyCard Props:**
```typescript
interface JourneyCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  date: string;
  description: string;
}
```

**Timeline Items:**
1. Bachelor's Degree (2021-2025) - Computer Engineering & Visual Arts
2. Data Analysis Intern (June-Oct 2025) - Kanishka Software
3. AI Automation Freelance (Jan 2024-Present)

---

## Skills.tsx

**Purpose:** Vertical timeline displaying technical skills

**Features:**
- Alternating left/right layout (zigzag)
- Central vertical timeline with glowing dots
- 9 skill cards with descriptions
- Responsive centered layout on mobile

**Skills Listed:**
| Skill | Description |
|-------|-------------|
| QA | Quality Assurance testing expertise |
| n8n Automation | Workflow automation platform |
| Python Engineering | Python development & scripting |
| A/B Testing | User experience testing |
| System Testing | End-to-end system validation |
| Workflow Automation | Business process automation |
| SQL Querying | Database querying skills |
| MySQL Database | MySQL database management |
| Power BI Visualization | Data visualization & dashboards |

---

## About.tsx

**Purpose:** Personal background and professional traits

**Features:**
- Two-column layout (text + stats)
- Three highlighted trait cards
- Professional narrative

**Trait Cards:**
| Trait | Icon | Description |
|-------|------|-------------|
| Fast Thinker | Zap | Quick problem-solving |
| Goal Oriented | Target | Results-driven approach |
| Growth Mindset | TrendingUp | Continuous improvement |

---

## Footer.tsx

**Purpose:** Footer section with branding and links

**Features:**
- Gradient logo text
- Social media links with icons
- Auto-updated copyright year
- Legal links (Privacy, Terms)

**Social Links:**
- LinkedIn
- GitHub
- Twitter
- Email

---

## AIChatButton.tsx

**Purpose:** Floating AI chat assistant powered by Gemini

**Features:**
- Fixed floating button (bottom-right)
- Modal chat interface
- Real-time AI responses
- Message history
- Loading states
- Error handling

**Props:** None

**Key State:**
- `isOpen` - Chat modal visibility
- `messages` - Conversation history array
- `inputValue` - Current input text
- `isLoading` - API call loading state

**Message Interface:**
```typescript
interface Message {
  role: 'user' | 'model';
  content: string;
}
```

**AI Configuration:**
- Model: `gemini-2.0-flash`
- System instruction: Professional tone, focus on Aditya's background
- API: Google Generative AI (@google/genai)

**Error Handling:**
- Fallback message on API failure
- Console error logging
