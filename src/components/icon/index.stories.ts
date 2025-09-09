import type { Meta, StoryObj } from '@storybook/react-vite'
import { Icon } from '.'

const meta: Meta<typeof Icon> = {
  title: '通用/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: '图标名称'
    },
    iconPosition: {
      description: '图标位置',
      options: ['start', 'end'],
      control: { type: 'select' }
    },
    className: {
      description:
        '自定义样式(此组件以iconfont为基底，所以务必正确引入iconfont样式)'
    },
    style: {
      description: '自定义样式'
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'iconfont',
    className: 'icon-loading',
    iconPosition: 'start'
  }
}
