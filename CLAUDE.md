# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

- `npm run dev` — Start Vite dev server (port 5173)
- `npm run build` — Type-check with `tsc -b` then Vite production build
- `npm run lint` — ESLint check
- `npm run preview` — Preview production build locally

## Architecture

React 19 + TypeScript + Vite 6 SPA with Tailwind CSS v4 and shadcn/ui components.

**Routing:** React Router DOM v7 with BrowserRouter. Routes defined in `src/App.tsx`. Vercel configured with SPA rewrites (`vercel.json`).

**Path aliases:** `@/*` maps to `./src/*` (configured in both `tsconfig.json` and `vite.config.ts`).

**Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin. Theme uses OKLch color space with CSS custom properties. Dark mode via `.dark` class. Font: Geist Variable.

**shadcn/ui:** Style `base-nova`, not RSC. UI components in `src/components/ui/`. Utility `cn()` in `src/lib/utils.ts`. React Bits registry available at `@react-bits` (configured in `components.json`).

**Adding components:**
- shadcn: `npx shadcn@latest add <component>`
- React Bits: `npx shadcn@latest add @react-bits/<component>`

## Key Conventions

- ESLint flat config (`eslint.config.js`) with TypeScript ESLint, React Hooks, and React Refresh rules
- Strict TypeScript: `noUnusedLocals` and `noUnusedParameters` enabled
- ES modules (`"type": "module"` in package.json)
- Three.js used for WebGL shader components (e.g., `FloatingLines`)
