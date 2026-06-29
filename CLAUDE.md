# common-skills

一个 Claude Code skills 聚合仓库:外部 skill 包以 git submodule 形式 vendored 在 `repo/` 下,再通过 `.claude/skills/` 的相对软链接暴露给本项目。运行 `./install.sh` 可自动初始化 submodule 并重建 `.claude/skills/`(软链接,环境不支持时自动改复制)。详见 [README.md](README.md)。

## 引用资源

### beautiful-html-templates(HTML 幻灯片模板库)

`repo/beautiful-html-templates/` 是一个含 34 套 HTML 幻灯片模板的库(agent 面向),**不是 skill**,不在 `.claude/skills/` 里,需主动引用。

当用户需要做一份**好看的 HTML 幻灯片 / slide deck**时:

1. 先读 `repo/beautiful-html-templates/AGENTS.md` —— 它是操作手册,规定了完整工作流(先问 occasion + mood → 读 `index.json` 选 3 个候选 → clone 模板 → 替换为用户真实内容 → 预览)。
2. 模板目录在 `repo/beautiful-html-templates/templates/<slug>/`,目录索引在 `repo/beautiful-html-templates/index.json`。
3. 严格按 AGENTS.md 的步骤执行,不要跳过澄清和预览环节。

> 与 `effective-html` 的 `/html` skill 区别:`/html` 是从零生成单页 HTML 制品;beautiful-html-templates 是**挑选并套用现成的幻灯片模板**。做整套 deck 优先用后者。
