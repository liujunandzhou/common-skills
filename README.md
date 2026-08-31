# common-skills

一个 Claude Code skills 聚合仓库:把外部 skill 包以 **git submodule** 方式 vendored 进来,再通过 `.claude/skills/` 下的**相对软链接**暴露给当前项目的 Claude Code 使用。submodule 升级时,软链接自动指向新版本,无需重新安装。

## 当前内容

| Skill 包 | 来源 | 内容 |
|---|---|---|
| [pm-skills](https://github.com/phuryn/pm-skills) | `repo/pm-skills` (submodule) | 9 个 PM 插件,共 68 个 skill,覆盖产品发现、策略、执行、调研、数据分析、GTM、增长、工具箱、AI 交付 |
| [effective-html](https://github.com/plannotator/effective-html) | `repo/effective-html` (submodule) | 3 个 skill(html / html-diagram / html-plan),生成自包含、带暗色模式的精致 HTML 制品 |
| [last30days-skill](https://github.com/mvanhorn/last30days-skill) | `repo/last30days-skill` (submodule) | 1 个 skill(last30days),跨 Reddit/X/YouTube/TikTok/HN 等多源研究某话题的近 30 天讨论 |
| [codebase-to-course](https://github.com/zarazhangrui/codebase-to-course) | `repo/codebase-to-course` (submodule) | 1 个 skill(codebase-to-course),把代码库转成可交互的单页 HTML 教程 |
| [frontend-slides](https://github.com/zarazhangrui/frontend-slides) | `repo/frontend-slides` (submodule) | 1 个 skill(frontend-slides),生成前端幻灯片 |
| [beautiful-feishu-whiteboard](https://github.com/zarazhangrui/beautiful-feishu-whiteboard) | `repo/beautiful-feishu-whiteboard` (submodule) | 1 个 skill(beautiful-feishu-whiteboard),从 SVG 生成美观、可编辑的飞书画板 |
| [archify](https://github.com/tt-a1i/archify) | `repo/archify` (submodule) | 1 个 skill(archify),生成架构/流程/时序/数据流图为独立 HTML |
| [ego-lite](https://github.com/citrolabs/ego-lite) | `repo/ego-lite` (submodule) | 1 个 skill(ego-browser),给 AI Agent 用的浏览器自动化(快照/点击/填表/截图/抓取)。**需另装 macOS 版 ego lite 应用**才能用,见下 ⚠️ |
| [baoyu-skills](https://github.com/JimLiu/baoyu-skills) | `repo/baoyu-skills` (submodule) | 21 个 skill(baoyu-* 前缀),宝玉的内容创作工具集:文章配图/封面/信息图/漫画/幻灯片、翻译、Markdown 转 HTML、发布到公众号/微博/X、URL 转 Markdown、YouTube 字幕等 |
| [impeccable](https://github.com/pbakaus/impeccable) | `repo/impeccable` (submodule) | 1 个 skill(impeccable),给 AI coding agent 的前端设计指导:23 个子命令(init/audit/critique/polish/animate...)+ 59 条确定性检测规则。**完整检测需 `node_modules`**,见下 ⚠️ |
| [taste-skill](https://github.com/Leonxlnx/taste-skill) | `repo/taste-skill` (submodule) | 13 个 skill,anti-slop 前端设计工具集:taste-skill / taste-skill-v1(去模板味前端)、brandkit(品牌图)、brutalist/minimalist/soft/redesign 等风格、imagegen-frontend-web/mobile、image-to-code、gpt-tasteskill、stitch-skill、output-skill |
| lark-design-prototype | `repo/lark-design-prototype`(AgentBuddy,**非 submodule**,见下节) | 1 个 skill(lark-design-prototype),飞书风格网页/原型生成 |
| [humanizer-zh](https://github.com/op7418/Humanizer-zh) | `.agents/skills/humanizer-zh`(**非 submodule**,skills-lock 机制,见下节) | 1 个 skill(humanizer-zh),去除中文文本的 AI 生成痕迹 |
| [beautiful-html-templates](https://github.com/zarazhangrui/beautiful-html-templates) | `repo/beautiful-html-templates` (submodule) | 引用资源(**非 skill**):34 套 HTML 幻灯片模板库,详见 CLAUDE.md |
| [design.md](https://github.com/google-labs-code/design.md) | `repo/design.md` (submodule) | 引用资源(**非 skill**):Google Labs 的 DESIGN.md 设计系统规范,详见 CLAUDE.md |

> 共 **114 个 skill**(前 13 个包;后 2 个是"引用资源",不进 `.claude/skills/`)。仓库根目录的 [`index.html`](index.html) 是项目介绍页,用 effective-html 的 `html` skill 生成。

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
>
> ⚠️ `ego-browser`(ego-lite)链接通同样 ≠ 开箱即用:它依赖 **macOS 版 ego lite 应用**提供的 `ego-browser` 命令。首次用前需装应用并走一次 GUI onboarding(可选迁移 Chrome 登录态,应用会把 `ego-browser` 注册到 `~/.local/bin`)。安装脚本(仅 macOS)在 skill 目录内:`sh repo/ego-lite/skills/ego-browser/scripts/install.sh`;或从 https://lite.ego.app/ 下载。Windows/Linux 暂不支持。
>
> ⚠️ `impeccable` 的纯 prompt 指导开箱即用,但它内置的 **59 条确定性检测脚本**(`detect.mjs` / `audit` / `live` 浏览器迭代等)依赖 `htmlparser2`、`css-select`、`css-tree`、`domutils` 等 node 包。未装依赖时 `detect.mjs` 会降级为正则匹配(**漏报**,只报字体一类)。要完整检测,在 `repo/impeccable/` 里跑一次 `bun install`(或 `npm install`);`node_modules/` 已被 submodule 的 `.gitignore` 忽略,不会误提交。

> ⚠️ `taste-skill` 一包提供 **13 个 skill**,skill 目录名与 SKILL.md 里的 `name:` 不同(如目录 `taste-skill` → `name: design-taste-frontend`、`brutalist-skill` → `industrial-brutalist-ui`)。`.claude/skills/` 下按**目录名**软链,Claude Code 触发时按 **`name:`** 识别,二者都在。全为纯 prompt,无额外依赖。

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
>
> 注意:多数情况直接跑 `./install.sh` 即可,它会按约定自动扫描收集,无需手动软链。`install.sh` 会**跳过 submodule 内任意隐藏目录**(以点开头,如 `.cursor/`、`.opencode/`、`.gemini/`、`.agents/`、`.claude/`)里的 `SKILL.md`——像 `impeccable` 为 17 种 AI 工具各放了一份副本,只暴露非隐藏的规范位置(`repo/impeccable/plugin/skills/impeccable/`)。根目录的 `.agents/skills/*`(路径无前导 `/`)不受影响,仍会被收。

## 非 submodule 来源的 vendored skill(AgentBuddy 内部市场)

个别 skill 只发布在字节内部 skill 市场 `skills.byted.org`(AgentBuddy),**不在 GitHub**,无法作为 git submodule 引入。这类 skill 直接以**普通目录**vendored 在 `repo/<name>/` 下(不进 `.gitmodules`),`install.sh` 照样会扫描并软链。

目前只有一个:

| Skill | 来源 | 版本 |
|---|---|---|
| `lark-design-prototype` | `skills.byted.org/lark/universe_design`(AgentBuddy,非 submodule) | 1.0.4 |

更新 / 重新拉取(agentbuddy 仅作一次性下载,仓库运行时不依赖它):

```bash
# 下载到临时目录,再覆盖 repo/lark-design-prototype/
tmp=$(mktemp -d) && (cd "$tmp" && npm_config_registry="https://bnpm.byted.org" \
  npx --yes agentbuddy@latest skill add skills.byted.org/lark/universe_design \
  --skill lark-design-prototype --version <ver> -a claude-code -y --copy)
rm -rf repo/lark-design-prototype && cp -R "$tmp/.claude/skills/lark-design-prototype" repo/lark-design-prototype
./install.sh
```

## 非 submodule 来源的 vendored skill(GitHub + skills-lock)

个别 skill 从 GitHub 仓库直接取**单个** skill,而非整包 submodule。这类以**普通目录**vendored 在根目录 `.agents/skills/<name>/` 下(不进 `.gitmodules`),由根目录的 [`skills-lock.json`](skills-lock.json) 记录来源与内容哈希(`computedHash`)以便核对。`install.sh` 会同时扫描 `repo/` 和根 `.agents/skills/`,自动建软链。

目前只有一个:

| Skill | 来源 | 位置 |
|---|---|---|
| `humanizer-zh` | [op7418/Humanizer-zh](https://github.com/op7418/Humanizer-zh)(GitHub,非 submodule) | `.agents/skills/humanizer-zh/` |

更新时从源仓库重新拉取覆盖 `.agents/skills/humanizer-zh/`,同步更新 `skills-lock.json` 里的 `computedHash`,再跑 `./install.sh`。
