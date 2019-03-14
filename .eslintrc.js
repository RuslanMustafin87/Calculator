module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "eqeqeq": "error",
        "curly": "error",
        "array-element-newline": ["error", "consistent"],
        "array-bracket-spacing": "error",
        "indent": ["error", "tab", { "ObjectExpression": 1 }],
        "comma-spacing": [ "error", {"before": false, "after":true} ],
        "no-console": "off"
    },
    "globals": {
        "$": true,
        "jQuery": true
    }
}