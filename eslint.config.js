// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook'

import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
// import simpleImportSort from 'eslint-plugin-simple-import-sort'
import { globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  [
    globalIgnores(['dist', 'node_modules', '!.storybook']),
    {
      files: ['**/*.{ts,tsx}'],
      extends: [
        js.configs.recommended,
        tseslint.configs.recommended,
        reactHooks.configs['recommended-latest'],
        reactRefresh.configs.vite
      ],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser
      },
      settings: {
        react: {
          version: 'detect'
        },
        'import/resolver': {
          typescript: true,
          node: true
        }
      },
      plugins: {
        react
        // import: importPlugin,
        // 'simple-import-sort': simpleImportSort
      },
      rules: {
        //react相关规则
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
        ...reactHooks.configs.recommended.rules,
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true }
        ],
        'react/prop-types': 'off', // TypeScript已提供类型检查
        'react/react-in-jsx-scope': 'off', // React 17+不需要
        // TypeScript相关规则
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
        ],
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'warn',
        // 导入排序规则
        // 'simple-import-sort/imports': [
        //   'error',
        //   {
        //     groups: [
        //       // // React相关导入
        //       // ['^react', '^@?\\w'],
        //       // // 内部导入
        //       // ['^(@|components)(/.*|$)'],
        //       // // 父级目录导入
        //       // ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        //       // // 同级目录导入
        //       // ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        //       // // 样式导入
        //       // ['^.+\\.?(css)$']
        //       // 将所有导入放在一个组中，避免换行
        //       [
        //         '^react',
        //         '^@?\\w',
        //         '^(@|components)(/.*|$)',
        //         '^\\.\\.(?!/?$)',
        //         '^\\.\\./?$',
        //         '^\\./(?=.*/)(?!/?$)',
        //         '^\\.(?!/?$)',
        //         '^\\./?$',
        //         '^.+\\.?(css)$'
        //       ]
        //     ]
        //   }
        // ],
        // 'simple-import-sort/exports': 'error',

        // 代码质量规则
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'prefer-const': 'error',
        'no-var': 'error'
      }
    },
    prettier
  ],
  storybook.configs['flat/recommended']
)
