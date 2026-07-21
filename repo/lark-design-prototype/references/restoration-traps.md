# Feishu Restoration Traps

Read this reference for high-fidelity restoration, full-page Figma implementation, screenshot recreation, or pages that visibly drift away from the Feishu feel.

## Quick Check

- Has the Figma coordinate system become a fixed page layout?
- Are there heavy gray backgrounds, strong borders, or ordinary card shadows?
- Have all modules become cards with equal visual strength?
- Is there gray backing with white cards, white cards with gray blocks, or gray blocks with smaller cards?
- Do blue or other accent colors appear in ordinary decoration, icon matrices, category tags, or large backgrounds?
- Does page UI use gradients?
- Is the whole main workspace locked by a fixed max width?
- Are multiple text layers bold in the same list, table, card, or navigation group?
- Do content sections lack external titles, or are titles wrapped inside bordered containers?
- Is text compressed, clipped, character-by-character, or vertical?
- Does the page only look close after 50% or 75% browser zoom?
- Do top bars, navigation, tabs, list rows, avatars, badges, message cards, or floating actions collide?
- Are recognizable UD controls rendered as unstyled ordinary `div` elements?
- Are icon styles mixed?
- Is a responsible visual anchor missing?
- Are unrelated modules added only because a case has them?

## Surfaces And Borders

Feishu interfaces express structure first through whitespace, titles, surface hierarchy, and component states. Borders are for real controls, table / list boundaries, key containers, and necessary grouping. Ordinary business cards need only a 0.5px light boundary.

Content section titles are external by default. Except for Hero, overview summary cards, small KPI cards, floating layers, navigation, and single detail cards, do not put section titles inside bordered Card / Table containers. Borders only wrap real content.

Avoid:

- Most modules in the same viewport have full frames;
- Title and content are wrapped by one frame, making the section hierarchy heavy;
- Gray backing with white cards, white cards with gray blocks, gray blocks with smaller cards;
- White cards floating on a heavy gray right rail;
- Colored borders used as generic decoration.

Side navigation background should use a near-white neutral surface and must not become an obvious gray block. Selected state uses neutral fill and 500 text weight, not light-blue fill or brand-blue text by default.

## Cards And Depth

Ordinary business cards, Hero, metric cards, quick entries, table containers, right summaries, stage pipelines, and insight panels have no shadows by default. Shadows are only for floating layers such as dropdown, popover, tooltip, dialog, and drawer.

Avoid card-in-card layouts. When content needs subdivision, prefer titles, rows, light fills, whitespace, and dividers.

Quick entries and lightweight recommendation entries do not set fixed height. With short titles and descriptions, cards should be shaped naturally by 16px vertical padding, text line-height, and 36–40px icon containers. Cards in one row take the height of the tallest card in that row. The parent uses `grid-auto-rows: auto`; `align-items: stretch` or card `height: 100%` can provide equal height within the row. If the whole group becomes too tall, the cause is usually fixed height, excessive `min-height`, `grid-auto-rows: 1fr`, `grid-auto-rows: minmax(...)`, `aspect-ratio`, or `place-items: center`. Entry icon containers may use light low-opacity blue fills to avoid a flat group of pure white outlined icons.

When multiple modules in Figma / screenshots appear to share a width, first restore the common container line and responsive grid. Do not add `margin-left`, temporary width, or fixed canvas coordinates to individual modules. Page title, Hero, module title, quick entry, table, and right rail should come from the same content wrapper.

## Layout

Figma frames, auto layout, padding, gap, and constraints should convert into responsive layout relationships. Page body uses document flow and does not copy full-page `top/left` coordinates.

For screenshot restoration, infer DPR and target CSS viewport before coding. If a source image is `2840 x 1630` and appears to be a Retina screenshot, the first target CSS viewport should be close to `1420 x 815`. A page that only matches at 50% zoom usually means raw screenshot pixels were used as CSS pixels.

Ordinary fixed dimensions remain only for icons, avatars, control heights, hairline borders, and local media ratios.

The main workspace of workspaces, tables, boards, CRM, admin pages, and data pages must fill the available space after the navigation shell. Max reading width is only for local areas such as long-form text, settings forms, and detail descriptions, not the whole `main-workspace` / `main-content`.

## Text

Table columns, navigation items, buttons, tags, card titles, and metadata all need minimum readable width or ellipsis / wrap strategies. When a title area contains search, filters, or action buttons, it should wrap or stack at narrow widths.

Tables are the exception: table body cells must not become two-line just to hold more information. Customer names, object names, amounts, owners, times, and action links stay 400 weight and single-line; auxiliary content moves to separate columns, tooltip, right detail drawer, or row details.

Default body text, descriptions, table content, card descriptions, and unselected navigation stay 400. Module titles, table headers, buttons, selected navigation, and key numbers may use 500. Page titles or a small number of core headings use 600. Within one information group, usually emphasize only one primary text.

Avoid:

- `word-break: break-all` on regular text;
- Search input with fixed width compressing the title;
- Page-level search placed inside a content section, leaving the top-nav tool group without search;
- Select / DatePicker stretched across the whole row, splitting filters and Tabs;
- Buttons and tags compressed into character-by-character columns;
- Two-line table body cells or bold table body text;
- Titles, descriptions, tags, and numbers all bold, making hierarchy dirty;
- Fixed-height containers clipping text.
- Badges, dates, avatars, tabs, or action buttons overlapping titles and message content.

## Icons And Media

Keep one icon style within the same group. Regular page UI icons use catalog `outlined`, preferably v2 when semantically suitable. Screenshot and Figma restoration preserve the source visual type: outlined, filled, or colorful. File lists, recent documents, attachment lists, document cards, and file directories can use File v2 colorful as a group. The same area / module must keep the same family, version, type, and shape and must not mix round and normal shapes.

Blue and other accent colors are only for primary actions, links, focus, current state, real status, and a small amount of brand identification. Do not use accent colors for ordinary card backgrounds, decorative lines, icon matrices, category tags, large KPI emphasis, or entries without state meaning.

Page UI does not use gradients. Backgrounds, Hero backing, cards, buttons, tags, icon backgrounds, borders, masks, and decorative blocks must not use gradients to create hierarchy.

Media needs responsibility and source. Gray boxes, random images, avatars with no source, and purely decorative geometry cannot serve as visual anchors. Generated imagery only creates the independent visual element inside the current media slot.

When Hero, welcome areas, recommended content, product entries, empty states, and workspace home pages carry first-glance explanation, first check the illustration library or record generated-image fallback. Pure outlined icons and text can leave the page without a visual anchor. If you decide not to use media, explain the reason in `media_decision`.

## Contract Pattern

```md
restoration_traps:
- trap: over-bordered cards
  evidence: most modules have full borders
  decision: keep key container and control boundaries; separate the rest with whitespace, titles, and light surfaces
- trap: compressed title
  evidence: title area and search input do not have enough horizontal space
  decision: from narrow width, wrap tools or stack title and tools
- trap: nested surfaces
  evidence: gray backing with white cards, white cards with gray blocks, gray blocks with smaller cards
  decision: keep only page base and content surface; separate the rest with titles, whitespace, row structure, and light dividers
- trap: retina scale mismatch
  evidence: source only matches after 50% or 75% browser zoom
  decision: write source_viewport_contract, infer DPR, and set browser preview to target CSS viewport
- trap: header collision
  evidence: title, avatar, badge, metadata, tabs, or toolbar actions overlap
  decision: reserve fixed slots, use min-width: 0 text containers, and ellipsis / wrapping boundaries
```

Omit this field when no risk is matched.
