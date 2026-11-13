# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Mixed audience: recruiters and hiring managers, freelance or client leads, and peers or academic reviewers. They land on the site to judge the owner's work and skills, then get in touch.

## Product Purpose

A personal digital portfolio that presents its owner as a designer and developer. Success is a visitor understanding the owner's range of design and development work and then contacting them.

## Positioning

Owner presents as a designer and developer in one person, so the site itself should demonstrate both design judgment and engineering quality. The owner's name, specialties, and differentiators are not yet supplied and remain open.

## Operating Context

Visitors browse on both mobile and desktop. The site is built with Next.js (App Router), React, TypeScript and Tailwind CSS, deployed on Vercel. Pages: home, about, projects, project detail, contact. Content lives in typed objects under `src/data/`. An Obsidian vault sits inside the project folder as the owner's personal notes (git-ignored, not part of the site).

## Capabilities and Constraints

- Content is data-driven from `src/data/` (site, projects, skills, experience).
- Header is sticky while the page scrolls.
- Contact is currently an email link plus social links; no contact form.
- Undecided: owner's real name, bio, project list, social handles, resume PDF, photo.

## Evidence on Hand

- The owner says they have real projects, but no project details, screenshots, links, or copy are in the repository yet.
- `src/data/` currently holds placeholder content only (name "Your Name", two sample projects, sample skills and experience). Treat all of it as placeholder.
- No resume, photo, testimonials, or case studies exist. Do not fabricate projects, claims, clients, testimonials, or metrics.

## Product Principles

1. The site must prove designer-plus-developer skill by example, not by claiming it.
2. Real work leads; never present invented projects or claims as real.
3. Content stays in `src/data/` so the owner can update it without touching components.
4. Equally good on mobile and desktop, and accessible by default.
5. Easy for any of the three audiences to reach the owner.

## Accessibility & Inclusion

Semantic HTML, keyboard navigation and sufficient color contrast are required (per project conventions).
