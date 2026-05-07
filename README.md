# Summit Stack Co — Site

Marketing and showcase site for **Summit Stack Co** (web systems and development). Static HTML, CSS, and a small amount of JavaScript—no build step required.

## What’s in this repo

| Path | Purpose |
|------|---------|
| `index.html` | Home: hero, process, mockup request form, links to subpages |
| `features/index.html` | Feature overview |
| `pricing/index.html` | Pricing tiers and terms |
| `production/index.html` | Live site examples (portfolio cards) |
| `sample-sites/` | Demo concept sites (contractor, dental, law firm, restaurant) |
| `assets/` | Shared CSS, JS, images, favicon |
| `public/sample-sites/` | Thumbnail images for sample concepts |
| `livesite/` | Screenshots used on the Live Sites page |

## Run locally

Because pages use relative paths (`../` between folders), open the site through a local server instead of double-clicking `index.html` (so navigation and assets resolve correctly).

**Python 3** (from the repo root):

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080/`.

## Deploy on GitHub Pages

This repo includes a **GitHub Actions** workflow (`.github/workflows/deploy-github-pages.yml`) that publishes the **repository root** as a static site whenever you push to `main`.

1. On GitHub, open the repo → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Push to `main` (or run the workflow manually under **Actions** → **Deploy GitHub Pages** → **Run workflow**).
4. After the job succeeds, Pages shows the site URL (often `https://<owner>.github.io/<repo>/`).

The site uses **relative** links and paths, so it works on a project URL that includes the repository name. A root `.nojekyll` file is included so GitHub does not treat the site as a Jekyll project.

**Org / repo:** If this is `Summit-Stack-co/Summit-Stack-co`, the default URL is typically  
`https://summit-stack-co.github.io/Summit-Stack-co/`.

**Custom domain** (optional): add your domain under **Pages**, add a `CNAME` file in the repo root, and configure DNS as GitHub documents.

**Node** (if you use npx):

```bash
npx serve .
```

## Mockup form

The home page request form submits to **[Formspree](https://formspree.io/)**. The endpoint is set on the `<form>` in `index.html`. Replace it with your own Formspree form URL if this repo was forked or the form should go to a different inbox.

## Search engines

Main showcase pages include `noindex, nofollow` in the document head. Remove or adjust those meta tags when you are ready for public indexing.

## License

Proprietary — Summit Stack Co. All rights reserved unless otherwise noted.
