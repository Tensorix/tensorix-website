# Tensorix website

Brand website for **https://www.tensorix.org**. Independent of the Metahub application and its product website.

## Develop

```sh
bun install
bun run dev
```

Open http://localhost:4174. Static HTML/CSS/JS; no framework build required.

```sh
bun run check
bun test
```

## Deploy

```sh
bunx wrangler login
bun run deploy
```

Wrangler requires Node 22+ on PATH; invoke it via Bun. The site itself uses Bun for development and Cloudflare Workers for production.

`wrangler.jsonc` installs exact Worker routes for `www.tensorix.org/*` and `tensorix.org/*` on the existing proxied DNS records. It does not replace those records. The apex returns a permanent HTTP 308 redirect to the www host, preserving path and query. Preview workers.dev hosts serve the same site.

### Wildcard routing

Before enabling a wildcard Worker route or DNS record, inventory existing DNS, custom domains and Worker routes. Add more-specific exclusion routes for existing service hosts (particularly `metahub.tensorix.org` and any `app`, `api`, mail or other service hosts) so they keep their existing behavior. Only unallocated hosts should reach the redirect worker. Do not blindly replace records or routes. The Worker already redirects non-www `*.tensorix.org` requests if routed to it.

DNS alone cannot perform HTTP redirection. A proxied wildcard DNS record and wildcard Worker route (with exact service exclusions) are required. Validate TLS and redirects after deployment. Wildcard configuration is intentionally not installed by `bun run deploy`, because the live zone must be inspected first.

### GitHub Actions

Pushes to main and manual runs check static assets and redirect behavior. Deployment runs when repository secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` are configured. Missing credentials are reported as a skipped deployment in the run summary; they do not imply publication. Tokens in other repositories are not automatically inherited.

## Content and assets

- English default, persistent Simplified Chinese language switch.
- No analytics, forms, cookies, external fonts, or third-party runtime calls.
- Brand geometry follows the user-provided Tensorix brand reference.
- Metahub logo and illustrative v0.5.4 screenshot originate from `Tensorix/metahub-core/website/public/assets/`.
- Manrope is self-hosted under its included Open Font License.
- `PRODUCT.md` records editorial boundaries; `DESIGN.md` records visual decisions.

## Current publication status

Published on 2026-10-23 (Asia/Shanghai). Verified: www homepage returns 200 and matches repository source; apex returns 308 to HTTPS www with path/query preserved; Metahub product site continues to return 200.

Wildcard DNS currently resolves directly to an existing server (DNS only). Wrangler OAuth lacks DNS permissions, so wildcard DNS/proxy changes and catch-all routing remain pending. No wildcard route has been installed.

GitHub Actions validation passes. Automatic deployment remains skipped until repository deployment secrets are configured. Local authenticated Wrangler deployment is available.
