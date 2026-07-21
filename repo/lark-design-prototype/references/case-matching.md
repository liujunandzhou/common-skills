# Case Matching

Case matching retrieves inspiration and common risks from mature pages. Case weight is always lower than user input, Figma / screenshot evidence, the primary product task, and the current reasonable composition.

## When To Use

For page-level tasks, full-page Figma, full-page screenshots, full-page visual drafts, or natural-language full-page generation, case matching may be used. Small local UI fragments, single floating layers, single form items, and small style adjustments usually do not need it.

## Matching Method

Extract these tags:

- `product_surface`: workspace, CRM, data, AI, official, settings, and similar surfaces.
- `page_type`: home, portal, table, chat, landing, detail, settings, and similar types.
- `intent_tags`: quick entry, recommended content, recent visits, table directory, conversational input, solution categories, and similar intents.
- `risk_tags`: wall of cards, heavy gray background, no visual anchor, mixed icons, loose scale, gradient, fixed main width, and similar risks.

Choose the closest 1 primary case and at most 1 auxiliary case. When there is no clear match, write `case_reference: none`.

## Case Index

- `cases/workspace-home.md`: workspace, portal, collaboration home, CRM tool home.
- `cases/data-table.md`: Base, data directory, table view.
- `cases/conversational-ai-home.md`: AI assistant, conversational tool, knowledge Q&A.
- `cases/official-home.md`: official home page, solution center, product introduction page.

## Usage Rules

- Borrow only structural experience, information density, visual rhythm, and reverse risks.
- Do not copy module order, business content, exact size, image ratio, or component count.
- Do not add a module to the current page just because the case has it.
- In Figma / screenshot tasks, cases must not rewrite source region order or primary / secondary relationships.
- A newer model's reasonable composition can take priority as long as it fits Feishu style and the user goal.

## Contract Pattern

```md
case_reference:
  case_id: workspace-home-001
  weight: low
  borrowed: light welcome area, vertical main spine, fewer dividers, left-aligned entry cards, recommended content needs visual anchor
  avoided: wall of cards, heavy gray background, excessive borders, mixed icons
  free_to_change: module order, business content, column count, visual-anchor type, and component composition
```

## Evaluation

After a case is matched, check only two things:

- whether mature experience suitable for the current task has been absorbed;
- whether common risks from the case have been avoided.

If the case conflicts with the current task, the current task takes priority.
