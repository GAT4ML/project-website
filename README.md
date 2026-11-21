# GAT4ML Website

This is the responsive single-page website for the GAT4ML project. It introduces the project's progress, research directions, publications, team, and contact information. The website is built with React, TypeScript, Vite, and Tailwind CSS.

## Requirements

- Node.js 22 (see [`.mise.toml`](./.mise.toml))
- pnpm 10.34.3 (dependencies are locked by [`pnpm-lock.yaml`](./pnpm-lock.yaml))

## Local Development

Run the following commands in the project root:

```bash
pnpm install
pnpm dev
```

The development server listens on port `8443` by default and is available at <http://localhost:8443>. Changes under `src/` trigger hot updates. Press `Ctrl+C` to stop the server.

If pnpm is not installed globally, run the project-pinned version with npm:

```bash
npm exec --yes pnpm@10.34.3 install
npm exec --yes pnpm@10.34.3 dev
```

## Common Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm build` | Build the production version into `dist/` |
| `pnpm preview` | Preview the built website locally |
| `pnpm format` | Format code with oxfmt |

Before publishing, run:

```bash
pnpm build
pnpm preview
```

The preview server uses port `8443` by default. If the development server is still running, stop it first or specify another port with the `PORT` environment variable, for example `PORT=4173 pnpm preview`.

## Project Structure

```text
src/
  App.tsx       Page composition, navigation, and global layout
  components/
    layout/     Site-wide navigation and footer
    ui/         Shared icons and section headings
  sections/     Page section components
  data/         News, work packages, publications, and team data
  index.css     Global styles, fonts, and Tailwind CSS
  main.tsx      React application entry point
public/         Favicons, images, and other static assets
index.html      HTML page template
vite.config.ts  Vite, React, and Tailwind CSS configuration
```

## Editing the Website

- The page order and navigation are in `src/App.tsx`; individual section content and interactions are in `src/sections/`.
- News, work packages, publications, and team information are in `src/data/`; the corresponding sections render this data.
- Site-wide layout components are in `src/components/layout/`; reusable UI components are in `src/components/ui/`.
- Global styles and fonts are in `src/index.css`; use Tailwind CSS classes for page-level styles.
- Static files such as images belong in `public/` and can be referenced with paths beginning with `/`, for example `/gat4ml-icon.png`.

The page uses the Manrope font from Google Fonts and falls back to the system sans-serif font when offline.
