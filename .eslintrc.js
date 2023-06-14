module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@babel/eslint-parser',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    quotes: [0, 'single'],
    'vue/multi-word-component-names': 0,
    'linebreak-style': 0,
    'eol-last': 2,
    'no-console': 'warn',
    'vue/no-multiple-template-root': 0,
  },
};
