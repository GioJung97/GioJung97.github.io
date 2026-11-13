# giojung97.github.io

Personal portfolio of Gio Jung, built with [Astro](https://astro.build).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where things live

| What | File |
| --- | --- |
| Bio, news, publications, experience, links | `src/data/site.ts` |
| Project pages (one Markdown file each) | `src/content/projects/` |
| Images (optimized at build time) | `src/assets/images/` |
| PDFs (served as-is) | `public/pdf/` |
| Colors, type, layout | `src/styles/global.css` |

Text with `{ en, ko }` switches with the EN/KO toggle. Pushing to `main` deploys to GitHub Pages
via `.github/workflows/deploy.yml` (Pages source must be set to "GitHub Actions").
