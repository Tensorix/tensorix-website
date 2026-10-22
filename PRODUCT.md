# Tensorix

## Platform
web

## Purpose
Brand home for Tensorix, an AI studio starting with open source. Introduce its work, beginning with Metahub, and invite product exploration and GitHub participation.

## Confirmed constraints
- Tensorix combines Tensor and Matrix.
- Preserve the supplied blue, teal, purple modular brand identity and the slogan “AI for a more open world”.
- Keep the narrative focused on the brand, products, and principles; omit team-size and founder claims.
- Current focus is open source; future business model is undecided. No perpetual free/open-source promises, pricing, consulting, or enterprise offerings.
- Private repositories are context only, never marketing evidence.
- Metahub is the featured product; existing product site remains separate.

## Implementation decisions
Buildless HTML/CSS/JS, local Bun server, Cloudflare Worker for static assets and canonical redirects, independent GitHub repository. English default with persistent Simplified Chinese switch. No cookies, analytics, forms, or external runtime requests.

## Domains
www.tensorix.org canonical. Apex and unallocated wildcard subdomains redirect while preserving path and query. Explicit existing service subdomains must be excluded from wildcard interception.
