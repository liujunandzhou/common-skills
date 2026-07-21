#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";

function usage() {
  return `Usage:
  node verify-static-html.mjs <file.html>

Runs token-light pre-browser checks for Lark-style static HTML deliverables.`;
}

const htmlPath = process.argv[2];
if (!htmlPath) {
  console.error(usage());
  process.exit(2);
}

const absoluteHtmlPath = path.resolve(htmlPath);
const rootDir = path.dirname(absoluteHtmlPath);
const html = await fs.readFile(absoluteHtmlPath, "utf8");

const hardFailures = [];
const warnings = [];
const passed = [];

function pass(name, ok, failMessage, warn = false) {
  if (ok) {
    passed.push(name);
  } else if (warn) {
    warnings.push(failMessage);
  } else {
    hardFailures.push(failMessage);
  }
}

pass("no gradients", !/(linear-gradient|radial-gradient|conic-gradient)/i.test(html), "Page UI contains gradients.");
pass("no ordinary shadows", !/box-shadow\s*:/i.test(html), "Page UI contains box-shadow.");
pass("fixed sidebar background", html.includes("#f9f9f9"), "Sidebar background #f9f9f9 is missing.");
pass("fixed selected sidebar state", html.includes("#1f23290d"), "Selected sidebar state #1f23290d is missing.");
pass("has table", /<table[\s>]/i.test(html), "No table found.", true);
pass("has search input", /type=["']search["']/i.test(html), "No search input found.", true);
pass("has local responsive CSS", /@media\s*\(/i.test(html), "No responsive media query found.", true);

const imageRefs = [...html.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["']/gi)].map((match) => match[1]);
const localImageRefs = imageRefs.filter((src) => !/^(https?:)?\/\//.test(src) && !src.startsWith("data:"));
const missingImages = [];
for (const src of localImageRefs) {
  const imagePath = path.resolve(rootDir, src);
  try {
    await fs.access(imagePath);
  } catch {
    missingImages.push(src);
  }
}

pass("all local images exist", missingImages.length === 0, `Missing local image assets: ${missingImages.join(", ")}`);

const tableHeaders = [...html.matchAll(/<th\b[^>]*>([\s\S]*?)<\/th>/gi)]
  .map((match) => match[1].replace(/<[^>]+>/g, "").trim())
  .filter(Boolean);

console.log(
  JSON.stringify(
    {
      file: absoluteHtmlPath,
      passed,
      warnings,
      hardFailures,
      stats: {
        images: imageRefs.length,
        localImages: localImageRefs.length,
        tableHeaders,
      },
    },
    null,
    2,
  ),
);

if (hardFailures.length > 0) {
  process.exit(1);
}
