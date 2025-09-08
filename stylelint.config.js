export default {
  extends: [
    'stylelint-config-standard', // 标准规则
    'stylelint-config-standard-scss', // SCSS支持
    'stylelint-config-css-modules' // CSS Modules支持
  ],

  plugins: ['stylelint-scss', 'stylelint-prettier'],

  // 文件匹配
  overrides: [
    {
      files: ['**/*.{css,scss,sass,less}'],
      customSyntax: null
    },
    {
      files: ['**/*.{html,vue,svelte,astro}'],
      customSyntax: 'postcss-html'
    },
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      customSyntax: '@stylelint/postcss-css-in-js'
    }
  ],

  // 规则配置
  rules: {
    'prettier/prettier': true,
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'no-empty-source': null,
    'at-rule-no-deprecated': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extends',
          'ignores',
          'include',
          'mixin',
          'if',
          'else',
          'media',
          'for',
          'at-root',
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'each',
          'use',
          'forward',
          'return',
          'theme',
          'variant',
          'custom-variant',
          'reference',
          'utility'
        ]
      }
    ],
    'scss/operator-no-newline-after': null,
    'scss/load-partial-extension': null,
    'no-invalid-position-declaration': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extends',
          'ignores',
          'include',
          'mixin',
          'if',
          'else',
          'media',
          'for',
          'at-root',
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'each',
          'use',
          'forward',
          'return',
          'theme',
          'variant',
          'custom-variant',
          'reference',
          'utility'
        ]
      }
    ],
    'font-family-no-missing-generic-family-keyword': null,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['/']
      }
    ],
    // 限制ID选择器使用
    'selector-max-id': 1,
    // 限制嵌套深度
    'max-nesting-depth': 4,
    // 禁止重复的选择器
    'no-duplicate-selectors': true,
    // 禁止空块
    'block-no-empty': true,
    // SCSS变量命名规范
    'scss/dollar-variable-pattern': '^[a-z][a-zA-Z0-9]+$',
    // 确保@import规则放在其他规则之前
    'scss/at-import-partial-extension': null,
    // 确保@extend规则放在属性声明之前
    'scss/at-extend-no-missing-placeholder': null,
    // 禁止在@mixin中使用!important
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    // 允许在@mixin名称中使用连字符
    'scss/at-mixin-pattern': '^[a-z][a-zA-Z0-9-]*$',
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested']
      }
    ],
    'no-descending-specificity': null, // 允许特异性降序
    'no-duplicate-selectors': null // 允许重复选择器（CSS Modules中常见）
  },

  // 忽略文件
  ignoreFiles: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/.vite/**',
    '**/coverage/**',
    '**/*.min.css'
  ]
}
