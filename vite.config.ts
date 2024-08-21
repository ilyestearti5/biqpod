import path from "node:path";
import react from "@vitejs/plugin-react";
import pkg from "./package.json";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
export default defineConfig(({ command }) => {
  const args = process.argv.slice(2);
  const platform = args[2];
  const alias = {
    "@": path.resolve("./src"),
    Components: path.resolve("./src/components"),
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
  };
  if (command == "serve") {
    return {
      plugins: [react()],
      resolve: {
        alias,
      },
    };
  }
  if (platform == "lib") {
    return {
      plugins: [
        react(),
        dts({
          tsconfigPath: "./tsconfig.json", // Path to your tsconfig
          rollupTypes: true, // Bundle all .d.ts files into one
          insertTypesEntry: true, // Create a single index.d.ts file
        }),
      ],
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
        rollupOptions: {
          // Ensure external dependencies are not bundled into your library
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
            format: "esm", // Universal Module Definition
          },
        },
        minify: true,
      },
    };
  } else if (platform == "web") {
    return {
      plugins: [react()],
      resolve: {
        alias,
      },
      build: {
        outDir: "./web",
      },
    };
  }
  throw Error("Invalid platform");
});
