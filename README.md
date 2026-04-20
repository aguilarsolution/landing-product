# The Door

> Access control infrastructure for modern engineering teams.

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=flat&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=flat&logo=shadcnui&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

**[Live Demo →](https://thedoor.vercel.app)**

---

## Overview

The Door is a product landing page for a fictional access management platform — built as a frontend portfolio piece demonstrating production-grade UI development with modern tooling.

The design follows a custom **dark industrial** system: anthracite backgrounds,  and amber used exclusively as an accent. Both dark and light modes are fully implemented and togglable.

---

## Stack

| Layer      | Technology                              |
| ---------- | --------------------------------------- |
| Framework  | Next.js 16 (App Router)                 |
| Language   | TypeScript                              |
| Styling    | Tailwind CSS v4 + CSS custom properties |
| Components | shadcn/ui (Base variant)                |
| Icons      | tabler icons                            |
| Font       | Inter, Geist                            |
| Deploy     | Vercel                                  |

---

## Features implemented

- **App Router architecture** — layout-level font loading, metadata API, and page composition via server components
- **Custom design system** — full token set in `globals.css` using `oklch` color space, mapped to Tailwind via `@theme inline`
- **Dual color modes** — `:root` (light) and `.dark` (dark) with distinct palettes derived from the same chromatic family; no generic whites or blacks
- **shadcn/ui integration** — Button, Card, Badge, and Separator configured with custom tokens; primary color mapped to amber
- **Responsive layout** — mobile, tested at 375px and 1280px breakpoints
- **Section architecture** — Navbar, Hero, Logos bar, Features grid, How it Works timeline, Pricing cards, CTA, Footer
- **Hover micro-interactions** — `transition-colors` on cards and buttons; amber border reveal on feature cards

---

## Project structure

```
/app
  layout.tsx          ← global theme, fonts, metadata
  page.tsx            ← section assembly

/components
  /app
    /icons
        ├── appleIcon.tsx
        ├── binaryTreeIcon.tsx
        ├── cloudflareIcon.tsx
        ├── crowdstrikeIcon.tsx
        ├── fileTimeIcon.tsx
        ├── fourIcon.tsx
        ├── indeedIcon.tsx
        ├── keyIcon.tsx
        ├── layersIcon.tsx
        ├── logo.tsx
        ├── menuIcon.tsx
        ├── moonIcon.tsx
        ├── oneIcon.tsx
        ├── shieldIcon.tsx
        ├── stripeIcon.tsx
        ├── sunIcon.tsx
        ├── teslaIcon.tsx
        ├── threeIcon.tsx
        ├── twoIcon.tsx
        ├── types.d.ts
        └── windowIcon.tsx
    /sections
        ├── header.tsx
        ├── navbar.tsx
        ├── hero.tsx
        ├── logosBar.tsx
        ├── features.tsx
        ├── howItWorks.tsx
        ├── pricing.tsx
        ├── cta.tsx
        └── footer.tsx
    /ui
        ├── section.tsx
        └── themeToggle.tsx
  /ui                 ← shadcn components
    ├── badge.tsx
    ├── button.tsx
    ├── card.tsx
    ├── carousel.tsx
    ├── dropdown-menu.tsx
    └── separator.tsx
/lib
  utils.ts            ← cn() helper

tailwind.config.ts    ← custom color aliases
globals.css           ← design tokens (oklch), dark/light mode
```

---

## Design system

The palette is derived from a single hue family (steel blue-gray, ~210–228° in oklch) with amber `#FF9F3B` as the sole accent.

| Token                | Dark      | Light     |
| -------------------- | --------- | --------- |
| `--background`       | `#06080A` | `#F0F2F4` |
| `--card`             | `#1E262A` | `#E2E8EC` |
| `--primary` (amber)  | `#FF9F3B` | `#D4820A` |
| `--foreground`       | `#E8EDF0` | `#0D1417` |
| `--muted-foreground` | `#7A9BAD` | `#3D5566` |
| `--border`           | `#2A3840` | `#B5C4CD` |

The amber value shifts between modes to maintain WCAG contrast ratios — brighter in dark (emissive), darker in light (legible).

---

## Running locally

```bash
git clone https://github.com/aguilarsolution/landing-product
cd landing-product
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy

Deployed on Vercel with zero configuration. Push to `main` triggers of vercel automatic deploy.

---

## Purpose

This project is part of a personal portfolio focused on frontend engineering and product design. The goal was to demonstrate:

- Ability to implement a **custom design system** from scratch inside a modern Next.js app
- **Component architecture** decisions in the App Router model
- **Typography and layout discipline** — consistent spacing scale, typographic hierarchy, and grid systems
- Production **deploy pipeline** via GitHub + Vercel

---

## Author

**Luis Aguilar** — Civil engineering student and self-taught full-stack web developer building toward a career in systems and security engineering.

[GitHub](https://github.com/aguilarsolution) · [LinkedIn](https://linkedin.com/in/aguilarsolution)

---

_The Door is a fictional product. Any resemblance to existing platforms is coincidental._
