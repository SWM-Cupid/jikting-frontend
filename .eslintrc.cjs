module.exports = {
  env: { browser: true, es2020: true, node: true }, // node: true 추가
  extends: [
    // eslint-plugin-react 설정
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime', // new JSX transform from React 17 사용시 추가

    // eslint-plugin-import 설정
    'plugin:import/recommended',
    'plugin:import/typescript',

    // @typescript-eslint/eslint-plugin 설정
    'plugin:@typescript-eslint/recommended',

    // eslint-plugin-react-hooks 설정
    'plugin:react-hooks/recommended',

    // eslint-plugin-prettier 설정
    // 'plugin:prettier/recommended',  // prettier 에러 끄려면 주석처리

    // eslint-config-prettier 설정
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
  settings: {
    // node import 경로 설정
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
