# Layout And Interaction

Figma, screenshots, and design drafts provide layout evidence. The goal is to convert the source into a responsive, interactive product interface that keeps the Feishu feel.

## Figma / Screenshot Evidence

Write `source_layout_evidence` first:

- frame scope, scroll areas, and cropping relationship;
- reading order and primary / secondary regions;
- auto layout direction, padding, gap, alignment, wrap;
- constraints, fill / hug, min / max, resize behavior;
- recognizable component instances, states, variants, prototype hints;
- color, radius, border, shadow, text style, and variable clues;
- media slots, image ratio, and cropping method;
- which regions enter normal document flow, and which are floating or locally positioned.

When source evidence conflicts with cases, keep source evidence. Cases only provide risk reminders and transferable experience.

## Source Viewport Contract

For screenshot restoration, write `source_viewport_contract` before implementation:

```md
source_viewport_contract:
  source_image_px:
  inferred_dpr:
  target_css_viewport:
  browser_preview_viewport:
  delivery_fit_rule: responsive_web_page | fixed_artboard
  scale_rule: do not use raw screenshot pixels as CSS px
```

Do not infer the target CSS viewport from source image pixels with a single fixed DPR assumption. Browser preview must use `browser_preview_viewport`, not the default browser size.

`target_css_viewport` is a calibration and browser-preview contract, not a required fixed deliverable canvas. Use it to infer proportions, typography scale, spacing, and the preview viewport. The delivered page should still render at normal browser zoom in the current viewport unless the user explicitly asks for a fixed artboard. Do not solve screenshot restoration by hard-coding the whole app shell to the target CSS viewport when the result is meant to be used as a web page.

Use `delivery_fit_rule: responsive_web_page` for normal web demos, products, dashboards, tools, and IM / Docs / collaboration surfaces. In this mode, the app shell should use responsive sizing such as `100vw`, `100vh`, flex, grid, `minmax`, and breakpoints while keeping the source proportions calibrated. Use `delivery_fit_rule: fixed_artboard` only when the user explicitly asks for a fixed canvas, export board, slide-like frame, or exact-size artboard.

Calibrate with stable evidence: app chrome height, sidebar width, list column width, top bar height, avatar diameter, list row height, control height, message spacing, and body text size.

## Scale Calibration

For screenshot restoration, run a brief scale calibration pass before full implementation:

- Identify a few stable UI anchors in the source, such as navigation width, list column width, header height, avatar size, control height, message spacing, and body text size.
- Use the anchors to choose the target viewport and base scale; do not rely on screenshot pixel dimensions alone.
- During preview, check whether the page feels correctly scaled at normal browser zoom. If it only looks right after manual browser zoom, revisit the scale calibration before making local CSS tweaks.

## Layout Conversion

- Page body uses flex, grid, gap, padding, margin, min/max-width, and overflow.
- Avoid copying full-page `top/left` coordinates or fixed canvas size.
- Fixed dimensions are only for base elements: icons, avatars, control height, hairline borders, and local media ratios.
- Absolute positioning is only for badges, tooltip, popover, dropdown, local visual anchors, and other truly floating elements.
- Work pages prefer a vertical main spine; a right rail appears only when the source or information architecture clearly needs it.
- The main workspace uses responsive width and fills the available space after the navigation shell. `main-workspace`, `main-content`, and the right content area use `width: 100%`, responsive padding, grid / flex / minmax, and breakpoints.
- Max reading width is only for local reading content such as long-form text, settings forms, and detail descriptions. Workspaces, tables, boards, CRM, admin pages, and data pages must not apply a fixed `max-width` to the whole main workspace. Wide-screen readability is controlled through column count, table column width, right auxiliary rail, local reading width, and whitespace rhythm.
- Layout aligns to the 4px base grid. The main content container, module titles, tables, card grids, and right rail use stable left edges, column widths, and gaps. Avoid random values and temporary offsets. Implementation should reuse spacing variables or constants. Common values are 16 / 24 / 32 / 40px. Except for font line-height, 0.5px borders, and optical icon corrections, layout values should not leave the 4px grid.
- Page title, module title, Hero, quick entry, card grid, table container, and right rail should inherit the same content wrapper padding and left edge. Do not repair alignment with a single module's `margin-left`, temporary `width`, or offset.
- Hover, selected, loading, error hints, and dynamic numbers must not change card height, column width, toolbar height, or the overall page rhythm.

## Shell Conversion

Choose the shell pattern based on the source and product semantics before handling content:

- `side-nav-primary`: Side navigation is the main app anchor and usually occupies `100vh`. At standard width it stays expanded, width 224–280px. At `narrow`, it may shrink to a 64–72px icon rail; at `compact`, it becomes a drawer, top entry, or bottom entry. The right workspace should prefer white or nearly white `bg-body`; the main workspace stretches responsively within the remaining space and does not get an extra page-level large rounded content shell or light-gray backing layer.
- `top-nav-primary`: Top navigation is the main app anchor, usually 64px high, with a `bg-body` surface and 0.5px bottom divider. Main content starts below the top bar. If an auxiliary sidebar exists, it starts below the top bar, has height `calc(100vh - 64px)`, usually uses `bg-body`, and is separated from content by a 0.5px vertical divider.

Do not mix the backing relationships of `side-nav-primary` and `top-nav-primary`. In particular, do not add an extra rounded shell or gray backing layer to the right main content by default just because a page has a sidebar.

## Spacing And Sectioning

Feishu pages separate modules with whitespace. Common rhythm:

- First-level content groups: 40px;
- Large horizontal blocks: 24px;
- Same-group cards or grids: 16–24px;
- Title to content: 16px;
- Inline icon and label: 4–8px.

Quick-entry grids only fix column width and gap, not row height. The parent uses `grid-auto-rows: auto`, allowing cards in the same row to stretch to the tallest card in that row. Do not use `grid-auto-rows: 1fr`, `grid-auto-rows: minmax(...)`, `place-items: center`, `aspect-ratio`, or fixed height classes to make all rows equally tall.

40px is the default vertical spacing between content groups. Local structures such as table rows, menu items, and tag groups may stay tight. Other content areas should avoid over-compression.

Table rows need to be stable and single-line. Body cells use `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`. Do not stack primary and secondary information vertically inside a cell. Auxiliary information should move into separate columns, tooltip, right detail drawer, or row details. Long-text ellipsis, hover, selected, and loading should not change table row height.

Content sections default to an external header and content container. The header is on top and carries the module title, description, and optional tools. The content container below carries a table, list, card grid, or business surface. Header and content container usually keep 12–16px spacing, and the content container border must not wrap the section title. Hero, floating layers, navigation, and a single detail card may use internal titles.

## Responsive Expectations

- `standard`: Keep the full shell, multi-column layout, and right auxiliary area. Search, filters, Tabs, and actions stay as a stable one-row toolbar.
- `narrow`: Reduce column count, merge the right auxiliary area into the main content flow, allow tool areas to wrap, and collapse filters first into icon buttons or Dropdown.
- `compact`: Single-column content flow, sidebar becomes an explicit entry, and complex filters collapse into IconButton + Drawer / Popover.

The main workspace stays responsive at all three breakpoints: standard fills the available width after the navigation shell; narrow preserves readability through fewer columns, a moved-down right rail, and wrapping tool areas; compact becomes a single column. Do not use fixed canvas width or whole-page `max-width` that creates large meaningless whitespace on wide screens.

Page-level search goes by default at the leftmost position of the `top-nav` right tool button group. Content sections only contain local search and filters, and their scope should be the current table, list, or board.

When a title area contains local search, filters, Select, Tabs, or action buttons, title and tools need clear responsive responsibilities. At standard width, the toolbar stays on one row: search input is usually 280–360px, Select / DatePicker usually 160–220px, and Tabs align with filters. When space is tight, switch to wrapping or a vertical layout. Filters first become icon buttons, Dropdown, Popover, or Drawer. Do not compress long text in any language into character-by-character columns, vertical text, or one-character rows.

Avoid these triggers:

- Title block has no minimum readable width;
- Search input has fixed width and cannot wrap;
- Select / DatePicker uses `width: 100%` or `flex: 1` to occupy a whole row;
- Filters and Tabs split into unrelated rows, breaking toolbar hierarchy;
- `word-break: break-all` or `overflow-wrap: anywhere` is used on regular text;
- flex children lack `min-width: 0` and a reasonable wrapping strategy;
- Very narrow fixed-width containers carry long titles, buttons, tags, or table fields;
- Table cells use two-line text for primary / secondary information, making row height unstable.

## Collision Guard

Before implementation, reserve fixed slots and wrapping rules for collision-prone areas:

- top conversation header: avatar, title, metadata, badges, and right actions;
- tabs and local toolbar;
- side navigation selected rows, unread badges, and bottom dock entries;
- chat / list rows: avatar, title, preview, date, status, and badges;
- message cards, image previews, inline chips, and floating action buttons.

Use flex or grid areas with `min-width: 0` for text containers. Single-line labels use `white-space: nowrap; overflow: hidden; text-overflow: ellipsis`. Multiline areas need explicit line clamp, max width, or wrapping boundaries. Avoid temporary absolute offsets for badges, avatars, and titles that belong to row layout.

## Surfaces And Depth

Ordinary business cards, Hero, metric cards, quick entries, table containers, right summaries, stage pipelines, and insight panels have no shadows by default. They express hierarchy through `bg-body`, 0.5px `line-border-card`, radius, title hierarchy, and whitespace.

Shadows are only for floating layers outside document flow, such as dropdown, popover, tooltip, dialog, drawer, and floating menu. If a UD Card has a default shadow, override it to no shadow.

Regular workspaces should usually stay within two layers: page base plus content surface. Introduce light gray backing only for clear backing, nested editing areas, or floating-layer relationships. Do not use gray backing with white cards, white cards with gray blocks, gray blocks with smaller cards, or card-in-card layouts to express hierarchy. Side navigation uses a near-white neutral background, with neutral selected fill and 500 text weight, not light-blue selected fill by default.

## Interaction Conversion

- Button triggers visible actions, state changes, navigation, submit, reset, drawer, dialog, or toast.
- Tabs switch content and do more than show active styling.
- Search and filter controls update query state, visible data, or empty state.
- Drawer, Dialog, Dropdown, Popover, and Menu prefer component-provided APIs.
- Tables and lists keep expected row actions, filtering, sorting, pagination, or details entry.
- Icon-only actions need accessible names and hover / focus states.

## Static Exceptions

Static behavior is allowed when:

- The user explicitly asks for a static mock;
- The element is only decoration or information display;
- Production integration is blocked and noted in the final response;
- The source is a purely visual brand mock.

## Check Questions

- Has the page body moved away from fixed Figma coordinates?
- Does screenshot restoration have `source_viewport_contract`, and does browser preview use the target CSS viewport?
- Does the restored page feel correctly scaled at normal browser zoom based on stable source anchors?
- Does the main workspace use responsive width and fill the available space after the navigation shell?
- Is max reading width used only in local reading areas such as long-form text, forms, or detail descriptions?
- Is there about 40px of visible whitespace between first-level content groups?
- Does the title-area toolbar wrap at narrow widths?
- Is long text still readable?
- Are top bars, navigation, list rows, badges, tabs, and message cards free from visible collisions?
- Do ordinary business surfaces have no shadows?
- Has the page avoided multiple nested backgrounds, excessive accent colors, and multiple bold text layers in the same group?
- Are visible controls interactive or covered by a static exception?
