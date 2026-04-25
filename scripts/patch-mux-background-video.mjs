import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const reactJs = path.join(
  __dirname,
  "../node_modules/@mux/mux-background-video/dist/react.js",
);

if (!fs.existsSync(reactJs)) {
  console.log("patch-mux-background-video: package not installed; skipping");
  process.exit(0);
}

let s = fs.readFileSync(reactJs, "utf8");

if (s.includes("this.#e?.unload?.()") && s.includes("d.current.destroy?.()")) {
  console.log("@mux/mux-background-video/dist/react.js already patched; skipping");
  process.exit(0);
}

const destroyOld =
  'destroy(){this.display?.removeEventListener("play",this.#s),this.display?.removeEventListener("play",this.#a),this.#t=void 0,this.#e=void 0,this.#n="",this.#r={},this.#i=void 0}';
const destroyNew =
  'destroy(){this.display?.removeEventListener("play",this.#s),this.display?.removeEventListener("play",this.#a),this.#e?.unload?.(),this.#t=void 0,this.#e=void 0,this.#n="",this.#r={},this.#i=void 0}';

const hlsOld =
  'attachMedia(e){this.#t=e}loadSource(e){this.#e=e,this.#t&&(this.config.debug&&console.info("load",this.#e,this.config),this.#r?.(),this.#r=L(this.#e,this.#t,this.config))}};var se';
const hlsNew =
  'attachMedia(e){this.#t=e}loadSource(e){this.#e=e,this.#t&&(this.config.debug&&console.info("load",this.#e,this.config),this.#r?.(),this.#r=L(this.#e,this.#t,this.config))}unload(){this.#r?.(),this.#r=void 0}};var se';

const cleanupOld = "()=>{d.current&&(d.current=null)}";
const cleanupNew = "()=>{d.current&&(d.current.destroy?.(),d.current=null)}";

if (!s.includes(destroyOld)) {
  console.error("patch-mux-background-video: destroy snippet not found (version mismatch?)");
  process.exit(1);
}
if (!s.includes(hlsOld)) {
  console.error("patch-mux-background-video: HlsMini snippet not found");
  process.exit(1);
}
if (!s.includes(cleanupOld)) {
  console.error("patch-mux-background-video: React cleanup snippet not found");
  process.exit(1);
}

s = s.replace(destroyOld, destroyNew).replace(hlsOld, hlsNew).replace(cleanupOld, cleanupNew);
fs.writeFileSync(reactJs, s);
console.log("patched @mux/mux-background-video/dist/react.js");
