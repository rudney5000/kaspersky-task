import type { Preview } from '@storybook/react'
import '../src/shared/styles/index.scss'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0f1117' },
        { name: 'surface', value: '#1a1d27' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
