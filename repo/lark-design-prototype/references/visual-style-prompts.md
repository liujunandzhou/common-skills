# Visual Style Prompts

Use this reference when the user only says "Feishu style", "minimal and polished", "clean", "large whitespace", or when media assets need to be generated. It provides a unified style direction and does not define fixed page templates.

## Default Style

```md
visual_style_prompt:
  feel: polished, minimal, clean, tidy, low-density, real Feishu product feel
  surface: white or very light neutral surfaces; body / app-root / main-workspace / main-content / right content area should prefer bg-body; light gray is only for side navigation, low-emphasis shells, or local backing surfaces, avoiding heavy gray backgrounds and strong shadows
  composition: clear app shell + stable content spine + a small number of responsible visual anchors
  density: content groups default to 40px spacing; information feels clean; one card carries only a small amount of key content; use the minimum content set first when the request is vague
  color: brand blue is used for primary actions, links, focus, current state, real status, and a small amount of brand identification; entries, avatars, icon backgrounds, KPIs, and ordinary tags prefer neutral or low-saturation colors; avoid multiple accent sources in the same viewport
  noise: control accent colors, font weight, nested backgrounds, gradients, and random spacing; sidebars stay neutral and low-presence; keep the view clean first
  shape: controls around 6px radius, content cards around 8px, pills only for tags, filters, and a small number of recommended questions
  border: ordinary business surfaces use 0.5px light borders; reduce meaningless dividers
  shadow: ordinary business surfaces have no shadows; shadows only for floating layers
  imagery: when Hero, welcome areas, recommended content, product entries, empty states, and workspace home pages carry visual explanation, first plan illustrations, thumbnails, product images, or entry icons; check the illustration library before considering generated imagery
```

## Generated Image Style Fragment

When `media_plan` uses `generated_bitmap`, reuse only this style fragment. The specific visual content is decided by the current slot.

```md
generated_media_style:
  overall: Feishu / Lark enterprise product visual, advanced, minimal, light, refined, and directly related to the current module theme.
  surface: white or very light neutral surface, fine boundaries, low noise.
  color: small-area brand blue accents, optionally with low-saturation cyan, green, purple, or orange; avoid high-saturation clashes and multiple strong highlights.
  scope: media_slot_asset_only
  content: independent visual element, such as data visual, workflow thumbnail, light illustration, avatar, product image, important entry icon, empty-state graphic, or recommendation cover.
  composition: clear subject, generous whitespace, adapted to target media-slot ratio; may become a local visual focus, but visual weight stays restrained.
  avoid: heavy shadows, gradient backgrounds, gradient buttons, gradient borders, cyber look, marketing poster, complex background, toy-like cartoon feel, posed people photography, purely decorative abstract image, unreadable pseudo text, full page UI, complete dashboard, navigation bar, sidebar, table page, button/form combination, browser shell.
```

Prompt assembly:

```md
prompt_inputs:
  page_topic:
  module_context:
  semantic_goal:
  content_type: data-visual / product-preview / workflow-visual / empty-state / recommendation-cover / avatar / product-image / entry-icon / light-illustration
  slot_ratio:
  library_lookup:
  generation_scope: media_slot_asset_only
  style_direction: generated_media_style
  negative_constraints: generated_media_style.avoid
```

## Low-Quality Result Corrections

- Reduce information stacking: keep concrete data, metadata, status, or entries in primary areas, but one card presents only a small amount of key content.
- Narrow content scope: when the request is vague, keep only product identity, primary task, one main content area, necessary primary action, and a small set of samples.
- Reduce visual noise: reduce unnecessary brand blue, functional colors, bold text, light-gray background nesting, gradients, and random spacing; avoid gray backing with white cards, white cards with gray blocks, all-blue icon matrices, and multiple bold text layers.
- Reduce boundary weight: reduce full frames and keep only key containers and real control boundaries.
- External section titles: except for Hero and overview cards, content section titles sit above bordered containers and use titles plus whitespace to express module hierarchy.
- Add a responsible visual anchor: choose an illustration, product image, or entry icon that matches module semantics.
- Improve entry hierarchy lightly: quick entries and lightweight recommendation entries may use low-opacity blue fills in icon containers. Cards in the same row take the height of that row's tallest card, avoiding uneven heights from different text line counts and large bottom whitespace from fixed heights.
- Unify system language: custom shell, navigation, cards, and UD-style controls share tokens, radius, states, and icon scale.
- Tighten scale: do not enlarge title, icon, card height, and row spacing all at the same time.
