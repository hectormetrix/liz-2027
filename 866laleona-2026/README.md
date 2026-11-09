# 866laleona.com — Valdez Garza Law Firm, P.C.

Vite + React + Tailwind front end for 866laleona.com. The PHP backend (api/, admin/, SEO wrappers, .htaccess) lives on the cPanel server and is added on top of the built `dist/`.

## Preview in GitHub Codespaces

1. Push this repo to GitHub, then **Code → Codespaces → Create codespace on main**.
2. The dev container runs `npm install`, then `npm run dev`. The preview opens on port **8080**.
3. Hot reload is on, so edits show up right away.

Run it yourself: `npm install` then `npm run dev`.
Production build: `npm run build`. The output goes to `dist/`.

> The case-review forms post to `/api/submit-form.php`, which exists only on the live server.
> In Codespaces the form shows its error message. That's expected, and it works once deployed.

## What's where

| Path | Purpose |
| --- | --- |
| `src/lib/siteConfig.ts` | Phones, address, email, social links, practice areas and nav. **Edit contact details here.** |
| `src/components/BrandLogo.tsx` | The logo lockup: red seal + Cinzel text, horizontal or vertical |
| `src/components/Navigation.tsx` | Site header, used on every page |
| `src/components/Footer.tsx` | Site footer, used on every page |
| `src/components/LeadForm.tsx` | Case-review form (see the API contract below) |
| `src/components/home/*` | Home page sections |
| `public/images/` | Optimized photos (webp), seals, social share image |
| `public/accessibility-widget/` | MIM accessibility widget |

## Brand

- Fonts: **Cinzel** for headings, the menu and the logo; **Source Sans 3** for body text. Both load in `index.html`.
- Colors live in `tailwind.config.ts` under `brand`: `brand-red #D61A20`, `brand-red-dark`, `brand-red-deep`, `brand-ink`, `brand-charcoal`, `brand-cream`.

## Form → API contract (must match the live backend)

`POST /api/submit-form.php` with a JSON body:

```json
{ "firstName": "", "lastName": "", "phone": "", "email": "", "caseDescription": "", "pageUrl": "" }
```

- `firstName`, `lastName`, `phone` are required. The rest are optional.
- Inserts into `laleona_dashboard.leads` (`first_name, last_name, phone, email, case_description, page_url`).
- Responds `{"status":"success"}` or `{"status":"error","message":"..."}`.

## Tracking

`index.html` includes the MIM standard tracking script. It sends page visits to `/api/track-visit.php`, `tel:` clicks to `/api/track-call.php`, and `mailto:` clicks to `/api/track-email.php`.
