# Saad Sarwar — SEO Portfolio

Premium dark, responsive SEO portfolio built with Next.js 15, React 19 and Tailwind CSS 3.

## Run locally

1. Install Node.js 20 or newer.
2. Run `npm install` in this folder.
3. Run `npm run dev`.
4. Open http://localhost:3000.

## Upload to GitHub

1. Create an empty repository named `saad-seo-portfolio` at https://github.com/new.
2. Upload **the contents of this folder** to the repository (not the ZIP itself). You can use GitHub's **Add file → Upload files** option.
3. Commit the files to the default branch.

Alternatively, in this directory:

```bash
git init
git add .
git commit -m "Initial SEO portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/saad-seo-portfolio.git
git push -u origin main
```

## Deploy on Vercel

1. Sign in at https://vercel.com with GitHub.
2. Choose **Add New → Project**.
3. Import the `saad-seo-portfolio` repository.
4. Leave framework preset as Next.js and click **Deploy**.
5. Future pushes to your production branch automatically redeploy the website.

## Before publishing

- Verify all role dates and descriptions, especially overlapping employment and freelance roles.
- Review services and tools to ensure they reflect your experience.
- Update contact email, phone and LinkedIn in `app/page.tsx` if needed.
- Add a verified case studies section when you have approved client examples and supporting results.
- Add your real domain to metadata `metadataBase`, canonical URL and sitemap once you own it.
- If you add a resume PDF, place it in `public/` and add a link to it.

## Notes

- Contact email is `saadsarwar93@gmail.com`. The contact form prepares a prefilled `mailto:` message in the visitor’s email app; the visitor must click Send. There is no server-side email delivery, so this depends on an installed/configured email app.
- No client logos, testimonials, fabricated metrics, or unverifiable rankings are included.
- The project is designed to work without environment variables.

## SEO performance screenshots

The Results section includes 10 original user-supplied Google Search Console screenshots under `public/results/`. Each screenshot has its own card, reporting clicks, impressions, CTR and average position. Project names are intentionally anonymous. These are reporting totals, not independently verified growth or causal impact. Confirm client permission before adding client names.

## Hero portrait
The transparent-background portrait is at `public/saad-sarwar-portrait.png` and is displayed on the homepage. Replace this image to update the portrait.

## Brand logo

The header uses `public/ss-logo-mark.png` (cropped from the supplied logo), and `public/saad-sarwar-logo.png` contains the complete horizontal brand logo. The site favicon is `app/icon.png`.

## Worldwide positioning update

The homepage, services, international collaboration section, contact copy and SEO metadata now position Saad Sarwar for clients and employers worldwide. Existing portrait, branding, ten GSC screenshots and mailto contact form are retained.


## Corporate Blue theme

This edition uses an accessible light palette (white, ice blue, navy text, and royal-blue accents) across the website and interactive charts. The original profile photo, brand logo, ten Search Console screenshots, animated sections, contact mailto form, and international positioning remain in place. The contact form opens the visitor’s mail client; it does not send mail server-side.


## Corporate Blue v2 — dedicated routes and motion

Routes: `/` (complete scrolling homepage), `/about`, `/services`, `/experience`, `/results`, `/skills`, `/worldwide`, `/contact`. All routes reuse the same verified data and images.

Motion: intersection-observer scroll reveal (700ms), floating portrait (7s loop), card hover lift/shadow (250ms), button hover lift (200ms), chart bar height transitions (700ms), and reduced-motion support.

Contact form uses `mailto:`; it requires the visitor to send the prepared email in their email app. There is no server-side delivery.
