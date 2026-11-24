## Project rules
- Personal portfolio site for Nathan Asfaw, live at nathanasfaw.com
- Plain static HTML/CSS in ./site (no framework, no build dependencies). `npm run build` copies ./public and ./site into ./dist.
- Deployed to Cloudflare Workers via wrangler.jsonc (assets from ./dist). Do not modify wrangler.jsonc.
- Every push to main auto-deploys, so `npm run build` must pass before committing.
- Ship zero client-side JavaScript unless a feature truly needs it.
- Must be responsive (mobile first), accessible (semantic HTML, alt text, good contrast), and fast.
- Design source of truth: Figma file "nathanasfaw.com — Redesign" (scrapbook homepage, About, Projects, coming-soon pages).
