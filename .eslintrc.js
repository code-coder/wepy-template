module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: 'eslint:recommended',
  // required to lint *.wpy files
  plugins: ['html'],
  settings: {
    'html/html-extensions': ['.html', '.wpy']
  },
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'linebreak-style': ['error', 'unix'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // disable rules from base configurations
    'no-console': 'off',
    'no-undef': 'off',
    quotes: ['error', 'single'],
    'space-before-function-paren': 0,
    semi: ['error', 'always']
  }
};
