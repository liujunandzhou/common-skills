# Form Shell Patterns

Use this reference only for approval forms, settings forms, detail-edit pages, top bars, right helper rails, or tasks that mention weak Feishu / Lark shell feeling. Keep the main skill lightweight by loading this file only when these regions affect the page quality.

## Top Navigation

Top bars in form and approval tools should feel like a product shell, not a marketing header.

- Height: 56-64px. Use 64px for `top-nav-primary`; use 56px for compact tool pages when source evidence supports it.
- Surface: `bg-body` with a 0.5px weak bottom divider. Avoid shadow, gray backing, or rounded shell treatment.
- Left region: app icon or product mark plus product / space name. Keep it compact, left aligned, and vertically centered. Product name usually uses 16px / 24px / 500.
- Right region: low-emphasis entries such as help, records, settings, notification, and avatar. Text entries default to 14px / 22px / 400; the current entry may use 500.
- Business actions such as submit, save, create, approve, reject, and export belong in the page title area or primary task area by default. Put them in the top bar only when source evidence clearly places them there.
- Do not repeat the same page title in both the top bar and the page header. The top bar identifies the product or space; the page header identifies the current task.
- Avoid oversized logos, 600-weight nav labels, high-saturation avatar fills, large primary buttons, duplicated search entry, and empty wide top bars with only two text links.

## Page Title And Actions

Form pages should open with a concise task header.

- Breadcrumb or location text: 14px / 22px / 400, `text-caption`.
- Page title: 24px / 36px / 600 for the only page-level title.
- Description: 14px / 22px / 400, `text-caption`, up to two lines.
- Primary and secondary actions sit on the right side of the title area at standard width, then wrap under the title on narrow width.
- Button labels stay 14px / 22px / 400. Priority comes from fill, order, and placement.

## Right Helper Rail

Right rails in forms are auxiliary. They should reduce hesitation without competing with the form.

- Use a right rail only when it explains form rules, approval flow, permissions, risk, or contextual help that affects the current task.
- Common width: 320-360px. Use 384px only for richer details with proven need. Gap from main content: 24px.
- Prefer one light rail group or two small groups. Avoid a stacked card wall.
- Surface choices:
  - `plain_helper_rail`: no full card frame; use section titles, whitespace, and weak dividers.
  - `light_panel_rail`: 0.5px `line-border-card`, 8px radius, 16-20px padding, no shadow.
  - `drawer_on_demand`: use when helper content is long or rarely needed.
- Title: 14px / 22px / 500 or 16px / 24px / 500 only when the rail has one main group.
- Body, bullets, metadata, helper links, and approval descriptions: 12-14px / 20-22px / 400.
- Number chips and step indicators should be small, neutral, and quiet. They should not become colorful KPI badges.
- At `narrow`, merge the rail below the form. At `compact`, place helper content after the primary form or behind a help entry.
- Avoid heavy borders around every rail group, big section titles, bold bullet text, strong gray blocks, shadows, decorative icons, and high-saturation status colors unless they express real state.

## Emphasis Budget

Use font weight to create one clear reading path.

| Region | Default treatment |
| --- | --- |
| Page title | 24px / 36px / 600, only one per page |
| Section title | 16px / 24px / 500 |
| Form label | 14px / 22px / 500 |
| Form value / input text | 14px / 22px / 400 |
| Button label | 14px / 22px / 400 |
| Right rail title | 14px / 22px / 500 |
| Right rail body | 12-14px / 20-22px / 400 |
| Approval step owner | 14px / 22px / 500 |
| Approval step description | 12px / 20px / 400 |

One local information group should usually contain only one 500-weight layer. Do not bold title, description, bullet body, step owner, metadata, and action text at the same time.

## Approval Form Pattern

Use this pattern for approval, permission, access, procurement, leave, reimbursement, and similar form pages.

```md
approval_form_page:
  shell: compact top bar with product / space identity and low-emphasis utility entries
  header: breadcrumb + page title + description + page-level actions
  main: external section titles + light form surfaces, using UD controls
  rail: helper rules and approval path with low emphasis
  primary_action: page title area, not top nav by default
  no_hero: true
  no_card_wall: true
```

Check that the page still works without the rail. If the main task becomes unclear without the rail, move essential guidance into the form itself.
