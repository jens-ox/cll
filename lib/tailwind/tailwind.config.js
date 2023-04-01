import base from './src/tailwind.base.js'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [base],
  content: ['./src/**/*.tsx'],
  corePlugins: {
    preflight: false
  }
}
