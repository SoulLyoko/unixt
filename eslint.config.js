import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    ignores: ['**/pages.json'],
  },
  {
    rules: {
      'eslint-comments/no-unlimited-disable': 'off', // 允许忽略规则
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'], // 类型导入放在顶层
      'import/order': [ // 导入排序
        'error',
        {
          'groups': ['type', 'builtin', 'external', 'internal'],
          'newlines-between': 'always',
        },
      ],
      'no-console': 'off', // 允许console
      'ts/ban-ts-comment': 'off', // 允许忽略类型检查
      'ts/prefer-ts-expect-error': 'off', // 允许忽略类型检查
      'unused-imports/no-unused-imports': 'error', // 不允许未使用的导入
    },
  },
  {
    files: ['**/*.md/*'],
    rules: {
      'unused-imports/no-unused-imports': 'off', // md文件允许未使用的导入
    },
  },
)