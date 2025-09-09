import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '.'

const meta: Meta<typeof Button> = {
  title: '通用/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: '按钮类型'
      // options: ['default', 'primary', 'dashed', 'text', 'link'],
      // control: { type: 'select' }
    },
    size: {
      description: '按钮大小'
      // options: ['small', 'medium', 'large'],
      // control: { type: 'select' }
    },
    block: {
      description: '是否是块级元素'
    },
    iconPosition: {
      description: '图标位置'
      // options: ['start', 'end'],
      // control: { type: 'select' }
    },
    loading: {
      description: '是否显示加载中'
    },
    disabled: {
      description: '是否禁用'
    },
    onClick: {
      description: '点击事件'
    },
    icon: {
      description: '图标dom'
    },
    loadingIcon: {
      description: '加载中的图标dom'
    },
    className: {
      description: '自定义样式'
    },
    children: {
      description: '按钮内容'
    }
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
    type: 'default',
    size: 'medium',
    block: false,
    iconPosition: 'start'
  }
}
