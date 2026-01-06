# AGENTS.md

This document guides agentic coding assistants working in this repository.

## Project Stack
- React 19 + TypeScript + Vite
- ESLint with TypeScript support
- Regular CSS files with CSS variables
- Leaflet for map functionality

## Commands

### Development
- `npm run dev` - Start dev server with HMR on localhost:5173
- `npm run build` - Run TypeScript check (`tsc -b`) then Vite build
- `npm run preview` - Preview production build locally

### Code Quality
- `npm run lint` - Run ESLint on all TypeScript files

### Testing
No test framework currently configured - no single test command available. If tests are added, document commands here.

## TypeScript Configuration

Compiler options enforced:
- `strict: true` - All type checking enabled
- `target: ES2022`, `module: ESNext`
- `jsx: react-jsx` - No React import needed for JSX
- `verbatimModuleSyntax: true` - Explicit type imports required
- `noUnusedLocals: true`, `noUnusedParameters: true` - No unused code
- `moduleResolution: bundler` - For Vite bundling

## Code Style Guidelines

### Imports
- Named imports from React: `import { useState, useEffect } from 'react'`
- Asset imports: `import logo from './assets/react.svg'`
- Relative imports without extensions: `import App from './App'`
- Explicit type imports when using types: `import type { ComponentProps } from 'react'`

### Components
- Functional components only (no class components)
- PascalCase for component names: `function App()`, `function UserProfile()`
- Export as default: `export default App`
- Prefer single-file components (component + co-located CSS)

### Import Organization
Order imports by type (within each group, alphabetize):
1. React hooks and core imports
2. External libraries (Leaflet, etc.)
3. Asset imports (images, audio)
4. Local component imports
5. CSS imports (last)

### State & Hooks
- camelCase for state variables: `const [count, setCount] = useState(0)`
- Use `set + StateName` convention for setters
- Arrow functions for inline event handlers: `onClick={() => setCount(c => c + 1)}`
- Custom hooks should start with `use`: `function useData()`

### JSX
- Fragment syntax: `<>...</>` (no React.Fragment import needed)
- Self-closing tags where appropriate
- Inline arrow functions for simple handlers
- Spread props sparingly, prefer explicit props

### CSS
- Regular CSS files with `.css` extension
- Import CSS in components: `import './App.css'`
- Use CSS variables in `:root` for theming: `:root { --primary: #646cff; }`
- kebab-case for class names: `.read-the-docs`, `.logo-react`
- Prefer utility classes over complex selectors
- Support dark/light themes via `@media (prefers-color-scheme: dark)`

### Type Annotation Patterns
- useRef with HTML types: `useRef<HTMLAudioElement | null>(null)`
- Event handlers: inline arrow functions for simple cases
- Interface for component props, define props outside component when complex

### Type Safety
- Explicit typing preferred over inference
- No `any` types - use `unknown` or proper types
- Use interface for object shapes, type for unions/primitives
- Null assertion operator (`!`) acceptable for guaranteed non-null values
- Leverage TypeScript's strict null checking

## ESLint Configuration

Applies to: `**/*.{ts,tsx}` files
- TypeScript ESLint recommended rules
- React Hooks plugin (enforces rules of hooks)
- React Refresh plugin (for HMR support)
- Dist directory ignored automatically

## Architecture

### Entry Points
- `src/main.tsx` - Application entry point, wraps App in StrictMode
- `index.html` - HTML template with root div

### Structure
- `src/` - Source code directory
  - `App.tsx` - Root component
  - `main.tsx` - Application entry
  - `*.css` - Component stylesheets
  - `assets/` - Processed assets (images, etc.)
- `public/` - Static files served directly

## Best Practices

- Always wrap app in `<StrictMode>` in development
- Run `npm run lint` before committing
- Type checking happens automatically in build via `tsc -b`
- Use HMR for fast iteration (files update without full reload)
- Prefer explicit over implicit code
- Keep components focused and small
- Use semantic HTML elements
- Add accessibility attributes where appropriate
- Leverage Vite's fast build times for development

## Error Handling

- Use try-catch blocks for async operations
- Implement error boundaries for component trees
- Provide user-friendly error messages
- Log errors appropriately (consider error tracking in production)
- Early returns for invalid states: `if (!audioRef.current) return`
- Null checks before DOM access: `const element = document.getElementById(sectionId); if (element) { ... }`
- Window/document checks for SSR safety: `if (typeof window === 'undefined') return`

## Accessibility

- Use aria-label for icon-only buttons: `aria-label="Cerrar"`
- Use aria-expanded for toggleable states: `aria-expanded={isMenuOpen}`
- Provide descriptive alt text for images
- Support keyboard navigation with proper focus management
