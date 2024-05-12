import '@/styles/reset.css'
import '@/styles/vars.css'
import type { Preview } from '@storybook/react'
import { ThemeProvider } from '@/providers/theme-provider'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        // color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    theme: {
      selector: ':root',
      dataAttr: 'data-theme',
      nameLightTheme: 'light',
      nameDarkTheme: 'dark',
    },
    chromatic: { disableSnapshot: true },
  },
  decorators: [
    Story => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
