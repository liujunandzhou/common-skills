---
version: alpha
name: Lark Design Prototype
description: A lightweight style specification for Feishu / Lark Web products. The core feel is polished, minimal, clean, tidy, low-density, and reliable: use 40px gaps between content groups, restrained content filling, light borders, rounded surfaces, UD-style controls, clear typography, and media only when needed so collaboration interfaces stay spacious, fresh, and easy to scan.

designStyleKeywords:
  advanced_clean:
    name: Polished Clean
    guidance: White or very light neutral surfaces, low noise, little decoration, and clear information order.
  spacious_precise:
    name: Spacious And Precise
    guidance: Use 40px vertical spacing between content groups by default, keep a clean 16–24px rhythm within groups, and use less content first when the request is vague.
  soft_system:
    name: Soft System Feel
    guidance: 6–10px radius, 0.5px light borders, no shadows on ordinary cards, and UD-like control states.
  quiet_intelligence:
    name: Restrained Intelligence
    guidance: AI, recommendation, and automation capabilities stay close to context and appear through light hints, local suggestions, and real visual anchors.

tokenSources:
  universeTokens: "./data/tokens/semantic.json"
  universeTokenKeys: "./data/tokens/keys.json"

embeddedTokenPolicy:
  colorPriority: P0
  colorSource: "tokenSources.universeTokens"
  keySource: "tokenSources.universeTokenKeys"
  rule: "DESIGN.md keeps only high-frequency P0 semantic colors and base visual guidance; use tokenSources for full token lookup."

fixedColorOverrides:
  sideNavigationBackground: "#f9f9f9"
  sideNavigationSelectedBackground: "#1f23290d"
  rule: "For sidebar background and selected sidebar item background, write the hex values directly during implementation. Do not look them up or remap them to color tokens, CSS variables, or theme variables."

iconSources:
  localCatalog: "./data/icons/icons.catalog.json"
  catalog: "https://lf0-fast-deliver-inner.bytedance.net/obj/eden-internal/vtlkunpzlkryhs/ljhwZthlaukjlkulzlp/chenningfeng.123/icons.catalog.json"
  svgUrlPattern: "https://cdn-tos-cn.bytedance.net/obj/archi/ee/es-design-base/svgs/{name}.{hash}.svg"
  families: ["outlined", "colorful", "filled"]
  rule: "Use references/icon-semantics.md for icon selection. Page UI icons must come from catalog retrieval, not AI-drawn shapes. Query the local catalog first, prefer v2 icons when the semantic match is strong, keep the same area consistent by family / version / shape, preserve source visual type for Figma or screenshot restoration when identifiable, and use approved brand-colorful logotypes for Feishu / Lark identity. filled is not used in regular page UI unless source evidence or an explicit source-filled strategy supports it."

colors:
  primary-content-default: "#1456f0"
  primary-content-hover: "#336df4"
  primary-content-pressed: "#0442d2"
  primary-on-primary-fill: "#ffffff"
  primary-fill-default: "#1456f0"
  primary-fill-hover: "#336df4"
  primary-fill-pressed: "#0442d2"
  function-danger-fill-default: "#f54a45"
  function-danger-fill-hover: "#ff7570"
  function-danger-fill-pressed: "#e22e28"
  function-success-fill-default: "#35bd4b"
  function-success-fill-hover: "#5cd168"
  function-success-fill-pressed: "#32a645"
  function-warning-fill-default: "#ff811a"
  function-warning-fill-hover: "#ff9d4c"
  function-warning-fill-pressed: "#ed6d0c"
  function-info-fill-default: "#1456f0"
  function-info-fill-hover: "#336df4"
  function-info-fill-pressed: "#0442d2"
  text-title: "#1f2329"
  text-caption: "#646a73"
  text-placeholder: "#8f959e"
  text-disabled: "#bbbfc4"
  text-link-normal: "#1456f0"
  text-link-hover: "#336df4"
  text-link-pressed: "#0442d2"
  text-link-disabled: "#bbbfc4"
  line-border-card: "#dee0e3"
  line-border-component: "#d0d3d6"
  line-divider-default: "#1f232926"
  bg-body: "#ffffff"
  bg-content-base: "#f8f9fa"
  bg-base: "#f2f3f5"
  bg-body-overlay: "#f5f6f7"
  bg-float: "#ffffff"
  bg-float-base: "#f2f3f5"
  bg-float-overlay: "#f5f6f7"
  bg-sub-navigation: "#f9f9f9"
  side-nav-bg: "#f9f9f9"
  side-nav-item-hover: "#1f23290a"
  side-nav-item-selected: "#1f23290d"
  side-nav-item-selected-text: "#1f2329"
  aux-side-nav-item-hover: "#1f23290a"
  aux-side-nav-item-selected: "#1f232912"
  side-nav-divider: "#1f232914"
  bg-mask: "#0000008c"
  icon-n1: "#2b2f36"
  icon-n2: "#646a73"
  icon-n3: "#8f959e"
  icon-disabled: "#bbbfc4"
  fill-hover: "#1f232914"
  fill-pressed: "#1f23291f"
  fill-active: "#1456f026"
  fill-selected: "#1456f01a"
  fill-disabled: "#bbbfc4"
  static-black: "#000000"
  static-white: "#ffffff"
  static-white-hover: "#ffffff1a"
  static-white-pressed: "#ffffff33"

colorModes:
  dark:
    primary-content-default: "#4c88ff"
    primary-content-hover: "#3370eb"
    primary-content-pressed: "#75a4ff"
    primary-on-primary-fill: "#ffffff"
    primary-fill-default: "#3370eb"
    primary-fill-hover: "#275fce"
    primary-fill-pressed: "#4c88ff"
    function-danger-fill-default: "#d14642"
    function-danger-fill-hover: "#b33a37"
    function-danger-fill-pressed: "#f05b56"
    function-success-fill-default: "#419e34"
    function-success-fill-hover: "#35872a"
    function-success-fill-pressed: "#51ba43"
    function-warning-fill-default: "#f3871b"
    function-warning-fill-hover: "#db7018"
    function-warning-fill-pressed: "#f89e44"
    function-info-fill-default: "#3370eb"
    function-info-fill-hover: "#275fce"
    function-info-fill-pressed: "#4c88ff"
    text-title: "#ebebeb"
    text-caption: "#a6a6a6"
    text-placeholder: "#757575"
    text-disabled: "#5f5f5f"
    text-link-normal: "#4c88ff"
    text-link-hover: "#3370eb"
    text-link-pressed: "#75a4ff"
    text-link-disabled: "#5f5f5f"
    line-border-card: "#ebebeb26"
    line-border-component: "#505050"
    line-divider-default: "#cfcfcf26"
    bg-body: "#1a1a1a"
    bg-content-base: "#121212"
    bg-base: "#0a0a0a"
    bg-body-overlay: "#292929"
    bg-float: "#292929"
    bg-float-base: "#1a1a1a"
    bg-float-overlay: "#373737"
    bg-sub-navigation: "#262626"
    side-nav-bg: "#262626"
    side-nav-item-hover: "#ebebeb14"
    side-nav-item-selected: "#ebebeb1f"
    side-nav-item-selected-text: "#ebebeb"
    aux-side-nav-item-hover: "#ebebeb14"
    aux-side-nav-item-selected: "#ebebeb1f"
    side-nav-divider: "#cfcfcf26"
    bg-mask: "#00000099"
    icon-n1: "#e8e8e8"
    icon-n2: "#a6a6a6"
    icon-n3: "#757575"
    icon-disabled: "#5f5f5f"
    fill-hover: "#ebebeb14"
    fill-pressed: "#ebebeb1f"
    fill-active: "#4c88ff33"
    fill-selected: "#4c88ff26"
    fill-disabled: "#5f5f5f"
    static-black: "#000000"
    static-white: "#ffffff"
    static-white-hover: "#ffffff1a"
    static-white-pressed: "#ffffff33"

typography:
  fontFamily: "LarkCircular, -apple-system, BlinkMacSystemFont, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif"
  title-0:
    fontSize: 30px
    fontWeight: 600
    lineHeight: 46px
  title-1:
    fontSize: 24px
    fontWeight: 600
    lineHeight: 36px
  title-2:
    fontSize: 20px
    fontWeight: 500
    lineHeight: 30px
  title-3:
    fontSize: 18px
    fontWeight: 500
    lineHeight: 28px
  title-4:
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  title-5:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  headline:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 22px
  body-0:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22px
  body-2:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 20px
  caption-0:
    fontSize: 12px
    fontWeight: 500
    lineHeight: 20px
  caption-1:
    fontSize: 10px
    fontWeight: 500
    lineHeight: 16px
  caption-3:
    fontSize: 10px
    fontWeight: 400
    lineHeight: 16px

radius:
  none: 0
  s: 4px
  m: 6px
  l: 8px
  xl: 10px
  xxl: 12px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 40px
  xxxl: 48px

responsive:
  breakpoints:
    compact: "<600px"
    narrow: "600px-1023px"
    standard: ">=1024px"

components:
  app-shell:
    surface: "{colors.bg-body}"
    textColor: "{colors.text-title}"
    radius: "{radius.none}"
    density: "relaxed-enterprise"
  side-navigation:
    surface: "#f9f9f9"
    surfaceGuidance: "fixed #f9f9f9, low presence, avoid obvious gray block"
    hoverFill: "{colors.side-nav-item-hover}"
    selectedFill: "#1f23290d"
    selectedText: "{colors.text-title}"
    selectedFontWeight: 500
    dividerColor: "{colors.side-nav-divider}"
    itemAlign: "left"
    itemGapY: 2px
    radius: "{radius.m}"
  primary-button:
    backgroundColor: "{colors.primary-fill-default}"
    textColor: "{colors.primary-on-primary-fill}"
    typography: "{typography.body-0}"
    radius: "{radius.m}"
  secondary-button:
    backgroundColor: "{colors.bg-body}"
    textColor: "{colors.text-title}"
    borderColor: "{colors.line-border-component}"
    typography: "{typography.body-0}"
    radius: "{radius.m}"
  icon-button:
    backgroundColor: "transparent"
    hoverBackgroundColor: "{colors.fill-hover}"
    pressedBackgroundColor: "{colors.fill-pressed}"
    iconColor: "{colors.icon-n2}"
    radius: "{radius.m}"
  content-card:
    backgroundColor: "{colors.bg-body}"
    borderColor: "{colors.line-border-card}"
    borderWidth: 0.5px
    textColor: "{colors.text-title}"
    radius: "{radius.l}"
    padding: "{spacing.lg}"
    shadow: none
  business-surface:
    backgroundColor: "{colors.bg-body}"
    borderColor: "{colors.line-border-card}"
    borderWidth: 0.5px
    radius: "{radius.l}"
    shadow: none
  data-table:
    backgroundColor: "{colors.bg-body}"
    borderColor: "{colors.line-border-card}"
    borderWidth: 0.5px
    dividerColor: "{colors.line-divider-default}"
    typography: "{typography.body-0}"
    bodyFontWeight: 400
    cellTextWrap: "nowrap"
    cellTextOverflow: "ellipsis"
  filter-bar:
    backgroundColor: "{colors.bg-body}"
    controlBorderColor: "{colors.line-border-component}"
    gap: "{spacing.md}"
  media-card:
    backgroundColor: "{colors.bg-body}"
    borderColor: "{colors.line-border-card}"
    borderWidth: 0.5px
    radius: "{radius.l}"
    mediaRadius: "{radius.l}"
    shadow: none
  floating-surface:
    backgroundColor: "{colors.bg-float}"
    nestedBackgroundColor: "{colors.bg-float-overlay}"
    radius: "{radius.l}"
  empty-state:
    backgroundColor: "{colors.bg-body}"
    textColor: "{colors.text-caption}"
    illustrationRole: "confirmed-asset-or-generated-media"
---

## Overview

Feishu / Lark style is made of a stable product feel: white or very light neutral surfaces, a clear information spine, restrained brand blue, soft radius, light borders, generous whitespace, lower information density, restrained content filling, UD-style controls, and illustrations or product images only where they matter.

Pages should feel polished, minimal, clean, tidy, and spacious. They can organize content freely based on the user input, but they must preserve the basic order of a Feishu product: readable, scannable, operable, and responsive.

### Style DNA

- **Light surfaces**: Large pages and workspaces (body / app-root / main-workspace / main-content / right content area) should prefer white or nearly white `bg-body`. The sidebar background must be written directly as `#f9f9f9`; low-emphasis shells or local backing surfaces may use near-white neutral `bg-base` / `bg-sub-navigation`. Avoid making the main content workspace an obvious gray area.
- **Fewer lines**: Borders only serve key boundaries, real controls, tables / lists, and necessary grouping.
- **Precise space**: First-level content groups use 40px vertical spacing by default; groups keep a clean 16–24px rhythm internally.
- **Less content**: When the request is not specific enough, first show product identity, primary task, one main visual or primary task area, one main content area, and a small set of samples. Keep the first pass airy and clean, and avoid actively filling the whole page.
- **Low noise**: Keep only one primary visual anchor in the same viewport. Use brand blue, functional colors, bold text, and light gray fills carefully so multiple areas do not fight for visual focus.
- **Restrained emphasis**: Blue and other accent colors only express primary actions, links, focus, current state, real status, and a small amount of brand identification. Do not use them as ordinary decoration, default icon color, tag clouds, or large-area backgrounds.
- **Quiet icons**: Regular page UI icons use outlined icons, with color chosen by semantic role. Ordinary navigation, tools, entries, table row actions, and category helpers default to neutral icon colors. Colorful icons are only for File v2 file-type identification, and icons in the same area / module stay the same type and shape.
- **No gradients**: Page UI does not use gradients. Backgrounds, Hero backing surfaces, cards, buttons, tags, icon backgrounds, borders, dividers, masks, and decorative blocks must not use gradients to express hierarchy.
- **Restrained weights**: Body text, descriptions, table content, card descriptions, button labels, and link-style text actions use 400 by default. Module titles, table headers, selected navigation, card primary text, and key numbers may use 500. Page titles or very few core headings may use 600.
- **Light shells**: Approval, settings, and detail-edit pages use compact product shells. Top bars identify product / space and low-emphasis utilities; page-level business actions usually stay in the page title or primary task area. Right helper rails stay auxiliary and quiet.
- **Soft radius**: Default controls use 6px, content cards 8px, and relaxed media or large panels 10–12px.
- **Restrained shadows**: Ordinary business cards, Hero, metric cards, quick entries, table containers, and right summaries do not use shadows. Shadows are only for floating layers.
- **UD-like controls**: Recognizable system controls follow Universe Design visual language, sizing, states, and interaction semantics in the generated React UI. Custom code handles composition, layout, and local styling.
- **Responsible media**: Illustrations, avatars, product images, and entry icons appear only when needed and must explain business meaning or state, not merely fill space. Hero, welcome areas, recommended content, product entries, empty states, workspace home pages, and business summaries that need first-glance intent should first evaluate whether a visual anchor is needed; when matched, check the illustration library first. Dense data pages, settings pages, audit pages, and table-first flows can use no imagery at all.

## Subdocument Boundaries

`DESIGN.md` keeps only cross-page, high-impact, long-term stable visual rules. Read finer references only when needed:

- Color roles: `references/color-roles.md`
- Token, radius, spacing, and shadow semantics: `references/token-semantics.md`
- Icon selection and style: `references/icon-semantics.md`
- Control mapping and UD-style coverage: `references/component-selection.md`
- Figma / screenshot to responsive layout: `references/layout-interaction.md`
- Visual brief: `references/visual-brief.md`
- Form shells, top navigation, right helper rails, and emphasis budgets: `references/form-shell-patterns.md`
- Media and generated-image style: `references/assets/card-illustration-library.md`, `references/visual-style-prompts.md`
- Case-based inspiration: `references/case-matching.md` and `references/cases/*.md`
- High-fidelity restoration risks: `references/restoration-traps.md`
- Delivery check: `references/design-quality-checklist.md`

Cases and framework signatures are only decision aids. User input, Figma / screenshot evidence, the primary product task, and a reasonable current-page composition take priority.

## Color

Use colors by role, not taste.

- Primary filled actions use `primary-fill-default`; a local area usually has only one primary filled action.
- Except for primary actions, links, focus, current state, real status, and a small amount of brand identification, keep color restrained. Do not let primary hue or over-saturated colors steal visual focus.
- Brand blue is not used for ordinary card backgrounds, decorative lines, default icon matrices, category tags, large KPI emphasis, or entries without state meaning. Avatars, icon backgrounds, decorative blocks, large backgrounds, and auxiliary entries prefer neutral or low-saturation colors.
- Within one content group, usually use only one accent color except for real status colors. Category tags, ordinary states, weak recommendations, entry icon backgrounds, KPI containers, and avatars prefer neutral or low-saturation schemes.
- Icon containers in quick entries, recommended content, and product entries may use low-saturation, low-opacity blue fills such as `rgba(20, 86, 240, 0.06–0.10)`. This only supports the icon and does not carry state or category. Current items, primary actions, and real statuses still use semantic colors.
- The first-screen accent-color budget usually contains only one primary filled button, one current state, and necessary real-status feedback. Do not simultaneously use blue, success, warning, and danger colors to distinguish ordinary entries, cards, KPIs, or decorative elements.
- Blue text, linear icons, links, and selected states use `primary-content-default` or link tokens.
- Primary text uses `text-title`; descriptions, metadata, and weak hints use `text-caption` or `text-placeholder`.
- Content cards, tables, and key container borders use `line-border-card`; control boundaries use `line-border-component`.
- Large pages and workspaces (body / app-root / main-workspace / main-content / right content area) should prefer white or nearly white `bg-body`. The sidebar background must be written directly as `#f9f9f9`; low-emphasis shells or local backing surfaces may use near-white neutral `bg-sub-navigation` / `bg-base`, stay low-presence, and avoid forming obvious gray blocks. Do not use a light-gray large background under the whole main content and then stack white cards to create hierarchy.
- The main side navigation background must be written directly as `#f9f9f9`; hover uses a light neutral fill; the current item background must be written directly as `#1f23290d`; current item text uses neutral body color and 500 weight. Auxiliary sidebars under top primary navigation use the same fixed values if they function as navigation. Sidebar selected states do not use light-blue fills or brand-blue text by default unless the product clearly uses blue navigation as an identity anchor.
- Status colors only express real semantics: danger, success, warning, and information. Category tags prefer neutral or component-provided styles.
- Icon color follows role: default icons use `icon-n2`, current or high-emphasis icons use `icon-n1`, low-emphasis icons use `icon-n3`, and disabled icons use `icon-disabled`; only primary actions, links, focus, current state, destructive actions, and real statuses use the corresponding semantic colors.

Do not use gradients in page UI, including `linear-gradient`, `radial-gradient`, `conic-gradient`, gradient image masks, gradient borders, or gradient decorative blocks. Avoid colored borders as a general pattern, brand blue as default body text, large blue fills on ordinary cards, all-blue default icon matrices, and functional colors as default category tags.

## Typography

The default reading spec is 14px / 22px / 400. Button labels and link-style text actions use 14px / 22px / 400 by default. Emphasized rows and active labels use 14px / 22px / 500. Auxiliary text uses 12px / 20px / 400.

Keep heading hierarchy restrained:

- Page-level title: 24–30px, 600, for page identity or strong opening.
- Large section title: 16–20px, 500.
- Module title: 16px / 24px / 500.
- Card title and primary list text: 14px / 22px / 500.
- Table body: 14px / 22px / 400; table headers may use 12–14px / 20–22px / 500.
- Metadata and descriptions: 12px / 20px / 400.

Do not enlarge or bold everything to create a "premium" feel. Enterprise-product polish usually comes from alignment, whitespace, information hierarchy, and real component states.

Font weight serves hierarchy, not decoration. Body text, descriptions, table content, card descriptions, and button labels stay 400 by default. Module titles, table headers, selected navigation, card primary text, and a small number of key numbers usually use 500. 600 is only for page titles, Hero main titles, or very few core headings. Within one information group, usually emphasize only one primary text. Do not bold titles, numbers, tags, descriptions, and list rows all at the same time. Table body especially stays 400; customer names, object names, amounts, owners, times, and action links are not bold.

Action text uses regular weight by default. Primary buttons, secondary buttons, text buttons, section-header text actions, card-footer text actions, right-rail helper links, table-row action links, and inline text actions stay at 400 unless the source design clearly proves a stronger emphasis. Filled buttons express priority through fill color, size, and placement; text actions such as "查看全部", "了解能力", "View all", and "Learn more" express clickability through link color, placement, hover state, and concise wording.

For form, approval, settings, and detail-edit pages, write an explicit emphasis budget before implementation when typography affects quality. The default budget is: one page title at 600; section titles, form labels, selected navigation, and approval step owners at 500; descriptions, helper text, input values, button labels, links, metadata, bullet bodies, and approval step descriptions at 400. One local information group usually has only one 500-weight layer.

## Layout

### Spacing System

The base unit is 4px. All layouts should align to the 4px base grid. Dimensions, spacing, radius, and container offsets should not use random values. Common rhythm:

- 4px: icon-to-text and tag internals;
- 8px: compact control internals and inline binding;
- 12px: icon groups, auxiliary descriptions, and local binding;
- 16px: title-to-content, filters, same-group card grids;
- 24px: card padding, left-right columns, large side-by-side blocks;
- 40px: between first-level content groups;
- 48px: strong separation for first screens or relaxed onboarding.

Feishu style uses large spacing to separate modules and reduces unnecessary dividers. First-level content groups use 40px by default; groups keep 16–24px internally to stay clean. Only local structures such as table rows, menu items, and tag groups use tight 4–12px spacing.

In implementation, write grids as page-level variables or reusable constants instead of hand-writing different values in every module. Recommended values: `--page-x: 32–40px / 24px / 16px`, `--section-gap: 40px`, `--module-gap: 16px`, `--card-gap: 16px or 24px`, `--rail-gap: 24px`. Except for font line-height, 0.5px borders, and optical icon corrections, layout values should sit on the 4px grid.

### Grid And Containers

- Main content uses responsive containers, not copied Figma canvas coordinates.
- Work pages prefer a vertical main spine. Left-right columns are only for main content plus clearly defined auxiliary information.
- The main workspace uses responsive width and fills the available space after the navigation shell. `main-workspace`, `main-content`, and the right content area use `width: 100%`, responsive page margins, grid / flex / minmax, and breakpoints.
- Max reading width is only for local reading content such as long-form text, settings forms, and detail descriptions. Workspaces, tables, boards, CRM, admin pages, and data pages must not apply a fixed `max-width` to the whole main workspace.
- At standard width, the main content container usually uses 32–40px horizontal page margins; `narrow` uses 24px; `compact` uses 16px. Content stacks, module headers, card grids, and table left edges should align to the same container line.
- The page main spine uses one content container line. Page title, module title, Hero, quick entry, card grid, table container, and right rail inherit padding from the same wrapper. Do not use a single module's `margin-left`, temporary `width`, or offset value to force alignment.
- A right auxiliary rail appears only when the primary task needs it. Common width is 320–384px, with a 24px gap from the main content. Do not add a right rail just to fill a wide screen.
- In forms and detail pages, the right rail uses `plain_helper_rail`, `light_panel_rail`, or `drawer_on_demand`. It explains rules, approval flow, permission risk, or contextual help, and should not compete with the main form through strong borders, shadows, large titles, bold body text, or stacked cards.
- Responsive columns use stable tracks. Common main column: `minmax(0, 1fr)`, right auxiliary rail: `320–384px`, column gap: 24px. At `narrow`, the right rail merges into the main content flow; at `compact`, use a single column.
- Card grids use stable column width and fixed gap. Common entry cards or summary cards may use `repeat(auto-fit, minmax(240px, 1fr))` or equivalent responsive column tracks, with 16–24px gap. Ordinary content cards prefer `align-items: start`; quick entries, app entries, and lightweight recommendation entries use equal height within the same row: `grid-auto-rows: auto`, allowing cards in one row to stretch to the tallest card in that row. Hover, selected, loading text, and dynamic numbers must not change card height, column width, or the overall layout.
- Inside one module, use a card grid, table, or list. Avoid horizontally stitching modules with different responsibilities. A single card or summary block should carry one main conclusion and a small amount of supporting information.
- When the natural-language request does not specify module count, data volume, or a complete business flow, keep the page lightweight: the first screen prefers 1 main visual or primary task area, 1 main content area, and at most 1 auxiliary area; overall it usually has only 2–3 visible content groups. Table / list samples stay within 5–8 rows, card samples stay within 3–4 items, and KPIs appear only when the primary task needs them, with 1–3 items. When the scene needs welcome, task reminders, smart suggestions, high-value summaries, or empty-state guidance, the main visual can use `hero-card`.
- Do not proactively add a KPI wall, long list, right-side insights, recommended content, recent visits, quick entries, or multi-level navigation to make the page look complete. Add them only when the user goal, source evidence, or primary product task needs them. In the first pass, clear whitespace is preferable to unfounded content.
- First-level content sections use an external section header by default. The title sits above the bordered content container and contains the module title, optional description, and right-side tools. The table, list, card grid, or business surface sits below. Hero, floating layers, navigation, and a single detail card may be exceptions.
- Page-level search goes by default at the leftmost position of the `top-nav` right tool group. Content sections only keep search with a clearly local scope, such as searching the current table or current list.
- Filters, Tabs, view switches, and local actions should align as one toolbar group. At standard width, the toolbar stays on one row. Select / DatePicker uses content-sized widths, usually 160–220px; do not set `width: 100%` or `flex: 1` to stretch filters across the full row.
- When a module header contains filters, Select, Tabs, or action buttons, it should wrap or switch to a vertical layout at narrow widths, never compress title or button text into one-character columns. When space is tight, filters first collapse into an icon button, Dropdown, Popover, or Drawer rather than using a full-row long selector.
- Non-table long text needs a readable width, end ellipsis, a two-line limit, or earlier breakpoint wrapping. Avoid `word-break: break-all` and very narrow fixed widths. Tables follow the table-specific single-line rule.

### Shell Patterns

First determine which navigation owns the main frame, then design the top bar, sidebar, and content area. Do not mix the visual rules of two shell patterns.

#### side-nav-primary

Suitable for CRM, workspaces, back-office systems, admin consoles, data lists, and products where a left primary entry rail carries persistent navigation.

- Side navigation is the main app anchor and usually starts at the page top edge with `100vh` height.
- At standard width, the sidebar is expanded by default and is usually 224–280px wide. Use 280px when the information architecture is richer; compact back-office products can use 224–240px.
- The right workspace still prefers `bg-body`. Content is centered within the available workspace and uses 40px content-group spacing, title areas, and 0.5px light borders for hierarchy.
- Do not force the right main content to get a large rounded shell, 8px shell offset, or extra backing layer just because the page uses primary side navigation.

#### top-nav-primary

Suitable for Docs, tables, knowledge bases, collaboration spaces, canvases, AI assistants, and products where the top bar carries global identity and tool entry points.

- Top navigation spans `100vw`, is usually 64px high, uses a `bg-body` surface, and has a 0.5px `line-divider-default` or equally weak bottom divider.
- Page main content starts below the top bar, and the background continues to use `bg-body`. Use cards, tables, lists, panels, or `bg-body-overlay` only when local hierarchy is needed. Do not wrap the page in an extra page-level rounded shell.
- If there is still a sidebar under the top primary navigation, it is auxiliary navigation: it starts below the top bar, has height `calc(100vh - 64px)`, is usually 280px wide, uses `bg-body`, and is separated from content by a 0.5px vertical divider.
- The menu / collapse control on the top left controls the auxiliary sidebar. At compact widths, it can switch to a drawer or explicit entry.

### Whitespace Philosophy

Space expresses hierarchy. Use 40px large spacing between content groups and a clean 16–24px rhythm inside modules. Dividers are only for table / list rows, table headers, navigation boundaries, complex form groups, permission / audit information, floating-layer boundaries, and necessary information grouping.

If most modules in the same viewport have full frames, the page feels heavy. Prefer whitespace, titles, white surfaces, light fills, and hover states to distinguish modules.

The standard section structure is "header area + content container". The header area and content container usually keep 12–16px spacing; content groups still keep about 40px. Borders only wrap the real content container, not the section title.

Surface hierarchy starts from `bg-body`. One area usually keeps at most two layers: page base and content surface. Introduce `bg-body-overlay` / `bg-base` only for clear backing, nested editing areas, or floating-layer relationships. Avoid gray backing with white cards, white cards with gray blocks, gray blocks with smaller cards, card-in-card layouts, and full-page walls of cards. When content needs subdivision, prefer headings, whitespace, row structure, light dividers, or hover / selected states.

## Responsive Behavior

Handle responsiveness by viewport and information density:

| Name | Width | Handling |
| --- | --- | --- |
| compact | `<600px` | Single-column content flow; sidebar becomes an explicit entry; complex filters collapse; tables keep key columns and a details entry. |
| narrow | `600px-1023px` | Reduce multi-column count; right auxiliary rail merges into the main flow; header and tool areas may wrap or stack. |
| standard | `>=1024px` | Keep the full shell, multi-column content, and necessary right auxiliary area; the main workspace fills available space, using local max reading width only for long-form text, forms, and detail descriptions. |

Sidebar, top bar, tables, filters, drawers, and dialogs must stay usable. When the responsive layout shrinks, protect the current page identity, primary action, and main content first. Do not collapse navigation into an unlabeled or hard-to-understand state.

## Controls

### UD-Style System Controls

Buttons, inputs, form controls, tables, tabs, tags, menus, dropdowns, popovers, drawers, dialogs, empty states, uploads, pagination, and feedback controls follow Universe Design visual language and state behavior.

Entries in control planning describe visual responsibility. Reproduce UD-like appearance, state behavior, and accessibility semantics in React. Page-generated icons use `iconSources.catalog` `description`, `name`, and `hash` to choose semantically close icons and assemble SVG URLs.

### Custom Areas

Custom areas are allowed for:

- page shells, responsive grids, and business composition containers;
- media slots, image cropping, and illustration placement;
- composite business cards not directly covered by UD;
- local sizes, spacing, and states needed to match Figma / screenshot sources.

Inside custom areas, Button, Input, Tag, Avatar, Dropdown, Tabs, Table, Drawer, Dialog, and similar controls should still follow UD visual language, sizing, and state behavior.

### Tables

Tables are for efficient scanning and comparison. Row information must be light, stable, and single-line.

- Table body cells show one line by default: `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`. Do not stack "primary title + subtitle", "customer name + industry", "time + note", or similar two-line structures in the same cell.
- When auxiliary information is needed, prefer separate columns, hover tooltip, right-side detail drawer, or row detail. Do not squeeze it into a second line inside the cell.
- Table body uses 14px / 22px / 400; table headers may use 12–14px / 20–22px / 500. Row customer names, object names, amounts, owners, times, and action links all stay 400, preventing the table from turning into a bold list.
- Status Tags, Badges, and progress bars express state by component semantics and may use component-default weight; they must not make other text in the same row bold.
- Table row height stays stable. Recommended regular row height is 48–56px. Hover, selected, loading, edit state, and long-text ellipsis must not change row height.

### Framework Signatures

Use these style signatures only when the page truly needs the corresponding framework:

#### top-nav

- Suitable for global product identity, space name, tool button group (search, notification, help, settings), and avatar in Feishu / tool / information products.
- Surface uses white or `bg-body`, with an optional 0.5px light boundary at the bottom; normal height is 56–64px, and `top-nav-primary` tends to use 64px.
- Left side expresses current product, space, page identity, or collapse control; right side carries search, refresh, export, notifications, help, settings, avatar, and similar tool buttons.
- Page-level search goes at the leftmost position of the right tool button group. Standard width can use a 280–360px search input; tight space or many tools should use a 28px icon button. Do not show both a search input and a search icon button in the same top bar.
- Right tool icon buttons use one size: 28px container + 20px linear icon. Dense toolbars may use 18px icons, but the same group must be consistent. Avatar entry is usually 32px.
- Tool icons use `outlined` SVG from `iconSources.catalog`, matched by catalog description and exact action semantics. Keep one outlined style within the same tool group, and avoid text characters, punctuation, or emoji as icons for search, refresh, more, collapse, create, notification, and similar actions.
- Tool group horizontal rhythm is usually 36px; use 16px gap or a 0.5px vertical divider at meaning changes.
- The top bar does not carry a large business primary CTA. Create-type primary buttons fit better in the page title area, Hero, or primary task area, unless user input or source evidence clearly places it in the top tool group.
- Form and approval pages should avoid repeating the page title in the top bar. The top bar identifies the product, space, or workflow center; the page header identifies the current task.
- Top-nav text entries such as help, records, and settings default to 14px / 22px / 400. Use 500 only for the current entry or proven active state.

#### side-navigation

- Suitable for stable primary entries, space switching, or long-running workflows.
- Sidebar background must be written directly as `#f9f9f9`, stay low-presence, and not look like an obvious gray block. During implementation, write the hex value directly and do not call `side-nav-bg`, `bg-sub-navigation`, or any other color token. Auxiliary sidebars under `top-nav-primary` use `#f9f9f9` if they function as navigation; if they only support content, they can use `bg-body` and a 0.5px vertical divider.
- Standard expanded width is usually 224–280px. Full product navigation prefers 280px, while compact back-office products can use 224–240px. Collapsed width is 64–72px and keeps only items with clear icon semantics.
- The top brand / space area is usually 56–64px high. Without search or a top CTA, the first navigation group starts right below the title area and does not add large extra whitespace.
- Menu items are left-aligned with an icon + label structure. Default row height is 38–40px, radius 6px, horizontal padding 8px, icon size 18–24px, and icon-to-label gap 10–12px.
- Within the same navigation group, keep 2px vertical spacing between items. Hover / selected background blocks must not touch vertically, and increased row height must not replace this spacing.
- Text defaults to 14px / 22px / 400; selected items use 14px / 22px / 500. Default icons use `icon-n2`; important current items may rise to `icon-n1`.
- Hover uses a lighter neutral fill, with neutral text and icons, and must not look like a second selected state. Current item background must be written directly as `#1f23290d`; selected item text uses 500 weight and neutral body color. During implementation, write the hex value directly and do not call `side-nav-item-selected` or selected-state color tokens. Only when the product clearly uses blue navigation as its primary identity may it use light-blue selected fill and brand-blue text.
- Keep only one primary current item in the same sidebar at the same time. Multiple selected groups weaken page-location clarity.
- Group headings are about 28px high, left-indented 8px, text 12px / 20px / 400, and color `text-placeholder`. Only the second and later groups need group headings. When needed, group gaps may use a 0.5px `side-nav-divider` with about 8px before and after the divider.
- Do not place centered Button components in the sidebar. If a create entry must appear in the sidebar, style it as a normal navigation row or entry row. Global primary actions belong in the page title area, Hero, or primary task area.
- Collapsed state must not compress text navigation into initials, single characters, or meaningless abbreviations. Items without clear icon semantics should be hidden, moved into a menu, or become a drawer on mobile.

#### quick-action-module

- Suitable for short paths into objects, apps, workflows, imports, approvals, generation, or sync.
- Entries prefer Card / List row semantics and horizontal left alignment: icon on the left, title and description on the right.
- Icon containers are usually 36–40px with about 8px radius. By default, they may use low-saturation, low-opacity blue fills; icons use small-area semantic colors such as `icon-n1` / `primary-content-default`. Do not turn the whole entry group into high-saturation color blocks.
- Card height is determined by content within the same row. Regular quick entries use 16px vertical padding and 20–24px horizontal padding; the grid parent uses `grid-auto-rows: auto` and may use `align-items: stretch` or card `height: 100%` so all entries in the same row take the height of that row's tallest card. Do not set fixed `height`, excessive `min-height`, `aspect-ratio`, `grid-auto-rows: 1fr`, `grid-auto-rows: minmax(...)`, `place-items: center`, or fixed height classes such as `h-24 / h-28 / h-32`. Description text is capped at 2 lines, and real content line-height shapes the card; short-copy cards only follow the tallest card in the same row and do not create extra bottom whitespace on their own.
- Title: 14px / 22px / 500. Description: 12–14px / 20–22px / 400. Short descriptions stay one line; long descriptions use up to 2 lines with ellipsis.
- Do not replace quick entry cards with outline Buttons or centered button groups.

#### hero-card

Suitable for opening welcomes, key task reminders, smart suggestions, high-value summaries, empty-state guidance, and proposal first screens. `hero-card` usually occupies one row. Workspaces, portals, home pages, launch pages, AI assistants, CRM / sales summaries, data-insight entries, and recommendation scenes can actively introduce `hero-card` based on the primary task to help users understand the page at first glance. Table directories, settings, audits, approval details, member permissions, and strong operation forms default to a title area + tool area opening unless user input, Figma / screenshot, or empty-state evidence clearly requires Hero.

Hero should feel like an in-product workspace opening, not a marketing first screen. Title is usually 24px / 36px / 600, description 14px / 22px / 400, up to 2 lines. Content area: left text container width 368px, left padding 40px. Keep copy concise: one main message, one description, and 1–2 actions. Do not make Hero carry a KPI wall, long list, or multiple recommendation groups. Hero does not force an illustration every time, but welcome, personal greeting, smart suggestion, business summary, sales growth, data insight, recommendation, and empty-state Hero scenes need a visual anchor by default. When a visual anchor is needed, write `media_decision` and `media_plan`, then first read `references/assets/card-illustration-library.md` to match an asset. When the library has no suitable asset, generate a bitmap according to the generated-media fallback rules or use another accessible asset.

## Iteration Guidelines

Add only high-impact guardrails: surfaces, whitespace, borders, radius, typography, UD-style controls, media responsibility, responsive behavior, and text safety. Leave one-off business details to the current task. After editing, check that the main entry, reference map, token data, and quality checklist still align with each other.

## Known Gaps

The following topics currently keep only lightweight boundaries and should expand only when official materials or stable samples are available: motion, elevation, complex responsiveness, copy tone, and a complete media asset system.

## Do And Avoid

Do:

- Use UD-style controls and semantic tokens;
- Make pages look like real Feishu product surfaces;
- Use large whitespace and module titles to reduce unnecessary dividers;
- Use 0.5px light borders and no shadows on ordinary business cards;
- Left-align entries, navigation, lists, and summaries by default;
- Look for existing assets before considering generated imagery when images are needed;
- Respect source section order, density, and component evidence in Figma / screenshot restoration;
- Preserve the model's freedom to organize content based on the task.

Avoid:

- Treating cases as fixed page templates;
- Adding top navigation, sidebar, quick entries, or Hero just to fit a framework when the user did not ask for them;
- Rendering standard controls such as Button, Input, Table, Menu, Tabs, Drawer, or Dialog as unstyled ordinary elements;
- Using heavy gray backgrounds, strong shadows, or excessive borders to create hierarchy;
- Using blue or other accent colors to decorate ordinary cards, icon matrices, category tags, KPIs, or large-area backgrounds;
- Using gradients in page UI;
- Using filled icons without source evidence or an explicit `source-filled` strategy, or using AI-drawn icons, emoji, text characters, CSS / canvas drawing, hand-written SVG, or third-party icon libraries instead of catalog-retrieved icons in page UI;
- Using colorful as ordinary decoration, or mixing icon family / version / shape within the same explicit area;
- Applying a fixed max width to the whole main workspace on workspaces, tables, boards, CRM, admin pages, or data pages, causing abnormal whitespace or cramped content on wide screens;
- Making multiple layers of text bold in the same list, table, card, or navigation group;
- Making button labels or link-style text actions such as "查看全部" or "了解能力" bold by default;
- Creating hierarchy with gray backing plus white cards, white cards plus gray blocks, or gray blocks plus smaller cards;
- Using high-saturation colors for top-nav avatars, table avatars, and member avatars, creating noise;
- Stacking two lines of text inside table cells, or using bold body text in tables;
- Centering quick entries, app entries, or navigation items as a whole;
- Treating illustrations as decorative corner marks or gray placeholders;
- Generating a full page UI as a Hero image;
- Nesting cards inside cards, or turning the whole page into a wall of cards;
- Using random spacing, random column widths, or temporary sizes off the 4px grid.
