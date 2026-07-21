# Token Semantics

Use token roles by meaning and avoid choosing by personal taste.

## Color Roles

- `primary-fill-default` / `primary-fill-hover` / `primary-fill-pressed`: primary filled actions, selected controls, and direct blue-filled interaction states.
- `primary-content-default` / `primary-content-hover` / `primary-content-pressed`: blue text, linear icons, borders, and other small-area primary-color content states.
- `primary-on-primary-fill`: content on primary filled surfaces, especially primary button text and icons.
- `text-title`: high-emphasis titles, body text, primary labels, and button text that is not on a filled surface.
- `text-caption`: secondary text, metadata, descriptions, and table auxiliary content.
- `text-placeholder`: placeholders and low-emphasis hints.
- `text-link-normal` / `text-link-hover` / `text-link-pressed` / `text-link-disabled`: link states. Do not reuse primary fill tokens for links.
- `line-border-card`: card and table boundaries.
- `line-border-component`: interactive control boundaries, including input, checkbox, radio, and selector surfaces.
- `line-divider-default`: standard dividers.
- `bg-body`: default large page and workspace background and main content surface (body / app-root / main-workspace / main-content / right content area).
- `bg-base`: low-emphasis app shell or backing area behind the main work surface.
- `bg-content-base`: extra backing surface for especially deep hierarchy; do not use it as default page background.
- `bg-body-overlay`: secondary surface layered on `bg-body`, such as a nested content area.
- `bg-float` / `bg-float-base` / `bg-float-overlay`: popover, dropdown, dialog, drawer, menu, and nested floating surfaces.
- `side-nav-bg`: historical semantic name. In the current skill, the main side-navigation background is written directly as `#f9f9f9` and is not mapped to this token during implementation.
- `side-nav-item-hover` / `side-nav-item-selected` / `side-nav-item-selected-text`: historical semantic names. In the current skill, the main side-navigation current item background is written directly as `#1f23290d`, and current item text uses neutral body color plus 500 weight, not light-blue fill or brand-blue text by default.
- `aux-side-nav-item-hover` / `aux-side-nav-item-selected`: light hover and current fill for auxiliary sidebars under `top-nav-primary`.
- `side-nav-divider`: 0.5px divider for side-navigation groups or auxiliary sidebar boundaries.
- `fill-hover` / `fill-pressed`: neutral interaction fills for text buttons, icon buttons, and rows.
- `fill-active` / `fill-selected`: active and selected states.
- `fill-disabled`: disabled fill state.
- `function-danger-*`: only for destructive or failed states.
- `function-success-*`: only for success states.
- `function-warning-*`: only for warning states.
- `function-info-*`: only for information states.
- `icon-n1` / `icon-n2` / `icon-n3` / `icon-disabled`: icon hierarchy and disabled state.
- `static-black` / `static-white`: fixed colors that do not change between light and dark modes.

The full token source is `data/tokens/semantic.json`. `DESIGN.md` only embeds parsed P0 semantic color tokens. When a confirmed component pattern needs loading variants, focus fills, functional content colors, or other specialized variants, look them up in the full semantic token data. Palette keys such as `B600`, `N900`, or `primary/pri-600` are kept in `data/tokens/keys.json` for auditing and non-P0 lookup.

## Surface System

- Explain responsibilities of page root, app shell, content container, real controls, floating layers, and status feedback in `surface_family`.
- Do not create hierarchy with heavy gray backgrounds, strong shadows, or multiple borders. Prefer tokens, spacing, titles, and component structure.
- Large pages and workspaces (body / app-root / main-workspace / main-content / right content area) default to white or nearly white `bg-body`; introduce `bg-base` or `bg-content-base` only when app-shell backing or deeper hierarchy requires it.
- One area usually keeps at most page base and content surface. Avoid gray backing with white cards, white cards with gray blocks, and gray blocks with smaller cards. Local grouping should prefer titles, whitespace, row structure, light dividers, hover, or selected state.

## Typography Roles

- `title-0`: page-level identity and largest title.
- `title-1`: large page, block, or primary section title.
- `title-2` and `title-3`: content titles and secondary structure titles.
- `title-4`: group names, group titles, panel titles, and dialog titles.
- `title-5`: title-style tabs and sibling view labels.
- `headline`: emphasized information rows, button labels, active labels, compact strong text, and similar 14px medium-weight emphasis.
- `body-0`: default product reading text and information-flow body.
- `body-2`: auxiliary body and secondary explanation text.
- `caption-0`: compact emphasized labels and tags.
- `caption-1`: smallest emphasized auxiliary text.
- `caption-3`: smallest neutral auxiliary text.

Most Feishu product pages should use 12px, 14px, and 16px. Use 10px captions only on truly constrained auxiliary surfaces. Large type should be rare in operational pages.

Default body text, descriptions, table content, card descriptions, and unselected navigation use 400. Module titles, table headers, buttons, selected navigation, and key numbers may use 500. Page titles or very few core headings use 600. Within one information group, usually emphasize only one primary text. Do not make titles, descriptions, tags, and numbers all bold.

## Radius Roles

- `radius.none` / 0: square surfaces and intentionally sharp areas.
- `radius.s` / 4px: small tags and checkbox-like compact controls.
- `radius.m` / 6px: default buttons and compact inputs.
- `radius.l` / 8px: cards, modals, input containers, and table containers.
- `radius.xl` / 10px: larger panels.
- `radius.xxl` / 12px: relaxed shells and larger selection surfaces.
- `radius.full` / 9999px: pills, badges, and circular icon buttons.

Do not mix content radius and container radius on the same element.

Page-level tasks should record radius division in `radius_family`. Controls, content containers, floating layers, and pills may use different roles, but the same local area should not contain too many radius scales.

## Spacing Rhythm

Use 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48px. Repeated areas should share one rhythm.

Typical use:

- 4px: icon-to-label and small inline spacing.
- 8px: compact controls and row internals.
- 12px: local binding, auxiliary descriptions, compact tag groups.
- 16px: title-to-content, same-group card grids, and standard section internals.
- 24px: card padding, same-type groups, and left-right columns.
- 40px: default vertical spacing between first-level content groups.
- 48px: more relaxed first-screen or onboarding sections.

## Shadows

The raw token data retains historical and official elevation tokens for source tracing. When generating workspaces, CRM, portals, and sales dashboards, follow the current page rule in `DESIGN.md`: ordinary business surfaces do not use shadows; shadows are only for floating layers.

Shadows are only for floating surfaces and overlays. Most page grouping should be done with surfaces, borders, and spacing.

## Review Traps

- Hard-coding one-off hex colors;
- Using arbitrary 13px, 15px, or 17px font sizes in product UI;
- Using any gradient background, Hero backing, button, card, tag, icon background, border, mask, or decorative block in page UI;
- Using strong shadows on cards;
- Using too many radius sizes in the same local area;
- Replacing surface hierarchy with heavy gray backgrounds, strong borders, or strong shadows;
- Lacking a clear surface and radius family on the same page;
- Using an obvious gray-block side navigation background or a light-blue default selected state;
- Using blue and other accent colors as ordinary decoration, icon matrices, category tags, or large KPI backgrounds;
- Using filled icons without source evidence or an explicit `source-filled` strategy, or replacing catalog icons with emoji, characters, hand-written SVG, or third-party icon libraries in page UI;
- Using colorful as ordinary decoration, or mixing icon family, v2 / non-v2 version, or File v2 colorful round / normal shapes in the same explicit area;
- Applying a fixed max width to the whole main workspace on workspaces, tables, boards, CRM, admin pages, or data pages;
- Making multiple text layers bold in the same list, table, card, or navigation group;
- Creating gray backing with white cards, white cards with gray blocks, or gray blocks with smaller cards.
