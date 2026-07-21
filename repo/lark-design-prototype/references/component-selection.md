# Control Selection

Use this reference to map prompts, Figma, screenshots, or product workflows into a Feishu / Lark control and layout structure. The goal is to preserve a native UD feel while still leaving room for page composition.

## Decision Flow

1. Split regions: shell, navigation, title area, toolbar, main content, auxiliary area, floating layer, feedback.
2. Identify semantics: button, entry, navigation, list, table, filter, status, avatar, media, empty state.
3. Recognizable system controls follow UD visual language first: Button, Input, Select, DatePicker, Checkbox, Radio, Switch, Tabs, Table, Menu, Dropdown, Tooltip, Popover, Drawer, Dialog, Tag, Badge, Avatar, Empty, Skeleton, Pagination.
4. When the UD default visual does not fully match the source, first adapt with tokens, size, outer layout, class, and local CSS.
5. Only customize when normal UD-style control patterns cannot satisfy source evidence, and record the reason. In that case, reproduce interaction semantics, tokens, states, and accessibility with native structure.
6. Write `control_candidates`, `ud_control_coverage`, and the necessary `layout_signature_usage`.

## UD-Style Objects

- Actions: Button, IconButton, Dropdown, Tooltip, Popover.
- Forms: Input, TextArea, Select, DatePicker, Checkbox, Radio, Switch, Upload.
- Data and navigation: Table, Pagination, Tabs, Menu, Breadcrumb, List row pattern.
- Floating layers and feedback: Drawer, Dialog, Popconfirm, Empty, Skeleton, Loading.
- Status and identity: Tag, Badge, Avatar, Progress, Timeline.

## Objects That Can Be Custom

- Page shell, responsive grid, and module spacing;
- Business composition containers, such as welcome areas, business summaries, recommendation cards, and entry groups;
- Media slots, image cropping, and illustration placement;
- Composite business cards that UD does not directly cover.

Inside custom compositions, buttons, inputs, tags, avatars, dropdowns, tabs, tables, drawers, and dialogs still follow UD-style sizing, states, and semantics.

## Content Section Titles

Except for Hero, floating layers, navigation, and single detail cards, content sections default to an external header plus a content container. Module titles, descriptions, filter entries, more actions, and view switches sit above the content container. Bordered Card, Table, List, or business surfaces only wrap the real content.

Do not put section titles such as "Customer List", "Quick Entry", "Recommended Content", "Recent Activity", or "Related Apps" inside the card border. Repeated cards can have their own card titles, but those titles do not replace the section title.

## Common Semantic Mapping

| User Intent | Preferred Choice | Notes |
| --- | --- | --- |
| Submit, confirm, create, save, delete, filter | Button / IconButton | These are command actions. |
| Enter an object, app, workflow, or recommended content | Card / List row pattern | The whole card can be clickable and is styled as an entry card. |
| Data list, approval, members, logs | Table / List + Tag + Dropdown | Table cells stay single-line and 400 weight; avoid stacking primary and secondary information in one cell. |
| Search and filter | Input / Select / DatePicker / Button / IconButton / Dropdown / Popover | Page-level search goes to the leftmost position of the top-nav right tool group; local filters and Tabs form one toolbar, and filter controls do not stretch full row. |
| Navigation | Menu / Tabs / Breadcrumb | Current location must be clear. |
| Detail and edit | Drawer / Dialog / Form | Drawer suits contextual tasks; Dialog suits blocking decisions. |
| Empty result | Empty + Button / Illustration | Explain the state and next step. |
| Status, category, priority | Tag / Badge | Functional colors are only for real statuses. |
| Avatar and identity | Avatar / Badge | Do not use avatars with no source. |
| Hero, recommendation, welcome, product entry | Card / custom media slot + UD-style child controls | Media appears only when needed, and the source must be clear. |

## Entry Cards And Recommendation Cards

Quick entries, app entries, and lightweight recommendation entries use equal-height cards within the same row. The common structure is a 36–40px icon container on the left and title / description on the right. Cards use 16px vertical padding and 20–24px horizontal padding. The parent card grid uses `grid-auto-rows: auto` and may use `align-items: stretch` or card `height: 100%`, so cards in the same row take the height of the tallest card in that row. Do not write fixed `height`, large `min-height`, `aspect-ratio`, `grid-auto-rows: 1fr`, `grid-auto-rows: minmax(...)`, `place-items: center`, or fixed height classes such as `h-24 / h-28 / h-32` to unify entry heights. Descriptions use up to 2 lines, and line-height is shaped by real content; short-copy entries only follow the tallest card in the same row and do not create extra bottom whitespace.

Icon containers may use low-saturation, low-opacity blue fills such as `rgba(20, 86, 240, 0.06–0.10)`, with icons staying small-area semantic colors. This background only provides light support and is not a status category; keep one background strategy across the same entry group.

When recommended content carries discovery, learning, template, project material, knowledge accumulation, or product-entry responsibilities, first decide whether it needs a thumbnail, light illustration, product image, or File v2 file icon. A group of recommendation cards with only title and description can look flat, so prefer a responsible media slot; use light icon cards only when there is no media responsibility.

## Framework Signature Usage

top-nav, side-navigation, quick-action-module, and hero-card are used only when the page truly needs them. When matched, record:

```md
layout_signature_usage:
- component: side-navigation
  reason: the page needs persistently visible primary entries
  shell_pattern: side-nav-primary
  signature: fixed #f9f9f9 rail, left-aligned icon + label items, #1f23290d selected state
  freedom: width, nav item count and grouping follow current information architecture
```

Framework signatures constrain role, alignment, state, and style boundaries. Module order, business content, quantity, proportion, and illustration form are decided by the current task.

`hero-card` can be actively matched by scene: use it for workspaces, portals, home pages, launch pages, AI assistants, CRM / sales summaries, data-insight entries, recommendations, and empty states when the first glance needs to explain page intent. Table directories, settings, audits, approval details, member permissions, and strong operation forms default to a title area + tool area opening.

## Shell Pattern Decision

When a page needs a navigation shell, choose one primary mode first:

- `side-nav-primary`: The left rail is the main app anchor. Suitable for CRM, back-office systems, admin consoles, workspaces, and data lists. The sidebar is usually 224–280px and expanded at standard width; collapsed width is 64–72px. The sidebar background must be written directly as `#f9f9f9`, and the selected item background directly as `#1f23290d`; use hex values directly in implementation and do not call color tokens. The right workspace continues to use white or nearly white `bg-body` and a responsive content container. Do not force an extra page-level large rounded content shell or light-gray backing layer.
- `top-nav-primary`: The top bar is the main app anchor. Suitable for Docs, tables, knowledge bases, collaboration spaces, AI assistants, and canvases. The top bar is usually 64px, with a right tool group containing page-level search, tool icons, and avatar. If a sidebar exists, it is an auxiliary sidebar below the top bar, usually using `bg-body` and a 0.5px vertical divider.

When `top-nav` is matched, page-level search goes at the leftmost position of the top bar right tool group. Standard width can use a search input; tight space uses a search icon button. Do not duplicate both search entries in the same top bar.

When `side-navigation` is matched, navigation rows use left-aligned icon + label structure and do not use centered Button styling. The main sidebar uses fixed `#f9f9f9` and stays low-presence; current uses fixed `#1f23290d`; selected item text uses 500 weight. Use blue selected state only when the product clearly uses blue navigation as its primary identity. Items in the same navigation group keep 2px vertical spacing so selected or hover blocks do not touch.

Navigation, lists, tables, and entry cards use font weight only to emphasize current location or primary text. Unselected navigation, auxiliary descriptions, metadata, and table body text default to 400; selected navigation, module titles, table headers, buttons, and key numbers may use 500. Blue and other accent colors are only for primary actions, links, focus, current state, real status, and a small amount of brand identification. They are not used for ordinary card backgrounds, decorative lines, icon matrices, category tags, large KPI emphasis, or entries without state meaning.

Regular page UI icons use catalog `outlined`, preferably v2 when semantically suitable, and match catalog descriptions by semantic intent. Navigation, toolbars, entry cards, table row actions, category helpers, and ordinary object types use outlined icons, with color chosen from `icon-n1` / `icon-n2` / `icon-n3` / `icon-disabled` or real operation status. Do not use filled icons, emoji, characters, or hand-written SVG for regular UI without source evidence. File lists, recent documents, attachment lists, document cards, and file directories can use File v2 colorful as a group. Screenshot / Figma restoration should preserve the identified source visual type: outlined, filled, or colorful. Brand positions may use approved Feishu / Lark logotypes. Icons in the same explicit area must stay consistent by family, version, and shape.

## Alignment Principles

In work pages, navigation items, quick entries, app entries, recommendation entries, list rows, and right-side summary rows default to left alignment. Icon + title + description structures use horizontal left alignment. Centering only suits icon buttons, avatars, logos, pure numeric small pills, empty-state illustrations, and clearly display-oriented visuals.

## Toolbar Rules

Page-level search goes by default at the leftmost position of the `top-nav` right tool button group. Search inside a content section only works on local data in the current table, list, or board and does not act as global search.

Filters, Tabs, view switches, and local actions should align as one toolbar group. At standard width, search inputs are usually 280–360px, Select / DatePicker usually 160–220px, and they must not use `flex: 1` or `width: 100%` to stretch across the row. When space is tight, filters collapse into IconButton + Dropdown / Popover / Drawer. Tabs stay readable and may become a Dropdown or horizontal scroll when needed.

## Media Principles

Plan media by responsibility. Welcome, Hero, recommended content, product entries, empty states, workspace home pages, avatars, product images, and important entry icons need an initial visual-anchor decision. If the region establishes page intent, explains state, carries recommendations, or displays product objects, plan a media slot by default.

Asset order:

1. `card-illustration-library.md`
2. UD illustrations / user-provided outlined icon manifest
3. Product assets or user-provided images
4. `generated_bitmap`

Whenever media is planned, first read `card-illustration-library.md` and write `library_lookup`. If the library already matches semantically and is accessible, do not generate imagery. Generated imagery only creates an independent visual element inside the media slot. It must match the current module theme and feel polished, minimal, and light. It may become a local visual focus, but must not look heavy.

## Fallback Writing Pattern

```md
ud_control_coverage:
- detected: customer list
  follow_ud_style: Table
  custom_allowed: false
- detected: welcome banner layout
  follow_ud_style: Card + custom media slot
  custom_allowed: true
  reason: business composition and image slot need custom layout; inner CTA follows UD-style button styling.
```

## Review Questions

- Is this element a command action, or an entry into an object / workflow?
- Have visible system controls followed UD visual language, states, and semantics?
- Does the custom area only handle composition and layout?
- Are entry items left-aligned and easy to scan?
- Does the media have business responsibility and a clear source?
