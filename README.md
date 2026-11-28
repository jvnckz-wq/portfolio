# Portfolio

Personal portfolio of John Vincent Amar, an IT student and aspiring frontend developer. It is a one-page site with these sections:

- **Intro:** name, rotating tagline and profile photo
- **Projects:** carousel of projects with screenshots, tech used and links
- **About:** bio, tools I'm learning, experience, accomplishments and certifications
- **Contact:** contact form, email, social links and resume

## Tech stack

- [Next.js](https://nextjs.org) (App Router), React and TypeScript
- Tailwind CSS
- Geist font
- Deployed on Vercel

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Command         | What it does                 |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Make a production build      |
| `npm run start` | Serve the production build   |
| `npm run lint`  | Run ESLint                   |

## Project structure

```
src/
  app/          layout and the single page
  components/   one component per section, plus shared pieces
  data/         site content (projects, skills, experience, ...)
  lib/          helpers
  types/        shared TypeScript types
public/         images, screenshots and resume
```

Site content lives in `src/data/`, so projects, skills and other text can be changed without touching the components.
