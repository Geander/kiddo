module.exports = {
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'quotes': [1, 'single'],
    'semi': [1, 'always'],
    'comma-spacing': [1, { 'before': false, 'after': true }],
    'array-bracket-spacing': [1, 'never'],
    'no-trailing-spaces': [1],
    'max-len': [1, 80, { 'ignoreUrls': true }],
    'object-curly-spacing': [1, 'always'],
    'space-before-function-paren':
      [1, { 'anonymous': 'always', 'named': 'never' }],
    'eol-last': [1, 'always'],
    'arrow-body-style': [1, 'as-needed'],
    'indent': [1, 2],
    'object-shorthand': [1, 'always'],
    'prefer-arrow-callback': [1],
    'arrow-parens': [1, 'as-needed'],
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
    'curly': [1, 'all'],
    'keyword-spacing': [1, { 'before': true, 'after': true }],
    'space-before-blocks': 1,
    'no-undefined': 1,
    'no-undef': 1
  },
  "globals": {
    'it': true,
    'describe': true,
    'require': true,
    'expect': true,
    'global': true,
    'before': true,
    'module': true,
    'Buffer': true,
    'Promise': true,
    'console': true,
    'process': true,
    'next': true,
    'errors': true
  }
};
