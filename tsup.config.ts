import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    outDir: "dist",
    target: "esnext",
    platform: "node",
    sourcemap: true,
    clean: true,
    dts: true,
    splitting: true,
    treeshake: true,
});
