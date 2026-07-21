# Design Quality Checklist

Use this checklist before final delivery. The focus is user-visible quality: native Feishu feel, primary flow, UD-style control usage, responsiveness, and visual polish.

## System Fit

- A lightweight `lark_style_recipe` has been formed, covering surfaces, whitespace, radius, borders, shadows, typography, controls, and media.
- Figma / screenshot tasks have recorded `source_layout_evidence`.
- Screenshot restoration has recorded `source_viewport_contract` before implementation.
- Recognizable system controls follow UD visual language, states, and semantics first, or there is a clear custom reason.
- Custom areas only handle composition, layout, media slots, and one-off business structures.
- Custom areas and UD-style controls share the same visual language.
- Cases are only low-weight references and do not override user input or source evidence.

## Product Quality

- The page directly supports the primary task, and the first screen identifies product identity and key content.
- When the user request is vague, the page only fills core content and a small set of samples. The first screen usually has 2–3 visible content groups and does not actively fill the whole page.
- Information hierarchy is clear, and primary and secondary actions are distinct.
- Except for Hero, floating layers, navigation, and single detail cards, content sections have external headers.
- Repeated rows, cards, entries, and controls share structure.
- Button is used for command actions; entries, apps, recommendations, and object jumps use Card / List row patterns.
- Hero appears only when the first glance needs to explain page intent, welcome, smart suggestions, high-value summaries, or empty-state guidance.
- Navigation items, quick entries, app entries, recommendation entries, list rows, and summary rows default to left alignment.
- When top-nav or side-navigation is matched, `side-nav-primary` or `top-nav-primary` has been chosen, and the two shell patterns are not mixed. Side navigation uses a near-white neutral background and selected state uses neutral fill with 500 text weight, not light-blue fill by default.
- Form, approval, settings, and detail-edit pages with top bars have a clear `top_nav_policy`: the bar identifies product / space and low-emphasis utilities, while business actions sit in the page title or primary task area unless source evidence says otherwise.
- Right auxiliary rails have a clear helper role. They explain rules, approval flow, permissions, risk, or contextual help, and the main task still remains understandable without the rail.
- Required states such as loading, empty, disabled, error, success, and selected exist.
- Visible controls are interactive or explicitly recorded as static display.
- Page-level search sits at the leftmost position of the top-nav right tool button group; content sections only keep search with a clearly local scope.

## Visual Quality

- Overall feel matches polished, minimal, clean, tidy, low-density, and reliable.
- The page reduces meaningless dividers through large whitespace and module titles.
- Blue and other accent colors appear only for primary actions, links, focus, current state, real status, or a small amount of brand identification. They do not decorate ordinary cards, icon matrices, category tags, KPIs, or large backgrounds.
- First-screen accent-color budget is restrained: usually one primary filled button, one current state, and necessary real-status feedback. Avatars, icon backgrounds, entry cards, ordinary tags, KPI containers, and decorative areas do not use high-saturation categories.
- Page UI uses no gradients. Backgrounds, Hero backing, cards, buttons, tags, icon backgrounds, borders, dividers, masks, and decorative blocks do not use `linear-gradient`, `radial-gradient`, `conic-gradient`, or gradient image masks.
- Default body text, descriptions, table content, and card descriptions stay 400; the same list, table, card, or navigation group does not contain multiple bold text layers.
- Form and right-rail pages show an explicit emphasis budget in the final result: one page-level 600 title, limited 500 section / label / selected-state text, and 400 body, helper, button, link, metadata, and bullet text by default.
- Table body stays 14px / 22px / 400. Customer names, object names, amounts, owners, times, and action links are not bold.
- Table cells stay single-line. Long text uses ellipsis, column-width adjustment, tooltip, or detail drawer. There is no stacked two-line information.
- Module titles are not wrapped inside bordered content containers. Borders only wrap tables, lists, card grids, or business content.
- Large pages and workspaces (body / app-root / main-workspace / main-content / right content area) prefer white or nearly white `bg-body`; light gray is only for low-emphasis shells, side navigation, or local backing surfaces.
- Sidebars, backing areas, and secondary surfaces are low-presence and do not become obvious gray blocks.
- One area usually keeps only page base and content surface. There is no gray backing with white cards, white cards with gray blocks, or gray blocks with smaller cards.
- Ordinary business cards, Hero, metric cards, quick entries, table containers, and right summaries have no shadows.
- Borders are light; regular business surfaces use 0.5px `line-border-card`.
- Radius family is stable within the same local area; regular cards are about 8px.
- Font sizes mainly use 12px, 14px, and 16px; large titles stay restrained.
- Icon stroke, size, family, version, shape, source visual type, and semantics follow `references/icon-semantics.md`. Page UI icons are traceable to catalog retrieval, regular page UI usually uses v2 outlined when semantically suitable, and file-type, source-restoration, `source-filled`, `source-colorful`, and brand-colorful usage stay consistent within the same explicit area.
- top-nav tool icons are consistent in size, usually 28px container + 20px linear icon. side-navigation row height, icons, labels, 2px item vertical spacing, and selected state are stable.
- top-nav text entries such as help, records, and settings are low-emphasis, usually 14px / 22px / 400. The top bar does not duplicate the page title or carry oversized product identity.
- Media has responsibility and source. When a visual anchor is needed, `library_lookup` is recorded; there are no gray boxes or meaningless images.
- Generated images serve only the current media slot, match the current module theme, feel polished and light, and do not generate a full page UI, complete dashboard, or browser shell.
- When Hero uses a visual anchor, it has first matched the illustration library, UD / product assets, or recorded generated-image fallback.
- When Hero, welcome areas, recommended content, product entries, or empty states carry first-glance explanation, illustrations, thumbnails, product images, File v2 file icons, or generated-image fallback are planned. They are not replaced by pure text and outlined icons.
- Quick entries, app entries, and lightweight recommendation entries may use low-saturation, low-opacity blue fills in icon containers, with a consistent group strategy and no high-saturation icon matrix.

## Layout And Responsiveness

- Page body uses responsive document flow and does not copy full-page Figma coordinates.
- The main workspace uses responsive width and fills the available space after the navigation shell. Workspaces, tables, boards, CRM, admin pages, and data pages do not apply a fixed max width to the whole `main-workspace` / `main-content`.
- Max reading width is only for local reading areas such as long-form text, settings forms, and detail descriptions.
- The page follows the 4px base grid; main padding, gaps, column widths, radius, and container offsets use multiples of 4px or page-level variables.
- Page title, module title, Hero, quick entry, card grid, table container, and right rail align to the same content container line. No single module relies on temporary `margin-left`, temporary `width`, or offsets for alignment.
- Responsive columns use stable tracks, such as main column `minmax(0, 1fr)`, right auxiliary rail 320–384px, and 24px side gap. The right rail merges into the main flow at narrow widths.
- First-level content groups use about 40px vertical spacing.
- Toolbars, card grids, columns, and entry groups use stable gaps and column widths. Hover, selected, loading, and dynamic text do not cause layout jumps.
- Table row height is stable. Hover, selected, loading, edit state, and long-text ellipsis do not change row height.
- Single cards, summary blocks, and right panels do not stack too many fields; information presentation feels spacious.
- Right helper rails in forms use a quiet pattern: plain helper rail, one light panel, or drawer-on-demand. They do not become a stacked card wall.
- Quick entries and lightweight recommendation entries use equal height within the same row. The parent uses `grid-auto-rows: auto`, and cards in the same row take the height of the tallest card in that row. Short-copy entries do not become uneven by independent auto height, and they also do not create obvious bottom whitespace due to fixed height or whole-group large height.
- KPIs, lists, recommendations, right-side insights, and quick entries can explain their source or primary-task value. Under vague requests, table / list samples stay within 5–8 rows, card samples within 3–4 items, and KPIs within 1–3 items while serving the primary task.
- When title areas contain search, filters, Select, Tabs, or buttons, they can wrap or stack at narrow widths.
- Filters, Tabs, view switches, and local actions align as one toolbar group. At standard width, Select / DatePicker does not stretch across the whole row.
- When space is tight, filters collapse into IconButton + Dropdown / Popover / Drawer instead of a long selector occupying one row.
- Long text in any language is not squeezed into character-by-character, vertical, or single-character columns.
- The right auxiliary rail can merge into the main content flow at narrow widths.
- side-navigation can shrink to a 64–72px icon rail at `narrow`; text navigation does not degrade into initials or single characters. `compact` has a drawer, top entry, or bottom entry plan.
- The compact viewport can still identify the current page, primary action, and main content.

## Figma / Screenshot Restoration

- Source region order, primary / secondary relationship, density, and component boundaries are preserved.
- Browser viewport matches `source_viewport_contract`.
- Scale check: the restored page feels correctly sized at normal browser zoom based on stable anchors such as sidebar width, avatar size, header height, input height, and body text.
- auto layout, padding, gap, constraints, component instances, and state evidence have been converted into responsive layout relationships.
- Top bars, navigation, tabs, list rows, avatars, badges, message cards, and floating actions have no visible collisions.
- UD-style control patterns cover Button, Input, Select, Tabs, Table, Menu, Drawer, Dialog, Tag, Badge, Avatar, and other system controls first.
- When the UD default visual does not fully match, tokens, size, outer layout, and local CSS are used first.
- Custom local implementation is used only when it clearly cannot satisfy source evidence.

## Hard Failures

The following issues must be fixed before delivery:

- Core interaction is missing and no static exception is explained;
- Figma / screenshot restoration lacks source evidence;
- Screenshot restoration lacks `source_viewport_contract`;
- Screenshot restoration has obvious collisions in the top bar, navigation, tabs, list rows, avatars, badges, message cards, or floating actions;
- Standard system controls are widely rendered as unstyled ordinary `div` or native controls;
- Ordinary business cards, Hero, metric cards, quick entries, table containers, or right summaries use shadows;
- The page has heavy gray backgrounds, strong borders, or a wall of cards, making Feishu style heavy;
- Main content area / main-content / right content area uses an obvious light-gray large background to back the whole workspace instead of a white or nearly white page base;
- Sidebar background is an obvious gray block, or selected state defaults to light-blue fill / brand-blue text;
- Blue or other accent colors are used for ordinary decoration, icon matrices, category tags, large KPI backgrounds, or multiple non-primary status areas;
- The first screen simultaneously uses blue, success, warning, danger, or purple to distinguish ordinary entries, KPIs, avatars, tags, and decoration, causing high visual noise;
- Page UI uses gradients, including gradient backgrounds, Hero backing, buttons, cards, tags, icon backgrounds, borders, masks, or decorative blocks;
- Filled icons appear without source evidence or an explicit `source-filled` strategy, or page UI icons bypass catalog retrieval by using AI-drawn icons, emoji, text characters, CSS / canvas drawing, hand-written SVG, or a third-party icon library while the catalog has usable icons;
- Colorful icons are used as ordinary decoration without file-type, source-restoration, or brand-identity responsibility;
- An explicit icon area mixes family, v2 / non-v2 version, File v2 colorful round / normal shape, bitmap icons, emoji, text characters, CSS / canvas drawing, or hand-written SVG shapes;
- Icon colors lack action, status, current, disabled, emphasis, file-type, source-restoration, or brand-identity semantics. Same-group navigation, toolbar, entry cards, or table row actions mix multiple high-saturation colors;
- top-nav avatars, table avatars, and member avatars use high-saturation colors and distract from page hierarchy;
- Titles, descriptions, tags, and numbers are all bold in the same list, table, card, or navigation group, causing hierarchy confusion;
- Form pages have no emphasis budget, causing labels, descriptions, buttons, helper text, and approval steps to all appear bold;
- Table body contains bold customer names, bold amounts, bold owners, bold times, or bold action links, making row information too heavy;
- Table cells contain two-line text, primary / secondary titles stacked vertically, or customer name plus industry in two lines, reducing table scan efficiency;
- The page has gray backing with white cards, white cards with gray blocks, or gray blocks with smaller cards, making surface hierarchy dirty;
- The page visibly breaks the 4px base grid, with random spacing, chaotic column widths, misaligned module left edges, or interaction states that cause layout jumps;
- Page title, module title, Hero, quick entry, card grid, table container, or right rail does not share the same content container line and relies on temporary `margin-left`, width, or offset alignment;
- Key layout values contain many non-4px multiples, or page-level spacing / grid variables are not reused, making module rhythm inconsistent;
- Workspaces, tables, boards, CRM, admin pages, or data pages apply a fixed max width to the whole main workspace, causing wasted wide-screen space, an uncentered right workspace, or cramped content;
- Non-exception content sections lack titles, or section titles are wrapped inside bordered containers;
- Vague user requests proactively generate many unsupported modules, metrics, lists, or right-side panels;
- Vague user requests show more than 3 visible content groups on the first screen, or simultaneously include a KPI wall, long list, right-side insights, recommendations, recent visits, quick entries, and multi-level navigation;
- Quick entries, app entries, recommendation entries, or navigation items are centered as a whole, harming scanning;
- Quick entries use outline Buttons instead of entry cards or list rows;
- Sidebar navigation items use centered Button styling, or collapsed state compresses text navigation into initials, single characters, or meaningless abbreviations;
- Navigation items in the same sidebar group touch vertically and lack 2px vertical spacing;
- top-nav tools mix text-character icons with SVG / UD icons, or a search input and search icon button both appear;
- top-nav duplicates the page title, uses oversized logo / product identity, makes utility text heavy, or places large business primary actions in the bar without source evidence;
- Right helper rails use strong stacked card frames, shadows, large titles, bold body text, or high-saturation decoration, causing the rail to compete with the form;
- `top-nav-primary` or `side-nav-primary` is matched but navigation background, start position, or backing relationship from the other mode is mixed in;
- Page-level search appears inside a content section, or is not placed at the leftmost position of the top-nav right tool group;
- Filter controls use full-row width, splitting filters and Tabs into loose rows;
- Long text is squeezed into character-by-character, vertical, or single-character columns;
- The page depends on a whole-page fixed canvas size;
- A planned media slot has no real asset, lacks `library_lookup`, or generated imagery becomes a full page UI;
- Hero, welcome area, recommended content, product entry, or empty state carries visual explanation but has no media plan and no reason for no-media;
- Generated imagery is unrelated to the current module theme, or its visual weight overpowers the title, main content, and actions;
- Quick entries or lightweight recommendation entries in the same row have uneven heights because every card auto-sizes independently;
- Quick entries or lightweight recommendation entries use fixed height, excessive `min-height`, `aspect-ratio`, `grid-auto-rows: 1fr`, `grid-auto-rows: minmax(...)`, `place-items: center`, or fixed height classes such as `h-24 / h-28 / h-32`, causing all rows to be stretched or short title / description cards to show obvious bottom whitespace;
- Case rules override user input, Figma / screenshot evidence, or a reasonable current composition.
- Table directories, settings, audits, approval details, member permissions, or strong operation forms add a marketing-style Hero without evidence.

## Report Format

```md
summary:
passed:
warnings:
hard_failures:
verification:
remaining_risks:
```
