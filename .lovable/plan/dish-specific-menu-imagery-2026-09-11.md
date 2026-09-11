# Dish-specific menu imagery

## Goal
Replace the current four-image fallback system with distinct, relevant food photography for every official menu entry while preserving all names, categories, prices, links, routes, and layout.

## Implementation
- Keep the PDF-derived menu rows unchanged and add an explicit image reference to every row.
- Create a cohesive set of original, realistic food photographs in warm premium restaurant lighting, organized in small category-based batches so each resulting asset corresponds to one exact dish.
- Use exact dish characteristics in the image prompts: protein, preparation, sauce, bread/rice style, drink flavor, dessert, portion style, and pot/family-pack presentation.
- Update menu cards and homepage signature/special cards to read the item-specific image reference directly.
- Preserve the current fixed media ratio, `object-fit: cover`, lazy loading, alt text, pricing, filtering, and item-specific WhatsApp behavior.

## Audit and verification
- Add an automated audit covering all menu rows: every item must have an image, every image assignment must be unique, and the mapping must retain the unchanged item count, names, categories, and prices.
- Visually inspect representative items from every category plus all homepage signature/special cards on desktop and mobile.
- Confirm there are no broken or empty images, distorted crops, duplicate image references, layout regressions, or changes to existing functionality.

## Technical details
- Store generated assets locally rather than hotlinking third-party images.
- Use compact image batches/contact sheets only as a generation step; export each dish into its own optimized local file with a stable filename derived from its existing menu ID.
- Keep the current application architecture and component boundaries intact; only the menu image data and image rendering source change.