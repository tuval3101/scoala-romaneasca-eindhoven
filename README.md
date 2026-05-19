# Scoala Romaneasca din Eindhoven

Professional bilingual website skeleton for **Scoala Romaneasca din Eindhoven**, built with Next.js App Router, TypeScript, Tailwind CSS, reusable components, mock data, Romanian routes, Dutch `/nl` routes, and an admin UI placeholder.

## Commands

```bash
npm install
npm run dev
npm run build
```

On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm`.

## Project Shape

- `src/app` contains the public Romanian pages, Dutch `/nl` pages, dynamic event detail route, and admin routes.
- `src/components` contains shared public and admin UI components.
- `src/data` contains all mock content for pages, programs, events, team, partners, and media.
- `src/lib` contains route, i18n, and utility helpers.

## Replacing Placeholder Images

The current export in `Resurse 1/Resurse` contains real media from the existing site. To use it in this Next.js project:

1. Create folders under `public/images`, for example `public/images/events`, `public/images/partners`, and `public/images/programs`.
2. Copy selected images from `Resurse 1/Resurse` into those folders.
3. Rename files to stable web-friendly names such as `hero-community.jpg`, `stream-2026.jpg`, `school-logo.png`, or `library-books.jpg`.
4. Update image paths in `src/data/events.ts`, `src/data/programs.ts`, `src/data/partners.ts`, and `src/data/media.ts`.
5. Keep large images optimized for web use, ideally below 300 KB for standard content images.

## Admin Notes

The `/admin` area is a front-end skeleton only. It has no authentication, database, upload handling, or CMS integration yet. TODO comments mark the places where future backend/CMS calls should replace mock data.
