# Changelog

## v0.2.0 (2026-06-16)

### 新功能
- 以 git submodule 方式引入 [effective-html](https://github.com/plannotator/effective-html),位于 `repo/effective-html`,并将其 3 个 skill(`html`、`html-diagram`、`html-plan`)软链接到 `.claude/skills/`。现共 71 个 skill。
- 新增项目介绍页 `index.html`(用 effective-html 的 `html` skill 生成,自包含、带暗色模式)。

### 文档
- README「当前内容」表格补充 effective-html 一行,并标注 `index.html`。

## v0.1.0 (2026-06-16)

首个版本。

### 新功能
- 以 git submodule 方式引入 [pm-skills](https://github.com/phuryn/pm-skills) v2.0.0,位于 `repo/pm-skills`。
- 将 pm-skills 的全部 68 个 PM skill 通过相对软链接安装到 `.claude/skills/`,可直接被当前项目的 Claude Code 加载。
- 新增 README,说明 submodule + 软链接的安装、clone(`--recurse-submodules`)、更新与扩展方式。
