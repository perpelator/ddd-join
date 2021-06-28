module.exports = {
    extends: "marine/prettier/node",
    parserOptions: {
        "project": "./tsconfig.eslint.json"
    },
    rules: {
        "@typescript-eslint/naming-convention": "off"
    }
}