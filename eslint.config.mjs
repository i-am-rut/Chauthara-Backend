import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    files: ["**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      globals: {
        ...globals.node,
      },
    },

    rules: {
      // General
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      "no-console": "off",

      "no-undef": "error",

      // Code quality
      eqeqeq: ["error", "always"],

      curly: ["error", "all"],

      "prefer-const": "error",
    },
  },

  {
    ignores: [
      "node_modules/",
      "coverage/",
      "dist/",
      "build/",
      ".next/",
    ],
  },
];