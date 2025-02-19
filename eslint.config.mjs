import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";



export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node }}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    rules: {
      'react/display-name': 'off',
      "@typescript-eslint/no-explicit-any": "off"
    },
    settings: {
      react: {
        version: "detect"
      }
    },

  },

];