---
name: "Tensorix"
description: "An open, calm AI studio identity."
colors: {"paper":"#f5f7fa","ink":"#0e1425","muted":"#566174","line":"#dce1e9","blue":"#286be6","mark-blue":"#317bfa","teal":"#20c4be","purple":"#9e65fa","product-panel":"#10192b","product-text":"#c3cddd","white":"#ffffff","blue-hover":"#1e55bb","about-surface":"#eaf0f6"}
typography: {"display":{"fontFamily":"Manrope, system-ui, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif","fontSize":"clamp(52px, 6.5vw, 92px)","fontWeight":700,"lineHeight":1.04,"letterSpacing":"-.04em"},"body":{"fontFamily":"Manrope, system-ui, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif","fontSize":"16px","fontWeight":400,"lineHeight":1.65},"label":{"fontFamily":"Manrope, system-ui, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif","fontSize":"14px","fontWeight":700}}
rounded: {"control":"8px","feature":"16px","feature-mobile":"12px","pill":"30px"}
spacing: {"gutter-desktop":"56px","gutter-tablet":"32px","gutter-mobile":"20px"}
components: {"button-primary":{"backgroundColor":"{colors.blue}","textColor":"{colors.white}","rounded":"{rounded.control}","padding":"15px 23px"},"button-primary-hover":{"backgroundColor":"{colors.blue-hover}"},"language-switch":{"textColor":"{colors.ink}","padding":"8px 0"},"navigation":{"textColor":"{colors.ink}"},"product-status":{"textColor":"#bdd4ee","rounded":"{rounded.pill}","padding":"4px 12px"},"product-feature":{"backgroundColor":"{colors.product-panel}","textColor":"{colors.white}","rounded":"{rounded.feature}","padding":"42px 52px 0"}}
---

# Design System: Tensorix

## Overview

An open, calm AI studio identity grounded in the supplied brand sheet. The first viewport pairs a large editorial statement with the three-part mark. The mark is the signature graphic: blue diagonal capsule, teal vertical module, purple connector. A short assembly entrance is the only decorative animation, disabled for reduced motion.

The existing direction contract is retained here as an implementation reference. The north star is the supplied modular brand identity; no additional creative metaphor has been introduced.

## Colors

Cool paper and dark ink provide a calm field. Action blue identifies primary links; mark blue, teal, and purple belong to the supplied geometric identity. A dark navy product feature gives the real product screenshot a distinct setting. The name-origin section uses a pale blue surface.

Exact palette values are normative in the frontmatter; source custom properties live in public/style.css. Mark blue belongs to the brand artwork.

## Typography

Self-hosted Manrope 400 / 700, with system Chinese fallbacks. Headlines use bold weight and tight tracking. The hero display uses the frontmatter scale; introductory copy is 19px/1.7, with a 460px maximum width. Section headings range from 40px to 54px on desktop. The 700px breakpoint reduces major headings to 31–40px.

Chinese hero display uses clamp(46px, 5.2vw, 76px) with 1.25 line height, changing to clamp(40px, 9.5vw, 60px) on mobile. Chinese section headings use 1.3 line height.

## Layout

1320px maximum content width; 56px desktop, 32px tablet, and 20px mobile gutters. Responsive changes occur at 1000px and 700px; an enhancement at 1600px increases hero and artwork height. The desktop hero uses 1.13fr / 1fr columns. Product copy, principles, and name-origin content use paired columns, stacking at 700px. Large section spacing gives the editorial sequence room to breathe.

Homepage mode: Persuade. Sequence: brand thesis → real Metahub screenshot → principles → name origin → GitHub invitation. Primary CTA explores the product section; product CTA leads to the existing product site. Use editorial rows, not repeated feature cards.

## Elevation & Depth

The interface has no box shadows. Flat surfaces, thin dividers, orbit outlines, and the contrast between the paper background and navy product panel establish depth. Clip decorative orbits inside their artwork container to prevent horizontal overflow.

## Shapes

Controls use 8px corners. The product feature uses 16px corners on desktop and 12px on mobile. The status label uses a 30px pill radius. Circular tensor dots, matrix blocks, and the three-part logo are signature geometric elements.

## Components

- Primary CTA: action blue, white 14px bold label, 15px 23px padding, minimum 54px height, and 28px icon gap. Hover darkens to the documented blue-hover value over 0.2s.
- Navigation: 14px bold links with 32px gaps; gaps reduce at narrower widths. The header GitHub shortcut hides on mobile. Language switching is a text button, not a filled CTA.
- Product feature: navy background, white heading, muted light copy, an outlined status pill, and a full-width screenshot. On mobile the 650px-wide screenshot scrolls horizontally to preserve legibility; its caption remains visible and clearly says illustrative workspace.
- Keyboard focus: 3px action-blue outline with 6px offset on links and buttons. A skip link precedes the header.
- Motion: the mark assembles once over 1.1s with cubic-bezier(.16,1,.3,1); reduced-motion disables animation, transition, and smooth scrolling.
- Language: English default, with a locally stored Chinese preference. Content remains readable without JavaScript.

Provenance: Tensorix SVG reconstructed as crisp geometry from the user-supplied brand reference. Metahub mark and synthetic product screenshot copied from metahub-core website assets. Manrope font and license copied from the existing product site.

## Do's and Don'ts

- Preserve the supplied modular blue, teal, and purple identity.
- Use editorial rows and a real, clearly labeled illustrative product screenshot.
- Keep visible keyboard focus, semantic headings, the skip link, and reduced-motion support.
- Do not replace the editorial sequence with repeated feature cards.
- Do not introduce team-size, founder, pricing, consulting, or enterprise claims.
- Do not promise that future work will always be free or open source.
