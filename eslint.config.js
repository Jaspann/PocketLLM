import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  {
    ignores: ['node_modules/', 'dist/'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: { js },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
  tseslint.configs.recommended,
])
