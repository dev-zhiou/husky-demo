module.exports = {
  extends: ['plugin:vue/vue3-essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue'],
  globals: {
    defineEmits: true,
    document: true,
    localStorage: true,
    GLOBAL_VAR: true,
    window: true,
    defineProps: true,
    defineExpose: true,
  },
  rules: {
    indent: [2, 2],
    'no-unused-vars': [
      2,
      {
        vars: 'all', // "local",允许声明未使用变量
        args: 'all', // 检查所有参数
      },
    ],
    'linebreak-style': 'off',
    'no-async-promise-executor': 'off',
    'no-return-await': 'off',
    'default-param-last': 'off',
    'no-use-before-define': 'off',
    'no-unused-expressions': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'vue/multi-word-component-names': 'off',
    'max-len': ['error', { code: 300 }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.vue'],
      },
    },
  },
};
