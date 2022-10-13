module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8, // optional, recommended 6+
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
  },
  extends: [
    'next',
  ],
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and errors if missing
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
    ],
  },
  root: true,
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }], // enforces 2-space indentation
    'no-var': 'error', // optional, recommended when using es6+
    strict: ['error', 'never'],
    // react plugin - options
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-sort-props': [
      1,
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-key': ['error'],
    'react/no-unknown-property': ['error'],
    'react/react-in-jsx-scope': ['error'],
    'react-hooks/exhaustive-deps': ['warn'],
    'prefer-const': ['error'],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        controlComponents: ['Field'],
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'eol-last': ['error', 'always'],
    'import/no-unresolved': [
      // strict File and Directory cAse sensitive imports
      2,
      { caseSensitiveStrict: true },
    ],
    'react/no-unescaped-entities': ['warn']
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          modules: true,
        },
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: ['next'],
      rules: {
        // ts-ignore should be allowed so long as its usage is justified
        '@typescript-eslint/ban-ts-ignore': 'off',
        // for now we allow autofocus
        'jsx-a11y/no-autofocus': 'off',
        // ensure that Typescript types are marked as used
        '@typescript-eslint/no-unused-vars': [
          'error',
          { args: 'after-used', argsIgnorePattern: '^_', ignoreRestSiblings: true },
        ],
        // prevent tests from being mistakenly skipped
        'no-only-tests/no-only-tests': 'error',
        // turn on errors for missing imports
        'import/no-unresolved': 'error',
      },
    },
  ],
}
