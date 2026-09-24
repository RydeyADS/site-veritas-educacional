module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  globals: {
    __DEMO_SINGLE__: 'readonly',
  },
  ignorePatterns: ['node_modules', 'dist', 'demo'],
}
