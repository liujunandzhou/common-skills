---
name: lark-design-prototype
description: 面向飞书 / Lark 风格网页、演示、原型和产品界面的分析、生成、复刻、实现与评审任务，适用于自然语言页面生成、截图或 Figma 还原、Web demo、设计规范提炼和视觉质量检查。作为飞书 UD 页面任务的轻量主入口，稳定产品意图、核心视觉风格、UD 控件样式策略、媒体策略、案例参考权重和质量验证边界，帮助产出具有飞书原生体验的界面。
---

# Lark Design Prototype

This is the lightweight design entry point for Feishu / Lark UI. It focuses on the parts that most affect style: surfaces, whitespace, radius, borders, typography, UD-style controls, media, and responsive quality. Page structure should be decided by the user goal, Figma / screenshot evidence, the primary product task, and the current composition.

## Usage Principles

1. Understand the source first. For natural-language tasks, write `scope_sketch`; for Figma / screenshot tasks, write `source_layout_evidence`, define `source_viewport_contract`, and do a brief scale calibration from stable source anchors before full implementation.
2. Then write a lightweight `lark_style_recipe`: style keywords, surfaces, whitespace, radius, boundaries, typography, control style strategy, media strategy, visual restraint, and verification focus.
3. When the user request is not specific enough, start with the minimum first-pass content set: product identity, primary task, one main visual or primary task area, one main content area, necessary primary actions, and a small set of realistic samples. The first screen usually keeps 2–3 visible content groups, table / list samples stay within 5–8 rows, and card samples stay within 4 items. Do not generate a KPI wall, long list, right-side insights, recent visits, multi-level navigation, or unrelated business modules all at once.
4. Areas that can be identified as UD system controls must follow Universe Design visual language, interaction states, sizing, and accessibility semantics when generated in React. Button, Input, Select, Tabs, Table, Menu, Dropdown, Drawer, Dialog, Tag, Badge, Avatar, Empty, and similar controls must not degrade into unstyled ordinary `div` elements.
5. Custom areas are mainly for the page shell, business composition containers, media slots, responsive grids, and one-off content structures. Custom areas should inherit the same UD visual language.
6. Keep the main content area, sidebar, accent colors, font weights, gradients, surface nesting, base grid, and workspace width restrained. The page body / `main-content` / right content area should prefer white or nearly white `bg-body`. Light gray is only for side navigation, low-emphasis shells, or local backing surfaces. The sidebar background must be written directly as `#f9f9f9`, and the selected sidebar item background must be written directly as `#1f23290d`; during implementation, use these two hex values directly and do not remap them to color tokens, CSS variables, `side-nav-bg`, or `side-nav-item-selected`. Selected sidebar item text uses font weight 500. Layout spacing, padding, gaps, column widths, and container offsets must follow the 4px base grid, reuse page-level spacing variables, and avoid random values. Blue and other accent colors are only for primary actions, links, focus, current state, real status, and a small amount of brand identification. Body text, descriptions, table content, and card descriptions are not bold by default. Avoid multiple nested background fills in the same area. Page UI does not use gradients. The main workspace stretches responsively within the available space after the navigation shell; do not apply a fixed max width to the whole `main-workspace` / `main-content`.
7. Recognize high-frequency frameworks by scene. When a page needs top navigation, sidebar, quick entry, or Hero, use the framework signatures in `DESIGN.md` to constrain its role, alignment, states, and style. Workspaces, home pages, launch pages, AI assistants, CRM summaries, empty states, and proposal first screens can actively introduce a Hero when the scene needs instant orientation. Do not add one when no signature is matched.
8. When the page needs icons, use `references/icon-semantics.md` and query the catalog with `scripts/icon-query.mjs`; page UI icons must be recalled from the catalog and then used in the implementation. Keep icon decisions traceable to catalog `name`, `hash`, family, visual type, and final URL. Catalog retrieval is not only for planning: selected catalog icons must be used in the actual implementation for functional UI icon slots. Do not replace catalog-recalled icons with text characters, emoji, CSS-only glyphs, hand-written SVG, third-party icon libraries, or generated bitmap icons, unless the area is explicitly icon-free or a catalog fallback has been recorded. Detailed rules for local catalog fallback, v2 priority, screenshot restoration, source outlined / filled / colorful matching, brand logos, area consistency, and lightweight checks live in `references/icon-semantics.md`.
9. Media should appear only when needed, but it must not be fully replaced by outlined icons. For Hero, welcome areas, recommended content, product entries, empty states, workspace home pages, and business summaries that need first-glance intent, first decide whether a visual anchor is needed. After a match, first check `references/assets/card-illustration-library.md`, then check UD / product assets. `media_plan` must record `library_lookup`. Use generated imagery only when the library has no semantically suitable asset, the CDN is unavailable, or the slot needs a more specific asset; generation scope is limited to the current media slot.
10. Case matching only provides inspiration. Cases can help identify mature structures and common risks, but they must not lock module order, page proportions, business content, or component count.
11. Verification focuses on the user-visible result: whether it feels like a real Feishu product, whether it is readable, scannable, responsive, and operable, and whether it reduces meaningless borders, shadows, accent colors, bold text, and nested backgrounds.

## Workflow

1. **Classify The Task**
   - Pure analysis / spec output: deliver design text only.
   - Page generation / Web demo / Figma restoration: continue with React implementation and browser verification.
   - Small local UI fragment: keep only the style and UD rules relevant to that fragment.

2. **Read The Minimum References**
   - Overall style: read `DESIGN.md`.
   - Vague natural-language request: read `references/prompt-expansion.md` to narrow scope and content filling.
   - Figma / screenshot restoration: read `references/layout-interaction.md` and `references/component-selection.md`; define `source_viewport_contract` and briefly calibrate scale from stable source anchors before implementation.
   - Page-level visual brief: read `references/visual-brief.md`.
   - Approval forms, settings forms, detail-edit pages, top bars, right helper rails, or feedback that says the page shell does not feel Feishu / Lark enough: read `references/form-shell-patterns.md`.
   - Page includes icons: read `references/icon-semantics.md` and use `scripts/icon-query.mjs --catalog <catalog.json|url|local> --query "<intent keywords>" --limit 3`. Do not print the full catalog.
   - Case-based inspiration: only when the page type is clearly close, read `references/case-matching.md` and the matching `references/cases/*.md`.
   - Media or generated imagery: read `references/assets/card-illustration-library.md` and `references/visual-style-prompts.md`.
   - Pre-delivery check: read `references/design-quality-checklist.md`.

3. **Form The Lightweight Contract**
   Use the fields in `references/page-contract.md`. Keep only enough detail to drive implementation. Small tasks may omit irrelevant fields. When top navigation, form shells, or right helper rails affect quality, include `top_nav_policy`, `right_rail_policy`, and `emphasis_budget`.

4. **Decide Components And Media**
   - Write `ud_control_coverage`, recording which visible controls follow UD visual language, states, and semantics.
   - Write `layout_signature_usage`, recording only matched frameworks such as top navigation, sidebar, quick entry, and Hero.
   - Write `icon_plan`, recording area-level icon strategy and selected catalog `name`, `hash` / `darkHash`, family, visual type, color semantic, and final URL.
   - Write `media_decision` and the necessary `media_plan`, explaining whether images are needed, their source, and fallback. Whenever `media_needed: true`, first write `library_lookup`, then decide whether to use `generated_bitmap`.

5. **Implement And Verify**
   - When controls are needed, generate them in React with UD-like sizing, typography, radius, borders, states, and interaction semantics. When icons are needed, use catalog `description`, `name`, and `hash` according to `references/icon-semantics.md` to generate CDN SVG URLs.
   - Before opening a browser for simple static HTML deliverables, run `scripts/verify-static-html.mjs <html-file>` plus any project-native static checks. Use Browser preview only when the task needs runnable interactions, high-fidelity visual validation, breakpoint proof, screenshot evidence, a local app server, or the user explicitly asks for browser verification.
   - When Browser preview is needed, prefer compact DOM/layout summaries, resource checks, and console logs before screenshots. Take screenshots only when visual evidence is necessary. If screenshot capture times out once, stop retrying screenshots, keep DOM/resource verification, and report the residual visual risk.
   - The final response should state the deliverable, verification result, tradeoffs, and remaining risks.

## Lightweight Contract

Contract fields are defined in `references/page-contract.md`. Small tasks keep only 5–8 key fields; page-level, Figma / screenshot, high-fidelity, and runnable demo tasks should add source evidence, UD-style control coverage, media plan, and verification plan.

## Reference Map

- `DESIGN.md`: Feishu style DNA, tokens, base control semantics, whitespace, borders, radius, shadows, media, and framework signatures.
- `references/page-contract.md`: lightweight contract fields and writing style.
- `references/component-selection.md`: UD-style control selection, control semantics, and custom fallback.
- `references/layout-interaction.md`: conversion from Figma / screenshots into responsive product UI.
- `references/visual-brief.md`: page-level visual goals, composition, and density.
- `references/form-shell-patterns.md`: approval / settings / detail form shells, top navigation, right helper rails, and emphasis budgets; read only when these regions affect quality.
- `references/prompt-expansion.md`: scope narrowing and content filling for vague natural-language requests.
- `references/visual-style-prompts.md`: style prompt fragments and generated-image fallback style.
- `references/assets/card-illustration-library.md`: asset index for available illustrations, avatars, product images, entry icons, and related media.
- `scripts/icon-query.mjs`: token-light icon catalog query. Use this instead of printing the full icon catalog.
- `scripts/verify-static-html.mjs`: token-light pre-browser checks for static HTML deliverables.
- `references/case-matching.md`, `references/cases/*.md`: low-weight case-based inspiration.
- `references/color-roles.md`, `references/token-semantics.md`, `references/icon-semantics.md`: read when finer token semantics, sidebar fixed-color exceptions, or icon decisions are needed.
- `references/restoration-traps.md`: common high-fidelity restoration risks.
- `references/design-quality-checklist.md`: pre-delivery quality check.

## Delivery Voice

Keep the final answer concise. Explain what you did, where the deliverable is, what you verified, and any remaining risks. Do not output the full long contract unless the user explicitly asks for it.
