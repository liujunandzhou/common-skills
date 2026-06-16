# common-skills

一个 Claude Code skills 聚合仓库:把外部 skill 包以 **git submodule** 方式 vendored 进来,再通过 `.claude/skills/` 下的**相对软链接**暴露给当前项目的 Claude Code 使用。submodule 升级时,软链接自动指向新版本,无需重新安装。

## 当前内容

| Skill 包 | 来源 | 版本 | 内容 |
|---|---|---|---|
| [pm-skills](https://github.com/phuryn/pm-skills) | `repo/pm-skills` (submodule) | v2.0.0 | 9 个 PM 插件,共 68 个 skill,覆盖产品发现、策略、执行、调研、数据分析、GTM、增长、工具箱、AI 交付 |

## Clone

因为 skill 实体在 submodule 里,必须递归拉取,否则 `.claude/skills/` 下的软链接会指向空目录、skill 无法加载:

```bash
git clone --recurse-submodules git@github.com:liujunandzhou/common-skills.git

# 已经 clone 但漏了 submodule:
git submodule update --init
```

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
