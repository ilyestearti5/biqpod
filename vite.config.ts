import { defineConfig } from "vite";
import dts, { PluginOptions } from "vite-plugin-dts";
import path from "path";
import pkg from "./package.json";
import react from "@vitejs/plugin-react";
export default defineConfig(({ command, mode }) => {
  const platform = mode;
  const options: PluginOptions = {
    tsconfigPath: "./tsconfig.json",
    rollupTypes: true,
    insertTypesEntry: true,
  };
  const alias = {
    "@": path.resolve("./src"),
    components: path.resolve("./src/components"),
    database: path.resolve("./src/data/db"),
    models: path.resolve("./src/data"),
    hooks: path.resolve("./src/hooks"),
    api: path.resolve("./src/apis"),
    utils: path.resolve("./utils"),
    main: path.resolve("./"),
    assets: path.resolve("./src/assets"),
  };
  const entry = {
    components: path.resolve(__dirname, "src/components/index.ts"),
    hooks: path.resolve(__dirname, "src/hooks/index.ts"),
    layouts: path.resolve(__dirname, "src/layouts/index.ts"),
    utils: path.resolve(__dirname, "src/utils/index.ts"),
    app: path.resolve(__dirname, "src/app/index.ts"),
    apis: path.resolve(__dirname, "src/apis/index.ts"),
    routes: path.resolve(__dirname, "src/routes/index.ts"),
    types: path.resolve(__dirname, "src/types/index.ts"),
  };
  if (command == "serve") {
    return {
      plugins: [react()],
      define: {
        global: "globalThis",
      },
      resolve: {
        alias,
      },
      server: {
        host: true,
        port: 4545,
      },
    };
  }
  if (platform.startsWith("lib")) {
    return {
      define: {
        global: "globalThis",
      },
      plugins: [react(), dts(options)],
      resolve: {
        alias,
      },
      build: {
        lib: {
          entry,
          name: pkg.name, // The name of the library
          fileName: (_, entry) => `${entry}.js`,
          formats: ["es"],
        },
        outDir: "./ui",
        rollupOptions: {
          // Ensure external dependencies are not bundled into your library
          external: ["react", "react-dom"],
          output: {
            format: "esm", // Universal Module Definition
          },
        },
        minify: true,
      },
    };
  } else if (platform == "web") {
    return {
      define: {
        global: "globalThis",
      },
      plugins: [react()],
      resolve: {
        alias,
      },
      build: {
        outDir: "./web",
      },
    };
  }
  throw "Invalid platform";
});
