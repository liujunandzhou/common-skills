# Changelog

## v0.3.0 (2026-06-16)

### 新功能
- 以 git submodule 方式引入 [last30days-skill](https://github.com/mvanhorn/last30days-skill) v3.3.2,位于 `repo/last30days-skill`,并将 `last30days` skill 软链接到 `.claude/skills/`。现共 72 个 skill。
- 新增 `install.sh`:clone 后一条命令自动初始化 submodule 并重建 `.claude/skills/`。默认软链接,环境不支持时(如 Windows)自动回退到复制;支持 `--copy` / `--symlink` 显式指定。

### 文档
- README 补充 last30days 一行、install.sh 安装说明,以及 Windows 软链接限制与 last30days 额外依赖(Python 脚本 + API key)的提示。

### 其他
- 归一化 `.claude/skills/` 下软链接的目标路径(去除末尾 `/`),使其与 `install.sh` 生成结果一致,保证脚本幂等。

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
