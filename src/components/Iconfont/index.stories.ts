import type { Meta, StoryObj } from '@storybook/react-vite'
import { Iconfont } from '.'

const meta: Meta<typeof Iconfont> = {
  title: 'Iconfont',
  component: Iconfont
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'iconfont',
    className: 'iconfont'
  }
}
