# Prompt Expansion

Use this reference when the source of truth is natural language and the prompt is vague, implies multiple pages, or gives detailed layout without interaction details. Clear single-page requests only need a short `scope_sketch` before entering the contract.

## Tiers

- Tier 1, clear single page: The user clearly states the page or component and it maps directly to a Feishu enterprise pattern, such as an approval list, user detail drawer, or permission management page. Write a brief 3–5 line sketch.
- Tier 2, vague single page: The user only says CRM, data dashboard, workspace, and similar terms, and the primary view or primary object is not clear enough. First reference `product-patterns.md`, choose the most conservative main pattern, and write the inference into `conservative_assumptions`. Use only the minimum first-pass content set and keep the view clean.
- Tier 3, detailed layout: The user has already provided a structure such as left navigation, top toolbar, and main content area, but has not specified interactions, states, or responsive behavior. Keep the structure and fill behavior and states for every region.
- Tier 4, multi-page or system-level: The user asks for a complete system, platform, or admin suite. First define the page list and scope boundaries, then write a sketch for the primary page.

## Scope Sketch

Natural-language tasks need `scope_sketch` before the contract. It acts like visible layout evidence from a screenshot and locks intent and scope.

```md
scope_sketch:
  pages:
    - name:
      primary_task:
      key_regions:
      key_interactions:
      key_states:
  flow_relationships:
  scope_boundary:
    in:
    out:
  conservative_assumptions:
  must_resolve:
```

Field guide:

- `pages`: Pages or top-level views in scope. A single-page task has one item.
- `primary_task`: The primary work the user completes on the page, not a component list.
- `key_regions`: Shell, navigation, header, filters, content, side rail, floating layers, and feedback.
- `key_interactions`: Triggered actions and state changes, such as filters updating a table or row click opening a drawer.
- `key_states`: loading, empty, filtered-empty, error, selected, drawer-open, dialog-open, and similar states.
- `flow_relationships`: Navigation or state transitions between pages; omit for a single-page task.
- `scope_boundary.in`: Pages, views, and capabilities completed in this round.
- `scope_boundary.out`: Related capabilities clearly excluded, with reason.
- `conservative_assumptions`: Conservative inferences based on common Feishu patterns.
- `must_resolve`: Questions that affect page structure, navigation, or primary interaction and cannot be conservatively filled.

## Expansion Methods

Tier 1: Write a compact sketch including primary task, key regions, key interactions, and key states.

```md
scope_sketch:
  pages:
    - name: Approval List
      primary_task: users view, filter, and operate pending approval records
      key_regions: content header, search/filter toolbar, data table, pagination, row detail drawer
      key_interactions: search / filters update table, row click opens detail drawer, batch selection triggers batch actions
      key_states: loading, empty, filtered-empty, selected, drawer-open
  scope_boundary:
    out: approval initiation flow keeps only an entry point
  conservative_assumptions:
    - approval statuses default to pending, approved, rejected, and withdrawn
```

Tier 2: Choose the main pattern from `product-patterns.md`. If two patterns are both reasonable, prefer the one with clearer data and a more stable primary path, and keep the other as an open question.

For vague single pages, add a default `content_fill_policy`: keep product identity, primary task, optional Hero or primary task area, one main content area, necessary primary action, and a small set of samples. Do not proactively add KPI walls, long lists, right-side insights, recommended content, recent visits, quick entries, or multi-level navigation unless the primary task needs them. First stabilize the main content white base, neutral sidebar selected state, a small amount of accent color, restrained font weight, at most two surface layers, and the 4px grid. Then add content.

First-pass content budget:

- The first screen usually has only 2–3 visible content groups.
- Table / list samples use 5–8 rows; card samples use 3–4 items.
- KPIs appear only when the primary task needs them, with 1–3 items, and no full metric wall.
- Right auxiliary areas and recent visits are added only when directly needed by the primary task. Omit by default first.
- The bottom of the page may keep whitespace. Do not fill the view with unsupported content.

When the page name or scene naturally needs first-glance intent, the opening can become `hero-card`, such as workspace, portal, home page, launch page, AI assistant, CRM / sales summary, data-insight entry, recommendation, and empty state. Strong table, settings, audit, approval detail, and form tasks default to title-area openings.

Tier 3: Accept the user-provided layout structure and fill four things:

- Whether every region is static display, clickable entry, or dynamic data list.
- Which regions need loading, empty, error, and filtered-empty states.
- Ownership of hover, active, selected, and disabled states for every control.
- How regions collapse, wrap, or move at the compact breakpoint.

Tier 4: First build a page list:

- `primary`: primary page fully implemented in this round.
- `secondary`: placeholder pages connected by navigation.
- `out`: pages or capabilities clearly excluded.

A complete interactive primary page is usually better than multiple half-finished pages. Every navigation item needs a target, even if that target is a recorded placeholder page.

## Ambiguity Handling

Ask the user first when:

- The number of top-level pages is unclear and affects navigation structure.
- The primary task cannot be reasonably inferred from the prompt.
- User constraints directly conflict with mature Feishu / UD patterns and affect component candidates.

Fill conservatively when:

- Field names, status labels, and a small set of sample data are needed.
- A secondary function can use a drawer or placeholder page.
- Icon intent has a common default.
- Mock data and real data source are unspecified.

Record conservative fill-ins in `conservative_assumptions` so the user can correct them later.
