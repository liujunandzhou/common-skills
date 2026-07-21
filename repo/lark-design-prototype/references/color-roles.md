# Color Roles

Use this reference when assigning `token_roles` in the Lark Design Prototype Contract or converting screenshot / Figma color evidence into Feishu semantic tokens.

## Core Rules

Choose colors by responsibility, not hue preference. When you see blue, red, green, or gray, first decide whether it serves action, status, link, surface, border, icon, or text emphasis.

`DESIGN.md` provides built-in P0 token values. Use `data/tokens/semantic.json` for full token lookup. If a semantic token exists, avoid using palette keys or raw hex values as the first implementation token.

Sidebar background and selected sidebar item are explicit exceptions: the sidebar background must be written directly as `#f9f9f9`, and the selected sidebar item background directly as `#1f23290d`. During implementation, use the hex values directly. Do not look them up or remap them to color tokens, CSS variables, or theme variables.

## Surface Roles

Understand color through surface depth:

- Page root: app or page background;
- Content surface: primary work area;
- Nested content surface: secondary grouping inside the work area;
- Floating surface: popover, dropdown, dialog, drawer, menu;
- Mask: modal blocking or dimmed background.

Common mapping:

- Large pages and workspaces (body / app-root / main-workspace / main-content / right content area): prefer white or nearly white `bg-body`;
- Low-emphasis app shell or backing surface: use `bg-base`;
- Secondary content surface on the main work surface: use `bg-body-overlay`;
- Navigation background: sidebar background must be written directly as `#f9f9f9`; do not remap it to `bg-sub-navigation` or `side-nav-bg`;
- Main side-navigation current item background must be written directly as `#1f23290d`, with 500 text weight and neutral body color. Do not use light-blue fill or brand-blue text by default;
- An auxiliary sidebar under `top-nav-primary` also uses `#f9f9f9` and `#1f23290d` if it functions as navigation; if it only supports content, it usually uses `bg-body`;
- Floating panels: use `bg-float`;
- Nested surfaces inside floating panels: use `bg-float-overlay`;
- Modal mask: use `bg-mask`.

Keep one surface family on the same page. Only mix multiple page backgrounds when the design source clearly expresses a floating layer or nested workspace. One area usually keeps at most page base and content surface. Do not create hierarchy with gray backing plus white cards, white cards plus gray blocks, or gray blocks plus smaller cards.

`bg-content-base` is only for especially deep hierarchy when `bg-body`, `bg-base`, and component surfaces cannot distinguish shell, workspace, and nested content. Do not use it as the default page background for regular Web product pages.

## Text Roles

Text color follows emphasis hierarchy:

- Primary reading text, page titles, section titles, strong labels: `text-title`;
- Secondary copy, metadata, descriptions, auxiliary text: `text-caption`;
- Placeholder and low-emphasis hints: `text-placeholder`;
- Disabled text: `text-disabled`;
- Links: `text-link-normal`, with hover, pressed, and disabled link states when needed.

Ordinary body text must not use the brand primary token. Brand blue should express actions, links, selected state, or product emphasis, not default reading text.

Blue and other accent colors have a budget: only primary actions, links, focus, current state, real status, and a small amount of brand identification. Do not use accent colors for ordinary card backgrounds, decorative lines, icon matrices, category tags, large KPI emphasis, or entries without state meaning.

The first-screen accent-color budget usually contains only one primary filled button, one current state, and necessary real-status feedback. Avatars, icon backgrounds, entry cards, ordinary tags, KPI containers, auxiliary descriptions, and decorative areas prefer neutral or low-saturation schemes.

Icon containers in quick entries, app entries, and recommended content may use low-saturation, low-opacity blue fills such as `rgba(20, 86, 240, 0.06–0.10)`. This fill only provides light support and must not act as status color, category color, or large-area background. Keep one fill strategy within the same entry group.

## Action Roles

Use primary action colors sparingly.

- Primary filled action: `primary-fill-default`;
- Content on primary action: `primary-on-primary-fill`;
- Primary action hover / pressed: `primary-fill-hover`, `primary-fill-pressed`;
- Low-emphasis primary-color text, linear icon, border, or selected label: `primary-content-default`;
- Primary-color content hover / pressed: `primary-content-hover`, `primary-content-pressed`.

A local task area usually has only one primary filled action. Auxiliary actions use neutral buttons, text buttons, dropdowns, or menus.

## Border And Divider Roles

Use borders structurally:

- Card, table, list, and content-area boundaries / strokes: `line-border-card`;
- Interactive control boundaries, including input, checkbox, radio, and selector surfaces: `line-border-component`;
- Separation between sibling rows or areas: `line-divider-default`.

Do not use strong accent borders as generic decoration. Colored borders should usually express validation, status, selected state, or focus interaction.

## Fill And Selection Roles

Neutral fills handle most lightweight interactions.

- Row, icon button, and neutral text button hover: `fill-hover`;
- Neutral pressed state: `fill-pressed`;
- Active state: `fill-active`;
- Selected state: `fill-selected`;
- Disabled fill: `fill-disabled`.

Selected and active fills explain state. Do not use them as arbitrary background decoration.

## Status Roles

Functional colors only express real semantic states.

- Destructive, failed, blocked, rejected: `function-danger-fill-*`;
- Successful, completed, approved, healthy: `function-success-fill-*`;
- Warning, risky, needs attention: `function-warning-fill-*`;
- Informational state: `function-info-fill-*`.

If a tag is only a category, do not use functional colors. Prefer neutral or component-provided tag colors.

## Icon Roles

Icon color follows nearby semantics:

- High-emphasis icon: `icon-n1`;
- Secondary icon: `icon-n2`;
- Tertiary or low-emphasis icon: `icon-n3`;
- Disabled icon: `icon-disabled`;
- Primary action icon on a filled primary button: `primary-on-primary-fill`;
- Blue action icon on a neutral surface: `primary-content-default`.

Icons should reinforce actions, statuses, source restoration, brand identity, or file-type semantics. Do not use colorful icons to decorate dense product UI. Regular page UI icons use catalog `outlined`, preferably v2 when semantically suitable, defaulting to `icon-n2`; current or high-emphasis uses `icon-n1`; low-emphasis uses `icon-n3`; disabled uses `icon-disabled`; only primary actions, links, focus, current state, destructive actions, and real statuses use the corresponding semantic colors. Screenshot and Figma restoration preserve source visual type: outlined, filled, or colorful. File v2 colorful must keep the same type and shape within the same area / module.

## Gradients

Page UI does not use gradients. Backgrounds, Hero backing, cards, buttons, tags, icon backgrounds, borders, dividers, masks, and decorative blocks do not use `linear-gradient`, `radial-gradient`, `conic-gradient`, gradient image masks, or gradient borders.

Hierarchy is expressed through whitespace, real surface relationships, 0.5px light borders, typography hierarchy, hover / selected states, and necessary media.

## Dark Mode

Light and dark modes use the same token names. The theme system should resolve dark values from `DESIGN.md` or UD CSS variables.

Unless the source system explicitly requires it, do not create new semantic names only for dark mode. If a token role is correct in light mode, it usually keeps the same role in dark mode.

## Figma And Screenshot Conversion

When reading visual sources:

1. Identify role first: surface, text, border, fill, action, status, icon.
2. Determine emphasis or state: primary, secondary, disabled, hover, selected, danger, warning, success, info.
3. Map to Feishu semantic tokens.
4. Record the role in the Lark Design Prototype Contract.
5. Leave exact values to `DESIGN.md`, `data/tokens/semantic.json`, or UD CSS variables.

Example:

```md
token_roles:
- body / app-root / main-workspace / main-content: bg-body
- low-emphasis app shell backing: bg-base
- working surface: bg-body
- filter controls: line-border-component + bg-body
- table boundary: line-border-card
- row hover: fill-hover
- selected row: fill-selected
- primary CTA: primary-fill-default + primary-on-primary-fill
- secondary metadata: text-caption
- destructive status: function-danger-fill-default
```

## Review Traps

- Using raw hex colors from screenshot or Figma as implementation tokens;
- Using brand blue for default body text;
- Using danger, success, or warning colors for non-status categories;
- Mixing too many surface roles in a page without real depth relationships;
- Using decorative colored borders or any gradients in enterprise product UI;
- Overusing blue or accent colors in ordinary cards, icon matrices, category tags, and KPIs;
- Icon colors lack action, status, current, disabled, emphasis, or File v2 file-type semantics, making ordinary entries and categories default to high-saturation colors;
- Creating hierarchy with multiple nested surfaces such as gray backing with white cards or white cards with gray blocks;
- Renaming token roles for dark mode instead of letting the theme resolve values.
