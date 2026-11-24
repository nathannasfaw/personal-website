// Build: copy the plain HTML/CSS site in ./site plus ./public into ./dist.
// No framework and no dependencies; wrangler.jsonc serves ./dist as static assets.
import { cpSync, rmSync, mkdirSync } from "node:fs";

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist");
cpSync("public", "dist", { recursive: true });
cpSync("site", "dist", { recursive: true });
console.log("built ./dist");
