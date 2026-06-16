# Changelog

## v0.1.0 (2026-06-16)

首个版本。

### 新功能
- 以 git submodule 方式引入 [pm-skills](https://github.com/phuryn/pm-skills) v2.0.0,位于 `repo/pm-skills`。
- 将 pm-skills 的全部 68 个 PM skill 通过相对软链接安装到 `.claude/skills/`,可直接被当前项目的 Claude Code 加载。
- 新增 README,说明 submodule + 软链接的安装、clone(`--recurse-submodules`)、更新与扩展方式。
