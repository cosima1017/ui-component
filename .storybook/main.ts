import type { StorybookConfig } from '@storybook/react-vite'
import tailwindcss from '@tailwindcss/vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  viteFinal: config => {
    config.plugins = config.plugins ?? []
    config.plugins.push(tailwindcss())
    config.resolve = config.resolve ?? {}
    config.resolve.alias = { ...config.resolve.alias, '@': '/src' }
    return config
  }
}
export default config
