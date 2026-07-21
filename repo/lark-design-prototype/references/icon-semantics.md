# Icon Semantics

Icons support functionality, identity, and source restoration. Choose icons from the catalog, keep choices traceable, and avoid decorative icon noise.

## Contents

- Icon Source And Query
- Catalog Retrieval Requirement
- Selection Order
- V2 Priority
- Area Consistency
- Natural-Language Page Generation
- Figma And Screenshot Restoration
- File V2 Colorful
- Brand Logo Rules
- Icon Color Semantics
- Size Hierarchy
- Lightweight Checks
- Fallback

## Icon Source And Query

Use the bundled local catalog first:

```txt
data/icons/icons.catalog.json
```

The remote catalog is only an update source or fallback when the local file is unavailable:

```txt
https://lf0-fast-deliver-inner.bytedance.net/obj/eden-internal/vtlkunpzlkryhs/ljhwZthlaukjlkulzlp/chenningfeng.123/icons.catalog.json
```

The catalog is an array of categories. Each category usually contains `icons.colorful`, `icons.filled`, and `icons.outlined`. These are the real catalog families. Skill-level visual types such as `v2-outlined`, `non-v2-outlined`, `file-v2-colorful-normal`, `file-v2-colorful-round`, `brand-colorful`, `source-outlined`, `source-filled`, and `source-colorful` are derived from the icon name, source evidence, and usage.

Use `scripts/icon-query.mjs` instead of printing the raw catalog. Keep output to 3-5 candidates per intent. If a remote catalog request fails, use the local catalog and record the fallback briefly.

Assemble final SVG URLs in this format:

```txt
https://cdn-tos-cn.bytedance.net/obj/archi/ee/es-design-base/svgs/{name}.{hash}.svg
```

When a dark interface needs a dark-specific icon asset and the entry has `darkHash`, use `darkHash` instead of `hash`.

## Catalog Retrieval Requirement

All page UI icons must go through catalog retrieval before implementation. Query `scripts/icon-query.mjs`, choose a catalog entry, and use the returned `name`, `hash`, family, visual type, and final URL. This applies to navigation icons, toolbar icons, quick-entry icons, table actions, status helpers, file-type icons, brand logo slots, and source-restoration icon replacements.

Do not draw page UI icons yourself. Avoid inline SVG path drawing, CSS-only shapes, canvas-drawn symbols, emoji, text characters, third-party icon libraries, or generated bitmap icons as replacements for catalog icons.

If catalog retrieval has no suitable match:

1. try a nearby v2 match in the same area strategy;
2. use the area-level fallback to non-v2 when needed;
3. use text, Avatar, official illustration, product image, card media, or an icon-free structure.

Do not invent a new icon name or create an AI-drawn icon to fill the gap. Generated bitmap imagery may appear in media or illustration slots, but it must not replace functional page UI icons.

## Selection Order

Before selecting individual icons, decide the area-level strategy:

```md
icon_area_plan:
- area: sidebar | top_toolbar | quick_entry | file_list | table_row_actions | brand_header
  source_visual_type: unknown | outlined | filled | colorful
  visual_type: v2-outlined | non-v2-outlined | file-v2-colorful-normal | file-v2-colorful-round | brand-colorful | source-outlined | source-filled | source-colorful
  family: outlined | filled | colorful
  version: v2 | non-v2 | brand
  shape: none | normal | round
  fallback: keep the whole area consistent before changing individual icons
```

Then choose individual icons in this order:

1. Exact source icon name, family, version, and shape when restoring Figma or screenshots.
2. Same source visual type when the source is identifiable: `source-outlined`, `source-filled`, or `source-colorful`.
3. Same area `visual_type`, with v2 candidates first when the strategy is outlined or file colorful.
4. Same area family and shape with a non-v2 fallback when v2 semantics are not suitable.
5. Text, Avatar, official illustration, product image, card media, or an icon-free structure.

Do not invent icon names. Missing an icon is better than using a semantically wrong icon.

## V2 Priority

Prefer v2 icons for both outlined and colorful usage.

- Regular UI icons first query `outlined` candidates whose names contain `-v2_` or `-v2-` when such candidates semantically match the intent.
- File-type colorful icons first query File v2 colorful names, such as `icon_file-doc-v2_colorful`, `icon_file-sheet-v2_colorful`, `icon_file-round-doc-v2_colorful`, and similar entries.
- Source-restoration filled icons use catalog `filled` when the source clearly uses filled glyphs. Do not force a filled source area into v2 outlined just to satisfy regular UI defaults.
- If a single item lacks a strong v2 match, try a nearby v2 semantic match in the same area before falling back.
- If several important items in the same area lack suitable v2 matches, downgrade the whole area to the matching non-v2 type.
- Do not mix v2 outlined and non-v2 outlined inside the same navigation group, toolbar, quick-entry group, table row action area, or file-list group.

Brand logo icons are explicit brand assets and do not follow v2 priority.

## Area Consistency

The same explicit area must keep one icon strategy. Common areas include navigation groups, top toolbar tools, filter/action toolbars, quick-entry groups, app-entry groups, table row actions, recent document lists, attachment lists, file directories, and brand headers.

Within one area, keep these properties consistent:

- family: do not mix `outlined`, `colorful`, `filled`, bitmap, emoji, character icons, or hand-written SVG shapes;
- version: do not mix v2 and non-v2 when the visual type is outlined;
- shape: do not mix File v2 colorful normal and round shapes;
- size: keep icon size consistent within the same toolbar, row, or menu;
- color role: use semantic hierarchy instead of random category colors.

Different areas may use different strategies. For example, a sidebar can use `v2-outlined`, a recent file list can use `file-v2-colorful-normal`, and a product header can use `brand-colorful`.

## Natural-Language Page Generation

For natural-language tasks, choose icons by catalog `description` before relying on name similarity. Compare:

- user task and module intent;
- action semantics, such as search, filter, create, export, upload, approve, or delete;
- object semantics, such as document, sheet, calendar, meeting, mail, task, folder, or AI;
- state semantics, such as selected, disabled, warning, success, unread, locked, or offline;
- product domain and Chinese / English synonyms.

Regular page UI defaults to `v2-outlined` when matching candidates exist. Navigation, toolbars, search, filter, refresh, settings, more, upload, download, expand / collapse, entry cards, table row actions, status helpers, category helpers, and ordinary object types use outlined icons unless the area is a file-type group, brand identity, or screenshot source restoration.

## Figma And Screenshot Restoration

Source evidence has priority. If the icon can be identified from layer name, component name, export name, visual shape, or nearby text, reproduce the same catalog `name`, family, version, and visual type.

First classify each explicit icon area by source visual type:

- `source-outlined`: strokes, hollow shapes, neutral line icons, or toolbar glyphs with visible stroke structure;
- `source-filled`: solid silhouettes, filled tab icons, filled status glyphs, or source icons whose main shape is filled rather than stroked;
- `source-colorful`: multicolor icons, product-color icons, file-type colorful icons, brand assets, or colorful circular / normal catalog icons.

Use the matching query style for the area:

```txt
scripts/icon-query.mjs --style source-outlined --query "<intent>"
scripts/icon-query.mjs --style source-filled --query "<intent>"
scripts/icon-query.mjs --style source-colorful --query "<intent>"
```

Do not convert a clearly filled or colorful source area to outlined only because regular generated pages default to outlined. If one icon in an area has unclear source type, infer from neighboring icons in the same area, then keep the area consistent.

When the source icon is colorful:

- for screenshot restoration, when source icons are visibly colorful in an area, preserve colorful catalog icons for that area unless the source is unclear or no suitable catalog match exists;
- keep colorful if the source role is a brand logo, file-type identifier, or clearly colorful product/source icon;
- preserve the same area shape and type before selecting nearby alternatives;
- choose the closest same-type catalog entry by `description` when the exact name is missing;
- record `fallback_reason` when the selected icon differs from the source visual type.

When the source icon is filled:

- preserve filled catalog icons for the whole area when the source glyphs are visibly solid;
- choose the closest `filled` catalog entry by `description`, nearby text, and object / action semantics;
- keep size, color role, and filled-vs-outlined family consistent across the same area;
- record `fallback_reason` if no suitable filled match exists and the whole area falls back to outlined.

If the source is unclear or the area cannot stay consistent, downgrade the whole area to a consistent outlined strategy or use an icon-free structure.

## File V2 Colorful

File v2 colorful identifies file types. It is appropriate for file lists, recent documents, document cards, attachment lists, templates, and file directories that need to distinguish doc, sheet, slide, base, mindnote, file, folder, and similar object types.

Before use, record in `icon_plan`:

- `usage: file_type_identification`;
- `visual_type: file-v2-colorful-normal` or `file-v2-colorful-round`;
- catalog `family: colorful`;
- file type;
- shape: `normal` or `round`;
- matched `name`, `hash` / `darkHash`, and final URL.

Do not use File v2 colorful for ordinary navigation, toolbars, entry categories, generic statuses, or decoration. If shape consistency cannot be confirmed, choose outlined or an icon-free structure.

## Brand Logo Rules

Brand and product identity positions may use approved colorful logo assets:

- Use `icon_feishu-logotype-zh_colorful` for Chinese Feishu brand positions.
- Use `icon_feishu-logotype-en_colorful` for English Lark / Feishu brand positions.

These icons are `brand-colorful`. They are allowed in top brand areas, login / welcome areas, official brand pages, and product identity slots. Do not use them as ordinary navigation icons, list icons, status icons, or decorative marks.

Record in `icon_plan`:

- `usage: brand_identity`;
- language choice: `zh` or `en`;
- selected `name`, `hash` / `darkHash`, family, and final URL.

## Icon Color Semantics

Icon color follows responsibility:

- default icon: `icon-n2`;
- current item, high emphasis, or current page anchor: `icon-n1`;
- low-emphasis helper: `icon-n3`;
- disabled state: `icon-disabled`;
- icon inside filled primary button: `primary-on-primary-fill`;
- primary action, link, focus, or current state on neutral surface: `primary-content-default`;
- danger, success, warning, and info icons: functional colors only for real statuses or real risks.

Navigation items, entry cards, toolbars, table row actions, category tags, ordinary object types, helper icons near avatars, and decorative positions default to neutral icon colors. Do not use brand blue, green, orange, red, or purple to categorize every entry in the same group. File v2 colorful uses its own file-type color and should not receive extra high-saturation or status colors.

## Size Hierarchy

- 12px: dense inline metadata.
- 14px: compact controls and menu rows.
- 16px: standard actions.
- 20px: toolbar or empty-state helpers.
- 24px: prominent product objects or onboarding helpers.
- top-nav right tool button: 28px container + 20px linear icon; dense toolbars may use 18px icons, but the same group must be consistent.
- top-nav left menu / collapse control: 24-28px container + 18px icon.
- expanded side-navigation row: 18-24px icon or avatar container; regular product icons prefer 18px, avatars may use 24-28px.
- collapsed side-navigation rail: 40px row, centered icon, usually 18px icon or 24px avatar container.
- account avatar entry: 32px.

Judge icon size together with row height and button height. Icons should not be enlarged alone and create a loose, heavy feel.

## Lightweight Checks

Keep checks light. They should catch obvious problems, not perform full semantic review.

Useful checks:

- icon URLs follow the catalog CDN pattern or a deliberate local asset path;
- page UI icons are traceable to catalog retrieval and do not use AI-drawn, CSS-drawn, canvas-drawn, emoji, text-character, third-party, or hand-written SVG replacements;
- `filled` appears only when source evidence or an explicit `source-filled` area strategy supports it;
- explicit areas marked or named as navigation, toolbar, quick entry, file list, table row actions, or brand header do not mix major family / version / shape;
- brand positions use the approved Feishu logotype assets when Feishu / Lark identity is required.

Avoid heavy checks:

- do not require every icon to include a long semantic proof;
- do not force every icon to be v2 when the v2 candidate is semantically weak;
- do not run complex DOM inference to guess every icon area;
- do not block screenshot restoration just because the source colorful icon is not a file-type icon;
- do not require a full icon audit for small pages with only one or two simple icons.

## Fallback

If the catalog has no suitable icon, prefer text, Avatar, an official illustration, product image, card media, or an icon-free structure. Use non-v2 only after v2 candidates fail semantic matching. Use area-level fallback so one group stays visually coherent.
