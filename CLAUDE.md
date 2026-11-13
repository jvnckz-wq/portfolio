# Portfolio Website

Personal digital portfolio built with Next.js (App Router), React, and TypeScript.

## Commands

- `npm run dev` - start dev server at http://localhost:3000
- `npm run build` - production build
- `npm run start` - serve the production build
- `npm run lint` - run ESLint

## Tech Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS for styling
- Deployed on Vercel

## Project Structure

- `src/app/` - layout and the single page (App Router)
  - `page.tsx` - the whole site: one page with sections Intro, Projects, About, Certifications, Contact
- `src/components/` - one component per section plus Header (sticky, anchor links), ProjectCard, Footer
- `src/data/` - portfolio content (site, projects, skills, experience, certifications) as typed objects
- `src/lib/` - helpers and utilities
- `src/types/` - shared TypeScript types
- `public/` - static assets (images, resume PDF, favicon)

## Conventions

- Use Server Components by default; add `"use client"` only when state, effects, or browser APIs are needed.
- Keep content in `src/data/`, not hardcoded in components.
- One component per file, PascalCase filenames (`ProjectCard.tsx`); routes use lowercase folders.
- Use Tailwind utility classes; avoid inline styles and ad hoc CSS files.
- Use `next/image` for images and `next/link` for internal links; always provide `alt` text.
- Keep it accessible: semantic HTML, keyboard navigable, sufficient color contrast.
- Set per-page `metadata` for SEO and social previews.

## Guidelines for Claude

- Prefer small, focused changes; don't refactor unrelated code.
- Run `npm run lint` and `npm run build` before declaring work done.
- Ask before adding new dependencies.
- Keep the design responsive (mobile first).
- Keep the plain black/white design (system light/dark, Geist). Ask and show the change before any visual redesign.
- Don't run `npm run build` while the user's `npm run dev` is running; it leaves the dev server serving stale CSS. Ask first, or tell the user to restart dev afterwards.

## Obsidian notes (second brain)

The Obsidian vault is the `portfolio/` folder inside this project (git-ignored). Follow its `portfolio/CLAUDE.md` rules (frontmatter, `[[wikilinks]]`, never delete notes).

At the end of every session where something changed, before the final reply:

1. Append a short log to `portfolio/Daily/YYYY-MM-DD.md` (create it if missing) under a `## [[Portfolio Website]]` heading: what was done, decisions made, and next steps.
2. Update `portfolio/Projects/Portfolio Website.md`: its Decisions and To do sections, the `updated:` date, and a link to the day's note in Log.

Keep notes short and factual. Never put secrets or private data in them.
