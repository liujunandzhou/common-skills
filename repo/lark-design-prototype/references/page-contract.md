# Feishu Lightweight Design Contract

Use this contract when the task comes from natural language, Figma, screenshots, or design drafts and needs a Feishu / Lark style page. The contract helps design decisions carry into implementation and prevents the page from turning into a template.

## Core Principles

- Write enough to drive implementation, and avoid unrelated fields.
- Record source evidence, visual recipe, control style strategy, media strategy, and verification focus.
- Figma / screenshot evidence has priority over cases; cases only provide inspiration and risk reminders.
- Recognizable system controls should follow UD visual language and interaction semantics first; custom areas need a clear responsibility.

## Recommended Fields

```md
source_of_truth:
scope_sketch:
source_layout_evidence:
source_viewport_contract:
scale_calibration:
product_surface:
main_user_flow:
content_fill_policy:
lark_style_recipe:
layout_model:
surface_family:
spacing_rhythm:
section_header_policy:
toolbar_policy:
top_nav_policy:
right_rail_policy:
typography_hierarchy:
emphasis_budget:
table_policy:
control_candidates:
ud_control_coverage:
layout_signature_usage:
icon_plan:
media_decision:
media_plan:
states:
responsive_plan:
case_reference:
style_boundaries:
acceptance_criteria:
verification_plan:
open_questions:
```

Small tasks can keep 5–8 key fields. Page-level, Figma / screenshot, high-fidelity, and runnable demo tasks need a more complete contract.

## Field Guide

- `source_of_truth`: User input, Figma, screenshot, design draft, existing code, or combined sources. Explain tradeoffs when sources conflict.
- `scope_sketch`: Scope sketch for natural-language tasks, including page, primary user task, main regions, key interactions, and scope boundaries.
- `source_layout_evidence`: Required for Figma / screenshot tasks. Record reading order, main regions, auto layout, padding, gap, alignment, constraints, component instances, style clues, media slots, and responsive evidence.
- `source_viewport_contract`: Required for screenshot restoration. Record source image pixels, inferred DPR, target CSS viewport, browser preview viewport, `delivery_fit_rule`, and the rule that raw screenshot pixels must not become CSS pixels. `target_css_viewport` is used for calibration and browser preview, not as a fixed app-shell size unless `delivery_fit_rule: fixed_artboard` is explicitly chosen. Normal web demos use `delivery_fit_rule: responsive_web_page` and should render at normal browser zoom in the current viewport.
- `scale_calibration`: Optional but recommended for screenshot restoration. Keep it brief: record the stable source anchors used to judge scale, the base scale decision, and whether normal browser zoom feels correct. Use anchors such as navigation width, list width, header height, avatar size, control height, message spacing, and body text size; do not rely on source pixel dimensions alone.
- `product_surface`: Product surface such as workspace, CRM, data table, AI, Docs, approval, admin console, or official site.
- `main_user_flow`: The 1–3 most important actions after the user enters the page.
- `content_fill_policy`: Use when the user does not clearly define content scope in a natural-language task. Record which core content stays, which modules are not proactively added, and the minimum sample-data count.
- `lark_style_recipe`: Lightweight visual recipe. Include surfaces, color restraint, accent-color budget, no gradients, spacing grid, radius, borders, shadows, typography weight, controls, media, visual restraint, and anti-patterns.
- `layout_model`: Document-flow structure, main columns, scroll areas, right auxiliary area, responsive main workspace width, shared content container line, responsive tracks, and floating-layer relationships.
- `surface_family`: Background relationship among page root, sidebar, content area, cards, and floating layers. body / app-root / main-workspace / main-content / right content area should prefer white or nearly white `bg-body`. One area usually keeps at most page base and content surface; avoid multiple nested background layers.
- `spacing_rhythm`: Spacing rhythm between first-level content groups, internal cards, title-to-content, and controls. Content groups default to 40px. Record page-level gap tokens such as `section_gap: 40px`, `module_gap: 16px`, `card_gap: 16–24px`, `rail_gap: 24px`, and note that quick entries use equal height within the same row, with row height determined by the tallest card in that row.
- `section_header_policy`: Record whether content section titles are external. Except for Hero, overview summary cards, small KPI cards, floating layers, navigation, and single detail cards, module titles should sit outside bordered content containers.
- `toolbar_policy`: Record placement relationships for search, filters, Tabs, view switches, and local actions. Page-level search goes by default at the leftmost position of the `top-nav` right tool group; local filters and Tabs align as a toolbar.
- `top_nav_policy`: Use when a top bar is present or shell quality matters. Record shell role, height, left identity, right utilities, divider, search placement, and whether business actions stay in the page title area.
- `right_rail_policy`: Use when a right auxiliary area is present or considered. Record necessity, role, width, surface pattern, text weight, rail groups, responsive merge behavior, and what should remain in the main flow.
- `typography_hierarchy`: Font size / weight / color for page title, module title, card title, body text, metadata, and numbers.
- `emphasis_budget`: Use when typography feels heavy or the page has forms, tables, cards, or right rails. Record which single layer may use 600 / 500 in each region, and which labels, descriptions, button text, links, metadata, and body copy stay 400.
- `table_policy`: When the page includes tables, record single-line cells, 400 body weight, long-text ellipsis / tooltip / detail handling, and stable row height.
- `control_candidates`: Needed control patterns such as Menu, Button, Input, Table, Tabs, Card, Tag, Avatar, Drawer, Dialog, and Empty.
- `ud_control_coverage`: Required for Figma / screenshot / high-fidelity tasks. Record whether visible system controls follow UD visual language, interaction semantics, states, tokens, and accessibility, and where custom code is allowed.
- `layout_signature_usage`: Record only matched framework signatures such as top-nav, side-navigation, quick-action-module, and hero-card. When top-nav or side-navigation is matched, add `shell_pattern: side-nav-primary / top-nav-primary`. Omit when not matched.
- `icon_plan`: Record when the page contains icons. Regular page UI icons choose catalog `outlined`, preferably v2 when semantically suitable. Record area-level strategy, source visual type when restoring, matched catalog `name`, description match reason, color semantic, `hash` / `darkHash`, family, visual type, and final SVG URL. Natural-language generation must match catalog descriptions by action / object / state semantics and keep the same family / type within a group. Figma / screenshot restoration must preserve source visual type: outlined, filled, or colorful. File-type identification may use File v2 colorful and must additionally record `usage: file_type_identification`, file type, shape normal / round, and consistency within the same area.
- `media_decision`: Decide which regions need illustrations, thumbnails, avatars, product images, important entry icons, or empty-state images. When Hero, welcome areas, recommended content, product entries, empty states, workspace home pages, or business summaries carry first-glance explanation, plan a visual anchor by default; if no media is used, explain why.
- `media_plan`: When media is needed, record asset source, match reason, target slot, ratio, cropping, and fallback.
- `states`: loading, empty, disabled, error, success, selected, expanded, drawer-open, dialog-open, and similar states.
- `responsive_plan`: Layout changes under standard, narrow, and compact widths, especially how the main workspace fills available space, how title area + search / filters / action buttons wrap, and where local max reading width is allowed.
- `case_reference`: Matched case, reference weight, borrowed points, and avoided points. Use `none` when no case matches.
- `style_boundaries`: Boundaries that strongly affect Feishu style, such as fewer dividers, no ordinary card shadows, left-aligned entries, and media only when needed.
- `acceptance_criteria`: User-visible acceptance criteria.
- `verification_plan`: Build, browser, breakpoint, interaction, and visual checks.
- `open_questions`: Only record questions that affect implementation.

## Figma / Screenshot Writing Pattern

```md
source_layout_evidence:
  reading_order: sidebar -> top tools -> hero -> primary list -> right summary
  layout: shell grid, content stack, optional right rail
  container_line: page title, hero, section headers, card grid and table align to one wrapper
  grid_tracks: main minmax(0, 1fr), optional rail 320-384px, rail gap 24px
  auto_layout: major modules use vertical stack; card group wraps
  components: Menu, Button, Input, Table, Tag, Avatar, custom hero media slot
  visual_signals: white workspace, light borders, 8px cards, no card shadow
  responsive: right rail merges below narrow width; toolbar wraps before title compresses

source_viewport_contract:
  source_image_px: source image dimensions
  inferred_dpr: inferred from source context and anchors
  target_css_viewport: target CSS viewport
  browser_preview_viewport: preview viewport
  delivery_fit_rule: responsive_web_page
  scale_rule: do not use raw screenshot pixels as CSS px

scale_calibration:
  source_anchors: navigation width, list width, header height, avatar size, control height, body text
  scale_basis: chosen from stable anchors, not source pixels alone
  normal_zoom_check: page should feel correctly scaled without manual browser zoom

ud_control_coverage:
- detected: primary action
  follow_ud_style: Button
  custom_allowed: false
- detected: search
  follow_ud_style: Input
  custom_allowed: false
- detected: hero composition
  follow_ud_style: Card + custom media slot
  custom_allowed: true
  reason: business composition and media placement need custom layout; inner CTA follows UD-style button styling.

layout_signature_usage:
- component: side-navigation
  shell_pattern: side-nav-primary
  signature: full-height left rail, 224-280px expanded, 38-40px left-aligned icon + label rows
- component: top-nav
  shell_pattern: top-nav-primary
  signature: 64px bg-body bar, page search at right tool group leftmost, unified 28px icon buttons

top_nav_policy:
  role: product / space identity and low-emphasis utilities
  height: 56-64px
  business_actions: page title area by default

right_rail_policy:
  role: helper rules / approval path only when useful
  width: 320-360px
  surface: plain_helper_rail or light_panel_rail
  responsive: merge below main flow at narrow width

emphasis_budget:
  page_title: one 600 layer
  section_and_labels: 500 only for titles / form labels / selected state
  body_and_actions: descriptions, helper text, button labels, links, metadata stay 400
```

## Media Writing Pattern

```md
media_decision:
- region: hero visual
  media_needed: true
  reason: welcome / summary needs a visual anchor

media_plan:
- region: hero visual
  source_order: card-illustration-library -> UD illustration -> product asset -> generated_bitmap
  library_lookup:
    searched_keywords:
    candidate_assets:
    decision: use_library / reject_library
    reject_reason:
  selected_source:
  slot_ratio:
  handling: cover / contain / transparent
  fallback:
```

Whenever illustrations, avatars, product images, entry icons, or empty-state images are needed, record `library_lookup` first. If the library has a semantically fitting and accessible asset, use the library first. Use `generated_bitmap` only when the library is unsuitable, inaccessible, or the current slot needs a more specific asset. If recommended content, product entries, or workspace home pages become only text and outlined icons, reevaluate whether a visual anchor is missing.

Generated images only create the independent visual element needed by the current media slot, such as a data visual, light illustration, avatar, product image, entry icon, empty-state graphic, or recommendation cover. Content must match the current module theme. The style should be polished, minimal, and light, and may become a local visual focus, but must not overpower the title, main content, or actions. Do not generate a full page UI, complete dashboard, navigation bar, sidebar, table page, or browser shell.

## Content Filling Pattern

When the user only gives a page direction, business name, or broad goal, start with the minimum content set.

```md
content_fill_policy:
  confidence: low
  initial_screen_budget:
    visible_content_groups: 2-3
    table_or_list_samples: 5-8
    card_samples: 3-4
    kpi_count: 0-3, only when tied to the main task
    auxiliary_regions: 0-1, only when useful
  keep:
    - product identity and primary task
    - optional Hero or primary task area
    - one main content area
    - necessary primary action
    - a small set of realistic samples
  hold_back:
    - KPI wall
    - long list
    - right-side insights
    - recommended content
    - recent visits
    - multi-level navigation
  sample_limit: only enough to show structure
```

When the user provides explicit data, a complete business flow, Figma / screenshot evidence, or specified modules, fill content according to the source. Without evidence, keep the page clean and avoid filling the canvas for a sense of completeness. The first pass may keep obvious whitespace, then expand based on user feedback.

Write `hero-card` decisions into `layout_signature_usage`. It suits welcome, task reminders, smart suggestions, CRM / sales summaries, data-insight entries, recommendations, and empty states. Table directories, settings, audits, approval details, member permissions, and strong operation forms default to no Hero.

## Section Header Pattern

Content sections default to an external header plus content container:

```md
section_header_policy:
- section: Customer List
  header: outside_surface
  surface_contains: filters + table
  exception: false
- section: Today Summary
  header: internal_allowed
  exception: overview_card
```

The external header can contain the module title, description, more entry, filter summary, view switch, or right-side tools. The content container below carries the table, list, card grid, or business surface. Do not let one border wrap both "section title + content".

## Toolbar Pattern

```md
toolbar_policy:
  page_search:
    placement: top-nav right tool group, leftmost
    scope: page/global
  local_toolbar:
    items: Tabs + filters + view switch + actions
    alignment: one row on standard width
    control_width:
      search: 280-360px when local search is required
      select: 160-220px
    narrow_behavior: filters collapse to IconButton + Dropdown / Popover / Drawer
```

Only keep search inside a content section when it has a clear local scope. Do not stretch filter controls with `width: 100%` or `flex: 1`; when space is tight, collapse filters into icon buttons instead of placing a long Select on its own row.

## Acceptance Criteria

Acceptance criteria should be judged from the user's view:

```md
acceptance_criteria:
- The first screen identifies product identity, primary task, and main content.
- Top navigation, when present, identifies product / space and low-emphasis utilities; page-level business actions stay in the page title or primary task area unless source evidence places them in the top bar.
- Right helper rail, when present, has a clear helper role, low visual weight, 320-360px standard width, and merges into the main flow at narrow width.
- Primary controls are interactive or clearly marked as static display.
- Text is not compressed at standard / narrow / compact widths, and title toolbars can wrap.
- Page title, module title, Hero, quick entry, card grid, and table left edges align to the same content container line; main gaps, padding, column widths, and offsets follow the 4px base grid.
- Page-level search sits at the leftmost position of the top-nav right tool group; filters, Tabs, and view switches align as one toolbar group.
- When top-nav / side-navigation is matched, it follows the corresponding `shell_pattern`: navigation position, background, size, selected state, collapse behavior, and search placement are not mixed.
- Ordinary business cards have no shadow, borders are light, content groups are about 40px apart, and information feels clean.
- Quick entries and lightweight recommendation entries use equal height within the same row. The parent uses `grid-auto-rows: auto`, and every card in one row takes the height of the tallest card in that row. There is no fixed height or whole-group large height causing bottom whitespace. Icon containers may use low-saturation, low-opacity blue fills.
- Table body cells are single-line; customer names, amounts, owners, times, and action links stay 400 weight, with ellipsis or detail handling for long text.
- Side navigation uses a near-white neutral background and selected state uses neutral fill plus 500 text weight, not light-blue fill or brand-blue text by default.
- Blue and other accent colors are only used for primary actions, links, focus, current state, real status, and a small amount of brand identification, not ordinary decoration or large backgrounds.
- Page UI icons come from the catalog; regular icons use `outlined`, match catalog descriptions by semantic intent, and color matches action, status, current, disabled, or emphasis semantics. File-type identification may use File v2 colorful as a whole group with the same type and same shape.
- Page UI has no gradients.
- The main workspace stretches responsively within the available space after the navigation shell; the whole `main-workspace` / `main-content` has no fixed max width.
- Default body text, descriptions, table content, and card descriptions stay 400. One information group does not have multiple bold text layers.
- Emphasis budget is visible in the result: one page-level 600 title, limited 500 labels / section titles, and 400 body, helper, button, link, and metadata text by default.
- One area usually keeps only page base and content surface. There is no gray backing with white cards, white cards with gray blocks, or gray blocks with smaller cards.
- Except for Hero, overview summary cards, small KPI cards, floating layers, navigation, and single detail cards, content sections have an external header and the title is not wrapped inside a bordered container.
- When the user request is vague, page content stays restrained: the first screen usually has only 2–3 visible content groups and does not proactively stack unrelated modules or large sample data.
- System controls in Figma / screenshots follow UD visual language, states, and semantics first.
- Hero, welcome area, recommended content, product entry, or empty state that needs a visual anchor has checked the illustration library or recorded generated-image fallback.
```

## Avoid Recording

- Implementation details that the page will not actually use;
- Directly copied raw Figma colors as implementation tokens;
- Fixed page-template order;
- Unrelated modules added only because a case has them;
- Images with no source or responsibility;
- Audit fields unrelated to the current task.
