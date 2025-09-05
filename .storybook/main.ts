import type { StorybookConfig } from '@storybook/react-vite'
// import tailwindcss from '@tailwindcss/vite'

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
  viteFinal: async config => {
    const { mergeConfig } = await import('vite')
    return mergeConfig(config, {
      plugins: [
        // tailwindcss()
      ]
    })
  }
}
export default config
