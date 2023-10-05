module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    JSX: true,
    React: true,
  },

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {},
      node: {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
        "moduleDirectory": ["src", "node_modules"]
      }
    },
  },

  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended",
    "plugin:security/recommended",
    "plugin:react-hooks/recommended",
  ],

  rules: {
    "default-case": 0,
    "no-param-reassign": 0,
    "security/detect-object-injection": 0,
    "import/no-cycle": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "react/no-unstable-nested-components": "off",
    camelcase: 0,
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": 0,
    "no-nested-ternary": "off",
    "no-shadow": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-var-requires": "off",
    "global-require": "off",
    "no-unused-expressions": "off",
    "react/function-component-definition": "off",
    "import/no-unresolved": "off",
    'max-len': 'off',
    "react/button-has-type": "off",
    "react/jsx-no-useless-fragment": "off",
    "sonarjs/cognitive-complexity": "off",
    "no-plusplus": "off"
  },
};
