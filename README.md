# Portfolio

A personal portfolio site built with [Next.js](https://nextjs.org), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Editing your content

Almost everything on the site (name, bio, skills, projects, experience, social links, resume URL) lives in one file:

```
src/content/data.ts
```

Edit that file and the page updates — no need to touch the components themselves. A few notes:

- `profile.resumeUrl` points to `/resume.pdf` by default. Drop your resume at `public/resume.pdf`, or change the URL.
- `profile.email` is used for the "Say hello" mailto link in the Contact section.
- Project and experience entries are plain arrays — add, remove, or reorder items freely.

## Structure

- `src/app/` — root layout, global styles, and the page itself
- `src/components/` — one component per section (Hero, About, Skills, Projects, Experience, Contact, Footer, Nav)
- `src/content/data.ts` — all editable site content

## Dark mode

Theme is toggled via a button in the nav and persisted in `localStorage`. An inline script in `layout.tsx` applies the saved theme before first paint to avoid a flash of the wrong theme.

## Deploying

The easiest way to deploy is [Vercel](https://vercel.com/new), from the creators of Next.js. See the [deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.
