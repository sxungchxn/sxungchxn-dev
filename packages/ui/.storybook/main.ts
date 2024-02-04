import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: true,
        actions: true,
        backgrounds: true,
        controls: true,
      },
    },
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    'storybook-theme-css-vars',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: config => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@/*': path.resolve(__dirname, '../src'),
        },
      },
    })
  },
}
export default config
