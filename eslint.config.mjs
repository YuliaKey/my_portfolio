import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  importPlugin.configs.recommended,
  {
    settings: {
      "import/resolver": {
        alias: {
          map: [
            ["@components", "./src/components"],
            ["@atoms", "./src/components/atoms"],
            ["@molecules", "./src/components/molecules"],
            ["@organisms", "./src/components/organisms"],
            ["@templates", "./src/components/templates"],
            ["@styles", "./src/styles"],
            ["@utils", "./src/utils"],
            ["@hooks", "./src/hooks"],
          ],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
];
