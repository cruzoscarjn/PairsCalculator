module.exports = {
  extends: ['eslint:recommended', 'airbnb-base'],
  env: {
    node: true,
    mocha: true,
  },
  rules: {
    'no-console': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'max-len': ['error', { code: 170 }],
    'import/no-unresolved': 'error',
    'no-shadow': 0,
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '#*/**',
            group: 'internal',
          },
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js', '.json'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
