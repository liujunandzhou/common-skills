#!/usr/bin/env bash
#
# install.sh — 把 repo/ 下各 submodule 里的 skill 安装到 .claude/skills/
#
#   ./install.sh           默认软链接;若环境不支持软链接(如 Windows)自动回退到复制
#   ./install.sh --copy     强制复制(跨平台最稳,但更新需重跑)
#   ./install.sh --symlink  强制软链接(不回退)
#
# 脚本会：
#   1. 初始化/更新所有 git submodule(规避忘记 --recurse-submodules)
#   2. 清空并重建 .claude/skills/,按 <pack>/.../skills/<name>/SKILL.md 约定收集 skill
#
set -eu

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

MODE="auto"
case "${1:-}" in
  --copy)    MODE="copy" ;;
  --symlink) MODE="symlink" ;;
  "")        MODE="auto" ;;
  *) echo "未知参数: $1"; echo "用法: ./install.sh [--copy|--symlink]"; exit 1 ;;
esac

# 1. 确保 submodule 已拉取 ----------------------------------------------------
if [ -f .gitmodules ]; then
  echo "==> 初始化/更新 submodule ..."
  git submodule update --init --recursive
fi

SKILLS_DIR=".claude/skills"
mkdir -p "$SKILLS_DIR"

# 2. 探测软链接支持(auto 模式) ----------------------------------------------
if [ "$MODE" = "auto" ] || [ "$MODE" = "symlink" ]; then
  probe="$SKILLS_DIR/.symlink-probe"
  rm -f "$probe" 2>/dev/null || true
  if ln -s . "$probe" 2>/dev/null && [ -L "$probe" ]; then
    rm -f "$probe"
    MODE="symlink"
  else
    rm -f "$probe" 2>/dev/null || true
    if [ "$MODE" = "symlink" ]; then
      echo "!! 当前环境不支持软链接,无法用 --symlink。请改用 --copy" >&2
      exit 1
    fi
    echo "==> 环境不支持软链接,自动改用复制模式"
    MODE="copy"
  fi
fi

# 3. 清空旧的并重建 -----------------------------------------------------------
echo "==> 重建 $SKILLS_DIR (模式: $MODE) ..."
find "$SKILLS_DIR" -mindepth 1 -maxdepth 1 -exec rm -rf {} +

count=0
seen=""
# 约定:收两种布局
#   repo/<pack>/.../skills/<name>/SKILL.md  —— parent == skills(多 skill 的 pack)
#   repo/<name>/SKILL.md                    —— parent == repo(SKILL.md 直接在 submodule 根)
# 其余位置(如 references/ 里的 SKILL.md)忽略。
for skillmd in $(find repo -type f -name SKILL.md | sort); do
  dir="$(dirname "$skillmd")"
  parent="$(basename "$(dirname "$dir")")"
  case "$parent" in
    skills|repo) ;;
    *) continue ;;
  esac
  name="$(basename "$dir")"

  case " $seen " in
    *" $name "*) echo "  ! 跳过重名 skill: $name"; continue ;;
  esac
  seen="$seen $name"

  if [ "$MODE" = "symlink" ]; then
    ln -sfn "../../$dir" "$SKILLS_DIR/$name"
  else
    cp -R "$dir" "$SKILLS_DIR/$name"
  fi
  count=$((count + 1))
done

echo "==> 完成:已安装 $count 个 skill 到 $SKILLS_DIR(模式: $MODE)"
echo "    在本仓库启动 Claude Code 后用 /reload-skills 识别,/<skill-name> 触发。"
