## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)


## Project rules
- Personal portfolio site for Nathan Asfaw, live at nathanasfaw.com
- Astro static site. Output must stay "static". Do NOT add the @astrojs/cloudflare adapter or any SSR.
- Deployed to Cloudflare Workers via wrangler.jsonc (assets from ./dist). Do not modify wrangler.jsonc.
- Every push to main auto-deploys, so `npm run build` must pass before committing.
- Ship zero client-side JavaScript unless a feature truly needs it.
- Must be responsive (mobile first), accessible (semantic HTML, alt text, good contrast), and fast.
- Keep content in data/markdown files, separate from layout components.
