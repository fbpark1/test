module.exports = {
  /* https://eslint.org/docs/user-guide/configuring/rules
   * https://eslint.org/docs/rules/
   * https://eslint.org/docs/user-guide/configuring/
   */
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    node: true,
    jest: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  overrides: [],
  globals: {
    _: false,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  ignorePatterns: ['node_modules/'],
  rules: {
    // "off" or 0 - turn the rule off
    // "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
    // "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)

    // windows linebreaks when not in production environment
    'linebreak-style': ['off', 'unix'],
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], //should add ".ts" if typescript project
    // 'jsx-a11y/label-has-associated-control': [ 'warn', { required: { some: [ 'nesting', 'id' ] } } ],
    // 'jsx-a11y/label-has-for': [ 'warn', { required: { some: [ 'nesting', 'id' ] } } ],

    'no-param-reassign': ['error', { props: false }],
    'arrow-parens': ['warn', 'always'], // () => {}
    'arrow-body-style': ['warn', 'always'],
    'consistent-return': 'off',
    'func-names': 'off',
    'no-shadow': 'off',
    'no-alert': 'off',
    'no-var': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'object-curly-newline': [
      'warn',
      {
        ObjectExpression: 'always',
        ObjectPattern: { multiline: true },
        ImportDeclaration: { multiline: true, minProperties: 3 },
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
    // vue 세팅과 react가 달라진 내용(rules 참고: 코드작성 단계에서 자동 검사해야 오류 줄일 수 있음)
    'react/jsx-one-expression-per-line': 0 /* 0 = off*/,
    'no-debugger': 1 /*1= warn(debugger가 사용되면 warning을 표시) */,
    'no-unused-vars': 1,
    'react/prop-types': 1,
    'react/no-unused-prop-types': 2 /* 2= error message */,
  },
};
// 4-5에 따라 직접 변경
