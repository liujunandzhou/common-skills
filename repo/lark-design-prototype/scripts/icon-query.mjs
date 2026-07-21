#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SVG_BASE =
  "https://cdn-tos-cn.bytedance.net/obj/archi/ee/es-design-base/svgs";
const REMOTE_CATALOG =
  "https://lf0-fast-deliver-inner.bytedance.net/obj/eden-internal/vtlkunpzlkryhs/ljhwZthlaukjlkulzlp/chenningfeng.123/icons.catalog.json";
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const LOCAL_CATALOG = path.resolve(SCRIPT_DIR, "../data/icons/icons.catalog.json");

function usage() {
  return `Usage:
  node icon-query.mjs --catalog <local|remote|catalog.json|url> --query "<keywords>" [--family outlined] [--style v2-outlined|source-outlined|source-filled|source-colorful] [--shape normal|round] [--prefer-v2] [--require-v2] [--limit 5]

Returns a compact JSON array with name, hash, family, version, shape, score, description, and final svgUrl.
Never print the raw icon catalog during page generation.`;
}

function argValue(name, fallback = "") {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1] || fallback;
}

function argFlag(name) {
  return process.argv.includes(name);
}

function tokenize(text) {
  const rawTokens = String(text || "")
    .toLowerCase()
    .split(/[\s,，、:：;；/|()（）\[\]{}'"`<>.!?？。_-]+/)
    .map((item) => item.trim())
    .filter(Boolean);
  const aliases = {
    "搜索": ["search"],
    "查找": ["search"],
    "通知": ["notification", "bell"],
    "提醒": ["reminder", "bell"],
    "主页": ["home"],
    "首页": ["home"],
    "模板": ["template"],
    "文档": ["doc", "document", "file"],
    document: ["doc"],
    "文件": ["file"],
    "文件夹": ["folder"],
    "表格": ["sheet", "table", "bitable"],
    spreadsheet: ["sheet"],
    table: ["sheet"],
    "图表": ["chart"],
    "看板": ["dashboard", "chart"],
    "帮助": ["help", "faq"],
    "指南": ["guide", "info"],
    "飞书": ["feishu", "lark", "logo", "logotype"],
    "品牌": ["brand", "logo", "logotype"],
    "标识": ["logo", "logotype"],
    logo: ["brand", "logotype"],
  };
  const expanded = new Set(rawTokens);
  for (const token of rawTokens) {
    for (const alias of aliases[token] || []) {
      expanded.add(alias);
    }
  }
  return [...expanded];
}

async function readJsonFile(filePath) {
  const text = await fs.readFile(filePath, "utf8");
  return JSON.parse(text);
}

async function readCatalog(source) {
  const resolved = !source || source === "local" ? LOCAL_CATALOG : source === "remote" ? REMOTE_CATALOG : source;
  if (/^https?:\/\//.test(resolved)) {
    try {
      const response = await fetch(resolved);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return { catalog: await response.json(), catalogSource: resolved };
    } catch (error) {
      const catalog = await readJsonFile(LOCAL_CATALOG);
      return {
        catalog,
        catalogSource: LOCAL_CATALOG,
        fallbackReason: `remote catalog failed: ${error.message}`,
      };
    }
  }
  const filePath = path.resolve(resolved);
  return { catalog: await readJsonFile(filePath), catalogSource: filePath };
}

function detectVersion(name) {
  return /(?:^|[-_])v2(?:[-_]|$)/i.test(name) ? "v2" : "non-v2";
}

function detectShape(icon) {
  const name = icon.name.toLowerCase();
  if (name.includes("file-round-") || name.includes("wiki-round-")) return "round";
  if (icon.family === "colorful" && /(?:icon_|wiki-)?file[-_]/.test(name)) return "normal";
  return "none";
}

function detectStyleType(icon) {
  const version = detectVersion(icon.name);
  const shape = detectShape(icon);
  if (icon.family === "outlined") {
    return version === "v2" ? "v2-outlined" : "non-v2-outlined";
  }
  if (icon.family === "filled") {
    return "source-filled";
  }
  if (icon.family === "colorful" && /(?:feishu|lark).*logo|logotype|logo/i.test(icon.name)) {
    return "brand-colorful";
  }
  if (icon.family === "colorful" && version === "v2" && shape === "round") {
    return "file-v2-colorful-round";
  }
  if (icon.family === "colorful" && version === "v2" && shape === "normal") {
    return "file-v2-colorful-normal";
  }
  return icon.family;
}

function normalizeOptions() {
  const style = argValue("--style");
  const options = {
    family: argValue("--family", "outlined"),
    style,
    shape: argValue("--shape"),
    preferV2: argFlag("--prefer-v2"),
    requireV2: argFlag("--require-v2"),
    requireNonV2: argFlag("--require-non-v2"),
    include: argValue("--name-include"),
    exclude: argValue("--name-exclude"),
  };

  if (style === "v2-outlined") {
    options.family = "outlined";
    options.requireV2 = true;
  } else if (style === "non-v2-outlined") {
    options.family = "outlined";
    options.requireNonV2 = true;
  } else if (style === "file-v2-colorful-normal") {
    options.family = "colorful";
    options.requireV2 = true;
    options.shape = "normal";
    options.include ||= "file";
  } else if (style === "file-v2-colorful-round") {
    options.family = "colorful";
    options.requireV2 = true;
    options.shape = "round";
    options.include ||= "file-round";
  } else if (style === "source-outlined") {
    options.family = "outlined";
    options.preferV2 = true;
  } else if (style === "source-filled") {
    options.family = "filled";
  } else if (style === "brand-colorful" || style === "source-colorful") {
    options.family = "colorful";
    if (style === "source-colorful") {
      options.preferV2 = true;
    }
  }
  return options;
}

function flattenCatalog(catalog, options) {
  const rows = [];
  for (const category of catalog) {
    for (const [family, icons] of Object.entries(category.icons || {})) {
      if (options.family && family !== options.family) {
        continue;
      }
      for (const icon of icons || []) {
        const row = {
          category: category.id || "",
          family,
          name: icon.name,
          hash: icon.hash,
          darkHash: icon.darkHash,
          description: icon.description || "",
        };
        row.version = detectVersion(row.name);
        row.shape = detectShape(row);
        row.styleType = detectStyleType(row);
        rows.push(row);
      }
    }
  }
  return rows;
}

function passesFilters(icon, options) {
  const name = icon.name.toLowerCase();
  if (options.requireV2 && icon.version !== "v2") return false;
  if (options.requireNonV2 && icon.version !== "non-v2") return false;
  if (options.shape && icon.shape !== options.shape) return false;
  if (options.include && !name.includes(options.include.toLowerCase())) return false;
  if (options.exclude && name.includes(options.exclude.toLowerCase())) return false;
  const sourceStyles = new Set(["source-outlined", "source-filled", "source-colorful"]);
  if (options.style && !sourceStyles.has(options.style) && icon.styleType !== options.style) return false;
  return true;
}

function scoreIcon(icon, queryTokens, options) {
  const name = icon.name.toLowerCase();
  const description = icon.description.toLowerCase();
  let score = 0;
  for (const token of queryTokens) {
    if (name.includes(token)) score += 5;
    if (description.includes(token)) score += 3;
    if (name === `icon_${token}_outlined`) score += 8;
    if (name === `icon_${token}-v2_outlined`) score += 8;
    if (name === `icon_${token}_filled`) score += 8;
    if (name === `icon_file-${token}-v2_colorful`) score += 8;
  }
  if (icon.family === "outlined") score += 1;
  if ((options.preferV2 || options.style?.includes("v2")) && icon.version === "v2") score += 4;
  if (options.style === "brand-colorful" && /feishu|lark|logotype|logo/i.test(`${name} ${description}`)) score += 10;

  const objectTokens = ["doc", "document", "file", "card", "sheet", "bitable", "ai"];
  const queryHasObject = objectTokens.some((token) => queryTokens.includes(token));
  if (!queryHasObject && objectTokens.some((token) => name.includes(`_${token}`) || name.includes(`-${token}`))) {
    score -= 3;
  }
  return score;
}

const catalogSource = argValue("--catalog", "local");
const query = argValue("--query");
const limit = Math.max(1, Number.parseInt(argValue("--limit", "5"), 10) || 5);

if (!query) {
  console.error(usage());
  process.exit(2);
}

const options = normalizeOptions();
const queryTokens = tokenize(query);
const { catalog, catalogSource: usedCatalogSource, fallbackReason } = await readCatalog(catalogSource);
const matches = flattenCatalog(catalog, options)
  .filter((icon) => passesFilters(icon, options))
  .map((icon) => ({ ...icon, score: scoreIcon(icon, queryTokens, options) }))
  .filter((icon) => icon.score > 0)
  .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
  .slice(0, limit)
  .map((icon) => ({
    name: icon.name,
    hash: icon.hash,
    darkHash: icon.darkHash || undefined,
    family: icon.family,
    version: icon.version,
    shape: icon.shape,
    styleType: icon.styleType,
    score: icon.score,
    description: icon.description.slice(0, 180),
    svgUrl: `${SVG_BASE}/${icon.name}.${icon.hash}.svg`,
    catalogSource: usedCatalogSource,
    fallbackReason: fallbackReason || undefined,
  }));

console.log(JSON.stringify(matches, null, 2));
