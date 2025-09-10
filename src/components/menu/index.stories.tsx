import type { Meta, StoryObj } from '@storybook/react-vite'
import { type MenuItem, DropdownMenu } from './index'

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '一个功能完整的下拉菜单组件，支持点击和悬停触发，多级菜单，以及丰富的自定义选项。'
      }
    }
  },
  argTypes: {
    trigger: {
      control: { type: 'select' },
      options: ['click', 'hover'],
      description: '触发方式'
    },
    placement: {
      control: { type: 'select' },
      options: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'],
      description: '菜单位置'
    },
    className: {
      control: { type: 'text' },
      description: '自定义类名'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

// 基础菜单数据
const basicMenu: MenuItem[] = [
  {
    key: '1',
    label: '新建文件',
    onClick: () => console.log('新建文件')
  },
  {
    key: '2',
    label: '打开文件',
    onClick: () => console.log('打开文件')
  },
  {
    key: '3',
    label: '保存文件',
    onClick: () => console.log('保存文件')
  }
]

// 带图标的菜单
const menuWithIcons: MenuItem[] = [
  {
    key: '1',
    label: '新建',
    icon: '📄',
    onClick: () => console.log('新建')
  },
  {
    key: '2',
    label: '编辑',
    icon: '✏️',
    onClick: () => console.log('编辑')
  },
  {
    key: '3',
    label: '删除',
    icon: '🗑️',
    onClick: () => console.log('删除')
  }
]

// 多级菜单
const nestedMenu: MenuItem[] = [
  {
    key: '1',
    label: '文件操作',
    icon: '📁',
    children: [
      {
        key: '1-1',
        label: '新建文件',
        onClick: () => console.log('新建文件')
      },
      {
        key: '1-2',
        label: '打开文件',
        onClick: () => console.log('打开文件')
      },
      {
        key: '1-3',
        label: '保存文件',
        onClick: () => console.log('保存文件')
      }
    ]
  },
  {
    key: '2',
    label: '编辑操作',
    icon: '✏️',
    children: [
      {
        key: '2-1',
        label: '复制',
        onClick: () => console.log('复制')
      },
      {
        key: '2-2',
        label: '粘贴',
        onClick: () => console.log('粘贴')
      },
      {
        key: '2-3',
        label: '剪切',
        onClick: () => console.log('剪切')
      }
    ]
  },
  {
    key: '3',
    label: '视图',
    icon: '👁️',
    children: [
      {
        key: '3-1',
        label: '放大',
        onClick: () => console.log('放大')
      },
      {
        key: '3-2',
        label: '缩小',
        onClick: () => console.log('缩小')
      },
      {
        key: '3-3',
        label: '重置',
        onClick: () => console.log('重置')
      }
    ]
  }
]

// 带禁用项的菜单
const menuWithDisabled: MenuItem[] = [
  {
    key: '1',
    label: '可用选项',
    icon: '✅',
    onClick: () => console.log('可用选项')
  },
  {
    key: '2',
    label: '禁用选项',
    icon: '❌',
    disabled: true,
    onClick: () => console.log('禁用选项')
  },
  {
    key: '3',
    label: '另一个可用选项',
    icon: '✅',
    onClick: () => console.log('另一个可用选项')
  }
]

// 基础示例
export const Basic: Story = {
  args: {
    trigger: 'click',
    placement: 'bottomLeft',
    menu: basicMenu
  },
  render: args => (
    <DropdownMenu {...args}>
      <button>点击我</button>
    </DropdownMenu>
  )
}

// 悬停触发
export const HoverTrigger: Story = {
  args: {
    trigger: 'hover',
    placement: 'bottomLeft',
    menu: menuWithIcons
  },
  render: args => (
    <DropdownMenu {...args}>
      <button>悬停我</button>
    </DropdownMenu>
  )
}

// 多级菜单
export const NestedMenu: Story = {
  args: {
    trigger: 'click',
    placement: 'bottomLeft',
    menu: nestedMenu
  },
  render: args => (
    <DropdownMenu {...args}>
      <button>多级菜单</button>
    </DropdownMenu>
  )
}

// 不同位置
export const DifferentPlacements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <DropdownMenu trigger="click" placement="bottomLeft" menu={basicMenu}>
        <button>左下</button>
      </DropdownMenu>
      <DropdownMenu trigger="click" placement="bottomRight" menu={basicMenu}>
        <button>右下</button>
      </DropdownMenu>
      <DropdownMenu trigger="click" placement="topLeft" menu={basicMenu}>
        <button>左上</button>
      </DropdownMenu>
      <DropdownMenu trigger="click" placement="topRight" menu={basicMenu}>
        <button>右上</button>
      </DropdownMenu>
    </div>
  )
}

// 带禁用项
export const WithDisabledItems: Story = {
  args: {
    trigger: 'click',
    placement: 'bottomLeft',
    menu: menuWithDisabled
  },
  render: args => (
    <DropdownMenu {...args}>
      <button>包含禁用项</button>
    </DropdownMenu>
  )
}

// 自定义触发器
export const CustomTrigger: Story = {
  args: {
    trigger: 'click',
    placement: 'bottomLeft',
    menu: menuWithIcons
  },
  render: args => (
    <DropdownMenu {...args}>
      <div
        style={{
          padding: '8px 16px',
          background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
          color: 'white',
          borderRadius: '6px',
          cursor: 'pointer',
          userSelect: 'none'
        }}
      >
        🎨 自定义样式
      </div>
    </DropdownMenu>
  )
}

// 复杂多级菜单
export const ComplexNestedMenu: Story = {
  args: {
    trigger: 'click',
    placement: 'bottomLeft',
    menu: [
      {
        key: '1',
        label: '文件',
        icon: '📁',
        children: [
          {
            key: '1-1',
            label: '新建',
            children: [
              {
                key: '1-1-1',
                label: '新建文档',
                onClick: () => console.log('新建文档')
              },
              {
                key: '1-1-2',
                label: '新建文件夹',
                onClick: () => console.log('新建文件夹')
              }
            ]
          },
          {
            key: '1-2',
            label: '打开',
            onClick: () => console.log('打开')
          }
        ]
      },
      {
        key: '2',
        label: '编辑',
        icon: '✏️',
        children: [
          {
            key: '2-1',
            label: '撤销',
            onClick: () => console.log('撤销')
          },
          {
            key: '2-2',
            label: '重做',
            onClick: () => console.log('重做')
          }
        ]
      },
      {
        key: '3',
        label: '帮助',
        icon: '❓',
        onClick: () => console.log('帮助')
      }
    ]
  },
  render: args => (
    <DropdownMenu {...args}>
      <button>复杂菜单</button>
    </DropdownMenu>
  )
}
