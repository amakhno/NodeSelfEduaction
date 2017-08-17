module.exports = {
    "extends": "eslint:recommended",
    "rules": {
        // enable additional rules
        "indent": ["error", 4],
        "linebreak-style": ["error", "windows"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],

        // override default options for rules from base configurations
        "comma-dangle": ["error", "always"],
        "no-cond-assign": ["error", "always"],
        "space-before-function-paren": ["error", "always"],
        "space-before-blocks": ["error", "always"],
        "no-constant-condition": ["off"],

        // disable rules from base configurations
        "no-console": "off",
    },
    "env": {
        "es6": true,
        "node": true
    }
}