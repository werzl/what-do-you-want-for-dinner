module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: ["eslint:recommended"],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        },
        sourceType: "module",
    },
    rules: {
        "jsx-quotes": ["error", "prefer-double"],
        "func-style": ["error", "expression", { "allowArrowFunctions": true }],
        indent: ["error", 4, { SwitchCase: 1 }],
        "linebreak-style": ["error", "windows"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "no-console": ["warn", { allow: ["clear", "info", "error", "dir", "trace"] }],
        curly: "error",
        "no-else-return": "error",
        "no-unneeded-ternary": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "one-var": ["error", "never"],
        "prefer-arrow-callback": "error",
        strict: "error",
        "symbol-description": "error",
        yoda: ["error", "never", { exceptRange: true }],
    },
};