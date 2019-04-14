// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    jquery: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-useless-escape': 'off',
    'no-trailing-spaces': 'off',
    'no-tabs': 'off',
    'space-before-function-paren': 'off',
    'spaced-comment': 'off',
    'operator-linebreak': 'off',
    'space-in-parens': 'off', // 强制在圆括号内使用一致的空格
    'camelcase': 'off',
    'one-var': 'off',
    'standard/no-callback-literal': 'off',
    'eol-last': 'off',
    'no-new': 'off'
    // 'quotes': 'off'
  }
}
