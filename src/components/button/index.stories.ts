import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '.'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Button',
    type: 'default',
    size: 'medium',
    block: false,
    iconPosition: 'start'
  }
}
