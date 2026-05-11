import love from 'eslint-config-love'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.{js,ts,tsx,vue}'],

    languageOptions: {
      parser: vueParser,

      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    }
  },

  // love,

  ...vue.configs['flat/recommended'],

  {
    rules: {
      // '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      'vue/multi-word-component-names': 'off'
    }
  }
]
