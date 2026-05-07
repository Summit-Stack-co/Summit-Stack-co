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
