# Sithara Grand premium restaurant website

## Outcome
Build an original, responsive Sithara Grand Family Restaurant website inspired by the reference’s cinematic dark-and-amber visual language, without reusing its branding, copy, imagery, restaurant details, or catering content.

## Pages and structure
- Add a persistent glassy header and premium footer shared across the site.
- Create dedicated Home, Menu, About, and Contact pages with unique metadata.
- Home: full-screen cinematic food opening, floating restaurant information, signature dishes, Grand Specials, biryani experience, restaurant story, dining standards, gallery, visit/contact band.
- Menu: complete searchable and filterable menu organized by every PDF category, with exact names and prices, veg/non-veg indicators where supportable, and item-specific WhatsApp enquiries.
- About: original family-dining story, multi-cuisine positioning, visual restaurant experience, and concise hospitality values without unsupported claims.
- Contact: live open/closed status, hours, phone, email, WhatsApp, full address, and address-based Google Maps directions.

## Brand and visual system
- Create an original minimal star emblem and Sithara Grand wordmark for the header, footer, and favicon.
- Define a charcoal, coffee-brown, warm amber, antique-gold, cream, and warm-gray token system.
- Use elegant display typography paired with a highly readable sans serif.
- Use generated original food and restaurant photography with consistent cinematic lighting; no reference-site assets or generic placeholders.
- Use layered depth, glass panels, restrained perspective tilt, image zoom, parallax, scroll reveals, and reduced-motion fallbacks.

## Menu and interactions
- Convert all four PDF pages into a typed menu data source with stable IDs, category, exact price, dietary type, image mapping, and generated WhatsApp message.
- Preserve PDF spelling and category-specific duplicates/prices; do not silently normalize ambiguous text.
- Add category navigation, text search, dietary filtering, empty states, responsive grids, and keyboard-accessible controls.
- Wire all call, email, WhatsApp, menu, navigation, and directions actions.
- Calculate open/closed status from current time in Asia/Kolkata against 12:00 PM–11:30 PM daily.
- Add a fixed WhatsApp action and an accessible mobile navigation panel.

## Technical details
- Keep menu data separate from presentation components and reuse image assets by related dish family only when visually accurate.
- Generate and optimize a cohesive set of food, interior, exterior, dessert, and drinks images; lazy-load non-opening imagery and reserve image dimensions.
- Use semantic HTML, one H1 per page, visible focus states, descriptive alt text, sufficient contrast, and no horizontal overflow.
- Add Restaurant JSON-LD and route-specific title, description, Open Graph, Twitter card, canonical URL, and relevant local-business details.

## Validation
- Verify desktop, tablet, and phone layouts with live browser checks.
- Test header, mobile navigation, search, filters, open/closed calculation, links, WhatsApp item messages, and category coverage.
- Compare extracted menu counts and exact prices against every PDF page.
- Confirm images load, no console/runtime/build errors remain, and scan the project for forbidden reference branding, locations, delivery services, USD, and all catering text.
