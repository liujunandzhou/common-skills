# Visual Brief

Use this reference for page-level, full-page, highly visual tasks, or when the user asks for goals such as "Feishu style", "minimal and polished", "clean", or "large whitespace". It stabilizes visual direction and does not define fixed page templates.

## Fields

```md
visual_brief:
  product_feel:
  visual_mood:
  composition_model:
  density:
  visual_anchor:
  media_strategy:
  polish_level:
  anti_patterns:
```

## product_feel

Choose the visual baseline by product surface:

| Scene | product_feel |
| --- | --- |
| Approval, settings, admin, audit | quiet_enterprise_tool |
| Docs, calendar, IM, collaboration space | collaboration_surface |
| Workspace, portal, home page, launch page | calm_product_home |
| CRM, sales, data, reports | focused_data_workspace |
| AI assistant, smart generation, knowledge Q&A | restrained_ai_surface |
| Official site, solution center | polished_landing |

## visual_mood

- `clean_precise`: default, clean, accurate, and restrained.
- `warm_welcoming`: suitable for workspaces, home pages, onboarding.
- `focused_dense`: suitable for tables, CRM, data, audit.
- `restrained_expressive`: only for small AI or official-site first-screen expression.

## composition_model

Choose a composition that serves the primary task:

- `shell_plus_content`
- `shell_plus_content_plus_panel`
- `hero_plus_content_stack`
- `full_width_table`
- `card_grid`
- `detail_focus`
- `chat_plus_panel`
- `landing_hero_plus_sections`

Compositions can be mixed, but the primary visual anchor and reading order must be clear.

## density

- `relaxed_enterprise`: default. Content groups use 40px spacing, and information presentation feels clean.
- `focused_table`: tables, logs, approvals, and data lists. Row internals can be compact while module spacing still stays 40px.
- `spacious_product_home`: welcome areas, home-page first screens, onboarding, with more relaxed content.

One page can mix density locally. Choose `relaxed_enterprise` by default. Data work areas may keep row-scanning efficiency, but page-level group spacing stays spacious and should not compress into a dense wall of cards.

When the user request only describes a direction, page name, or business type, first use the minimum first-pass content set: product identity, primary task, one main visual or primary task area, one main content area, necessary primary action, and a small set of samples. The first screen usually keeps 2–3 visible content groups. Table / list samples use 5–8 rows, card samples 3–4 items, and KPIs appear only when the primary task needs them, with 1–3 items. Do not proactively add multiple KPI groups, long lists, right-side insights, recent visits, or multi-level navigation.

A clean view is more important than full content. When the request is vague, obvious whitespace can remain at the bottom of the page and between modules. Expand later based on user feedback. The main content area, main-content, and right content area prefer a white or nearly white page base. Light gray is only for side navigation, low-emphasis shells, or local backing surfaces, not for backing the whole main workspace.

If the scene needs first-glance page intent, the main visual in the minimum content set can become `hero-card`. Suitable scenes include workspace, portal, home page, launch page, AI assistant, CRM / sales summary, data-insight entry, recommendation, and empty state. Table directories, settings, audits, approval details, member permissions, and strong operation forms default to no Hero.

Except for Hero, floating layers, navigation, and single detail cards, content sections use external headers. The header sits above the content container, and the border only wraps the real content below.

Page-level search goes by default at the leftmost position of the `top-nav` right tool group. Filters, Tabs, view switches, and local actions inside content sections align as one toolbar group. When space is tight, filters collapse into icon buttons or Dropdown / Popover.

When side navigation appears, use a near-white neutral background and avoid an obvious gray block. Selected state uses neutral fill and 500 text weight, not light-blue fill by default. Blue and other accent colors are only for primary actions, links, focus, current state, real status, and a small amount of brand identification. The first-screen accent-color budget usually contains only one primary filled button, one current state, and necessary real-status feedback. Avatars, icon backgrounds, entry cards, ordinary tags, KPI containers, and decorative areas prefer neutral or low-saturation schemes. Default body text, descriptions, table content, and card descriptions stay 400. Module titles, table headers, buttons, selected navigation, and key numbers may use 500. Page titles or very few core headings may use 600. One area usually keeps at most page base and content surface. Do not express hierarchy with multiple nested backgrounds.

Page UI does not use gradients. Backgrounds, Hero backing, cards, buttons, tags, icon backgrounds, borders, dividers, masks, and decorative blocks express hierarchy through whitespace, light borders, real state, and necessary media.

## visual_anchor

The first glance should have one primary anchor:

- Workspace: welcome Hero, quick entries, recent content, or recommendation module;
- Data page: table, view switch, or key filter;
- CRM: key customers, follow-up list, stage pipeline, or key summary Hero;
- AI: input area, assistant identity Hero, or recommended questions;
- Official site: solution Hero, product UI image, solution entry, or single primary CTA.

Avoid multiple areas competing with equal visual strength.

## media_strategy

Media appears by responsibility:

- Home pages, workspaces, recommendations, empty states, onboarding, and product entries can use illustrations, thumbnails, avatars, product images, or entry icons. When Hero, welcome areas, recommended content, product entries, and empty states carry first-glance explanation, plan a visual anchor by default.
- Dense data pages, settings pages, audit pages, and table-first flows can use no imagery. Use media only when explaining state, welcome, recommendation, or product entry.
- When illustration or visual assets are needed, first check the illustration library and record `library_lookup`, then check UD / product assets. If matching fails, generate an independent bitmap for the current media slot.
- Generated imagery must serve the current module theme, feel polished, minimal, and light, and may become a local visual focus. It must not be too heavy and must not generate a full page UI or complete dashboard.

## polish_level

- `functional_prototype`: core interactions work and the visual is clear enough.
- `production_like`: default. States are complete, responsiveness and UD visuals are unified.
- `polished_product`: higher completion level, requiring polished media, hover, empty states, and breakpoints.

## Anti-Patterns

- Heavy gray backgrounds, strong shadows, excessive borders;
- Gradients in page UI;
- Main content area / right content area using an obvious light-gray large background and then stacking white cards for hierarchy;
- Sidebars becoming obvious gray blocks, or selected state using light-blue fill / brand-blue text;
- Blue and accent colors used for ordinary decoration, icon matrices, category tags, KPIs, or large backgrounds;
- Multiple text layers bold in the same list, table, card, or navigation group;
- Gray backing with white cards, white cards with gray blocks, gray blocks with smaller cards;
- Spacing, column widths, and module left edges that do not follow the base grid;
- Marketing-style Hero in enterprise tools;
- Card-in-card layouts or a full-page wall of cards;
- Navigation items, entry cards, and list rows centered as a whole;
- Content sections without titles, or titles wrapped inside bordered content containers;
- Page-level search placed inside a content section, filters stretched full row, or filters and Tabs split into loose rows;
- Recognizable system controls hand-written as static `div` elements;
- Images without source and responsibility;
- Hero, welcome area, recommended content, product entry, or empty state carrying visual explanation but using only outlined icons or pure text, without planning illustration-library, product image, thumbnail, or generated-image fallback;
- Page UI icons using filled icons without source evidence or an explicit `source-filled` strategy, or using emoji, characters, hand-written SVG, or third-party icon libraries instead of catalog icons;
- colorful used as ordinary decoration, or an explicit icon area mixes family, v2 / non-v2 version, or File v2 colorful round / normal shapes;
- Ordinary entries, categories, KPIs, avatars, or decorative areas using high-saturation colors to distinguish business types;
- Vague requests proactively filling the whole page with content;
- Adding modules only because a case contains them.
