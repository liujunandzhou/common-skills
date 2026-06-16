# common-skills

一个 Claude Code skills 聚合仓库:把外部 skill 包以 **git submodule** 方式 vendored 进来,再通过 `.claude/skills/` 下的**相对软链接**暴露给当前项目的 Claude Code 使用。submodule 升级时,软链接自动指向新版本,无需重新安装。

## 当前内容

| Skill 包 | 来源 | 版本 | 内容 |
|---|---|---|---|
| [pm-skills](https://github.com/phuryn/pm-skills) | `repo/pm-skills` (submodule) | v2.0.0 | 9 个 PM 插件,共 68 个 skill,覆盖产品发现、策略、执行、调研、数据分析、GTM、增长、工具箱、AI 交付 |
| [effective-html](https://github.com/plannotator/effective-html) | `repo/effective-html` (submodule) | main | 3 个 skill(html / html-diagram / html-plan),生成自包含、带暗色模式的精致 HTML 制品 |
| [last30days-skill](https://github.com/mvanhorn/last30days-skill) | `repo/last30days-skill` (submodule) | v3.3.2 | 1 个 skill(last30days),跨 Reddit/X/YouTube/TikTok/HN 等多源研究某话题的近 30 天讨论 |

> 共 **72 个 skill**。仓库根目录的 [`index.html`](index.html) 是项目介绍页,用 effective-html 的 `html` skill 生成。

## 安装(推荐用 install.sh)

clone 后跑一次 `install.sh`,它会自动初始化 submodule 并重建 `.claude/skills/`:

```bash
git clone https://github.com/liujunandzhou/common-skills.git
cd common-skills
./install.sh
```

`install.sh` 会:
1. `git submodule update --init --recursive`(即使你忘了 `--recurse-submodules` 也能补上);
2. 按 `<pack>/.../skills/<name>/SKILL.md` 约定,把所有 skill 重建到 `.claude/skills/`;
3. **默认软链接;若环境不支持(如 Windows)自动回退到复制**。可显式指定 `./install.sh --copy` 或 `./install.sh --symlink`。

> **Windows 用户**:git 默认可能不还原软链接。直接跑 `./install.sh`(会自动用复制模式),或 `./install.sh --copy`,即可正常使用。

手动方式(等价,仅 macOS/Linux):

```bash
git clone --recurse-submodules https://github.com/liujunandzhou/common-skills.git
# 软链接已在仓库里,submodule 拉到即可用
```

> ⚠️ `last30days` 这个 skill 自带 Python 脚本和 API key 配置(见其目录内的 CONFIGURATION.md),链接通 ≠ 开箱即用,运行前需按其说明装依赖、配密钥。PM / HTML 类 skill 为纯 prompt,无额外依赖。

## 目录结构

```
common-skills/
├── repo/
│   └── pm-skills/              # submodule,skill 实体所在
│       └── <plugin>/skills/<name>/SKILL.md
└── .claude/
    └── skills/
        └── <name> -> ../../repo/pm-skills/<plugin>/skills/<name>/   # 68 个相对软链接
```

## 更新 skill 包

```bash
# 拉取 pm-skills 最新版
git submodule update --remote repo/pm-skills
git add repo/pm-skills && git commit -m "chore: bump pm-skills"
```

软链接按 skill 名指向 submodule 内部,只要 submodule 内的 skill 目录结构不变,更新后无需重建链接。

## 再添加一个 skill 包

```bash
# 1. 作为 submodule 加到 repo/ 下
git submodule add <repo-url> repo/<name>

# 2. 把其中的 skill 目录软链接到 .claude/skills/(相对路径)
cd .claude/skills
for d in ../../repo/<name>/path/to/skills/*/; do
  ln -sfn "$d" "$(basename "$d")"
done
```

> 注意:`.claude/skills/` 下的 skill 目录名需全局唯一,避免跨包重名冲突。
