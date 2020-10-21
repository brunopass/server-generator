module.exports = () => {
    return `{
"parserOptions":{
    "ecmaVersion": 2018
    },
"extends": ["eslint:recommended", "prettier"],
"env": {
    "es6": true,
    "node": true
    },
"rules": {
    "no-console": "warn"
    }
}`
}