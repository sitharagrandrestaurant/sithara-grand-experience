# Sithara Grand premium restaurant website

## Outcome
Build an original, responsive Sithara Grand Family Restaurant website using the supplied Deccan Grill website as the primary visual and UX reference. The finished site must clearly feel from the same premium design family and level of sophistication—not like a generic restaurant template. Match its section rhythm, spacing, cinematic food-led presentation, black/deep-charcoal atmosphere, amber/gold emphasis, typography hierarchy, hero and navigation composition, glass panels, food-card styling, restrained depth, image treatment, button interactions, storytelling cadence, and motion language as closely as possible—without copying its branding, logo, text, restaurant information, imagery, menu, source code, or proprietary assets.

## Pages and structure
- Add a persistent glassy header and premium footer shared across the site.
- Create dedicated Home, Menu, About, and Contact pages with unique metadata.
- Home: full-screen cinematic food opening, floating restaurant information, signature dishes, Grand Specials, biryani experience, restaurant story, dining standards, gallery, visit/contact band.
- Menu: complete searchable and filterable menu organized by every PDF category, with exact names and prices, veg/non-veg indicators where supportable, and item-specific WhatsApp enquiries.
- About: original family-dining story, multi-cuisine positioning, visual restaurant experience, and concise hospitality values without unsupported claims.
- Contact: live open/closed status, hours, phone, email, WhatsApp, full address, and address-based Google Maps directions.

## Brand and visual system
- Use the user-supplied circular 3D Sithara Grand logo unchanged as the authoritative brand mark. Preserve its embossed gold/bronze finish, deep maroon/burgundy accents, proportions, and legibility at small header sizes; use its supplied clean white version on light surfaces when appropriate.
- Do not redraw, simplify, recolor, restyle, or reinterpret the supplied logo; only create responsive size treatments and a faithful favicon crop from that identity.
- Derive a favicon from the same supplied circular logo identity without redesigning it.
- Do not start final logo integration until the logo files are uploaded; the menu PDF does not contain the requested new logo asset.
- Define a near-black, deep warm-brown, gold, amber, bronze, restrained maroon/burgundy, cream, and warm-gray token system with subtle warm glows. Burgundy remains a supporting brand accent, not the dominant page color.
- Use elegant display typography paired with a highly readable sans serif.
- Use generated original food and restaurant photography with consistent cinematic lighting; no reference-site assets or generic placeholders.
- Follow the reference’s image-forward card proportions, generous whitespace, rounded glass information panels, dark hero scrim, alternating section rhythm, and premium footer composition.
- Use layered depth, glass panels, restrained perspective tilt, image zoom, parallax, scroll reveals, and reduced-motion fallbacks. Motion stays elegant and sparse rather than appearing on every element.

## Menu and interactions
- Convert all four PDF pages into a typed menu data source with stable IDs, category, exact price, dietary type, image mapping, and generated WhatsApp message.
- Preserve every PDF category, item, spelling, price, variant, and category-specific duplicate exactly; do not silently normalize ambiguous text or reconcile conflicting duplicate prices.
- Visually verify OCR-sensitive entries against the PDF page images before data entry, especially CHI LEMAN CORIENDER SOUP, APOLO FISH, BASKET CHICKEN, METI CHICKEN, and duplicate prawn prices.
- Assign veg/non-veg status only from explicit PDF section placement or markers. Keep egg and other internally inconsistent entries neutral where the PDF does not support a reliable distinction.
- Add category navigation, text search, dietary filtering, empty states, responsive grids, and keyboard-accessible controls.
- Wire all call, email, WhatsApp, menu, navigation, and directions actions.
- Calculate open/closed status from current time in Asia/Kolkata against 12:00 PM–11:30 PM daily.
- Add a fixed WhatsApp action and an accessible mobile navigation panel.
- Build item-specific WhatsApp links that insert the selected PDF item name into the enquiry message, using +91 9121577737.

## Technical details
- Keep menu data separate from presentation components and reuse image assets by related dish family only when visually accurate.
- Generate and optimize a cohesive set of original food, interior, exterior, dessert, and drinks images. Important dishes receive visually accurate imagery; unrelated dishes never share an obviously generic image. Lazy-load non-opening imagery and reserve image dimensions.
- Preserve the existing React, TypeScript, Vite, Tailwind, and shadcn architecture where practical. Add only the lightest animation support needed for reference-quality reveals and transitions; avoid unnecessary dependencies or project-wide rewrites.
- Use semantic HTML, one H1 per page, visible focus states, descriptive alt text, sufficient contrast, and no horizontal overflow.
- Add Restaurant JSON-LD and route-specific title, description, Open Graph, Twitter card, canonical URL, and relevant local-business details.
- Build mobile layouts deliberately: compact branded header, touch-friendly navigation, appropriately cropped imagery, full-width primary actions, and one/two-column menu cards based on available width rather than merely shrinking desktop.

## Validation
- Verify desktop, tablet, and phone layouts with live browser checks.
- Test header, mobile navigation, search, filters, open/closed calculation, links, WhatsApp item messages, and category coverage.
- Compare extracted menu counts and exact prices against every PDF page.
- Confirm the supplied Sithara logo is intact and consistently used in the header, mobile navigation, footer, and favicon.
- Confirm phone links use `tel:+919121577737`, email links use `mailto:sitaragrandpdrl@gmail.com`, WhatsApp links use `919121577737`, and directions use the exact Sithara address without invented coordinates.
- Confirm images load, performance remains smooth, no console/runtime/build errors remain, and no horizontal overflow exists at phone, tablet, laptop, and 1920px widths.
- Search the entire project and remove every occurrence or asset related to Deccan, Plano, Texas, Catering, USD, Uber Eats, DoorDash, old phone/address details, and reference-site imagery. The only permitted appearance of those terms during implementation is in private planning/reference notes, never shipped application code or content.
- Confirm there is no catering page, route, navigation item, button, call-to-action, component, text, data, or hidden functionality anywhere in the shipped application.
