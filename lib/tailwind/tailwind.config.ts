import { type Config } from 'tailwindcss'
import base from './src/tailwind.base.ts'

const config: Config = {
  presets: [base],
  content: ['./src/**/*.tsx'],
  corePlugins: {
    preflight: false
  }
}

export default config
