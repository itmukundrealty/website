const fs = require("fs");
const path = require("path");

const filesToPatch = [
  path.join(__dirname, ".open-next/server-functions/default/handler.mjs"),
  path.join(__dirname, ".open-next/worker.js")
];

for (const filePath of filesToPatch) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, "utf8");
    let initial = content;

    // Patch 1: Function.apply(null, scopeParams).apply(null, scopeValues)
    content = content.replace(
      /Function\.apply\(null,(\w+)\)\.apply\(null,(\w+)\)/g,
      "(function(){try{return Function.apply(null,$1).apply(null,$2)}catch(e){return function(){}}})()"
    );

    // Patch 2: Function(source)()
    content = content.replace(
      /Function\((\w+)\)\(\)/g,
      "(function(){try{return Function($1)()}catch(e){return function(){}}})()"
    );

    if (content !== initial) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`[patch-worker] Successfully patched dynamic Function in: ${path.basename(filePath)}`);
    } else {
      console.log(`[patch-worker] No unhandled dynamic Function found in: ${path.basename(filePath)}`);
    }
  }
}

// Ensure _headers is present in .open-next/assets for Cloudflare static caching
const headersSrc = path.join(__dirname, "public/_headers");
const headersDest = path.join(__dirname, ".open-next/assets/_headers");
if (fs.existsSync(headersSrc) && fs.existsSync(path.dirname(headersDest))) {
  fs.copyFileSync(headersSrc, headersDest);
  console.log("[patch-worker] Copied public/_headers to .open-next/assets/_headers");
}

