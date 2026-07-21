# Product Patterns

Read only the sections relevant to the current task. Product patterns help judge the primary task and component tendency, not fixed module order.

## App Shell / Side Navigation

Persistent side navigation suits primary entries, space switching, and long-running workflows. Use icon + label by default, keep left alignment, and maintain a single current item. At standard width, the sidebar is usually 224–280px; navigation items are 38–40px high, 6px radius, 8px horizontal padding, 18–24px icons, 10–12px icon-to-text gap, and 2px vertical spacing between items. At compact viewports, it can become a top entry, drawer, or bottom navigation, but current page identity must stay visible. Collapsed state must not compress text navigation into initials or single characters.

When the top bar is the main frame, the left sidebar is only auxiliary navigation. It starts below the top bar, usually uses `bg-body`, and is separated from content by a 0.5px vertical divider.

## Workspace / Portal

Suitable for office home pages, collaboration entries, and portal aggregation pages. You can read `references/cases/workspace-home.md` for low-weight inspiration.

Tendencies:

- vertical main spine;
- light welcome Hero or key summary appears only when needed;
- quick entries, recommended content, and recent visits are decided by the task;
- right auxiliary area remains only when it has a clear information responsibility;
- large workspaces keep light surfaces and few dividers.

## CRM / Sales Workspace

Suitable for customer operations, sales dashboards, opportunity progression, and follow-up tasks.

Tendencies:

- the main anchor is customers, opportunities, follow-up tasks, forecast summary, or stage progress;
- CRM home pages, sales dashboards, and growth summaries may use Hero to carry one key judgment, a small set of actions, and optional data visual;
- data lists keep fields that drive action;
- metrics and summaries stay light, with no ordinary card shadows;
- illustrations appear only in Hero, empty states, entries, or explanatory summaries when needed;
- sidebars and top tools keep a clean work-product rhythm.

## Data Table / Directory

Suitable for Base, file directories, data views, and knowledge-base directories. You can read `references/cases/data-table.md`.

Tendencies:

- table, list, or directory grid is the primary path;
- filters, search, view switches, and pagination follow UD-style control patterns;
- table body stays single-line and 400 weight. Do not stack customer name + industry, object name + description, or time + note inside one cell; move auxiliary information into columns, tooltip, or detail panel.
- thumbnails, file icons, and metadata enhance realism;
- avoid turning the data primary path into a decorative dashboard.

## AI / Conversational Tools

Suitable for AI assistants, knowledge Q&A, agent entries, and generation tools. You can read `references/cases/conversational-ai-home.md`.

Tendencies:

- the main anchor is input area, assistant identity, recommended questions, or response stream;
- home-style AI assistants can use Hero to express assistant identity, capability boundary, and one main input / primary action;
- AI visuals stay restrained and only serve real intelligent capability;
- recommended questions need to be specific and executable;
- sidebar history and tool entries stay clean and clear.

## Docs / CCM

Document surfaces express ownership, recent use, sharing state, and create entries. Lists and directories should be scannable. Document categories can use tabs, filters, or directory tree.

Typical components: Table / List, Tabs, Button, Dropdown, Tag, Empty, Dialog, Drawer, Upload.

## Calendar

Calendar pages emphasize time hierarchy. Event cards need clear encoding of state, time, participants, location, or meeting entry.

Typical components: Calendar / DatePicker, Card, Tag, Avatar, Popover, Drawer, Button.

## Approval / Workflow

Approval pages emphasize current state, process chain, risk fields, attachments, and operation history. The primary action area should be stable.

Typical components: Form, Steps, Timeline, DetailsDisplay, Table, Tag, Button, Dialog, Drawer.

## Admin / Settings

Settings and admin pages should be quiet and practical. Fields are organized by section, and members, permissions, apps, audit logs, and policies prefer tables.

Typical components: Layout, Menu, Form, Table, Switch, Select, Button, Dialog, Drawer.

## Official Site / Solution Center

Official sites and solution centers can be more expressive, while still staying clean, trustworthy, and product-signaling. You can read `references/cases/official-home.md`.

Tendencies:

- first screen clearly states product or solution theme;
- single primary CTA;
- product UI image, solution graphic, or real business thumbnail as visual anchor;
- lower sections provide functions, scenarios, customer trust, and entries.
