import React, { useEffect, useRef, useState } from 'react'
import { Icon } from '../icon'
import './index.css'

export interface MenuItem {
  key: string
  label: string
  icon?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  children?: MenuItem[]
}

export interface DropdownMenuProps {
  trigger?: 'click' | 'hover'
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'
  children: React.ReactNode
  menu: MenuItem[]
  className?: string
  style?: React.CSSProperties
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger = 'click',
  placement = 'bottomLeft',
  children,
  menu,
  className = '',
  style = {}
}) => {
  const [visible, setVisible] = useState(false)
  const [submenuVisible, setSubmenuVisible] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // 处理点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setVisible(false)
        setSubmenuVisible(null)
      }
    }

    if (visible) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [visible])

  // 清理定时器
  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
    }
  }, [])

  // 处理菜单项点击
  const handleMenuItemClick = (item: MenuItem) => {
    if (item.disabled) return

    if (item.children && item.children.length > 0) {
      // 有子菜单，切换子菜单显示状态
      setSubmenuVisible(submenuVisible === item.key ? null : item.key)
    } else {
      // 没有子菜单，执行点击事件并关闭菜单
      item.onClick?.()
      setVisible(false)
      setSubmenuVisible(null)
    }
  }

  // 处理触发器事件
  const handleTriggerClick = () => {
    if (trigger === 'click') {
      setVisible(!visible)
      setSubmenuVisible(null)
    }
  }

  const handleContainerMouseEnter = () => {
    if (trigger === 'hover') {
      // 清除隐藏定时器
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
        hideTimeoutRef.current = null
      }
      setVisible(true)
    }
  }

  const handleContainerMouseLeave = () => {
    if (trigger === 'hover') {
      // 添加延迟隐藏，防止鼠标快速移动时菜单闪烁
      hideTimeoutRef.current = setTimeout(() => {
        setVisible(false)
        setSubmenuVisible(null)
      }, 100)
    }
  }

  // 获取菜单位置样式
  const getMenuStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'absolute',
      zIndex: 1000
    }

    switch (placement) {
      case 'bottomRight':
        return { ...baseStyle, top: '100%', right: 0 }
      case 'topLeft':
        return { ...baseStyle, bottom: '100%', left: 0 }
      case 'topRight':
        return { ...baseStyle, bottom: '100%', right: 0 }
      default: // bottomLeft
        return { ...baseStyle, top: '100%', left: 0 }
    }
  }

  // 渲染菜单项
  const renderMenuItem = (item: MenuItem) => {
    const hasChildren = item.children && item.children.length > 0
    const isSubmenuOpen = submenuVisible === item.key

    return (
      <div
        key={item.key}
        className={`dropdown-menu-item ${item.disabled ? 'disabled' : ''} ${hasChildren ? 'has-children' : ''}`}
        onClick={() => handleMenuItemClick(item)}
        onMouseEnter={() => {
          if (hasChildren && trigger === 'hover') {
            setSubmenuVisible(item.key)
          }
        }}
        onMouseLeave={() => {
          if (hasChildren && trigger === 'hover') {
            setSubmenuVisible(null)
          }
        }}
      >
        <div className="menu-item-content">
          {item.icon && <span className="menu-item-icon">{item.icon}</span>}
          <span className="menu-item-label">{item.label}</span>
          {hasChildren && (
            <span className={`menu-item-arrow ${isSubmenuOpen ? 'open' : ''}`}>
              <Icon
                className="icon-jinrujiantou"
                style={{ fontSize: '10px' }}
              ></Icon>
            </span>
          )}
        </div>

        {hasChildren && isSubmenuOpen && (
          <div className="submenu">{item.children!.map(renderMenuItem)}</div>
        )}
      </div>
    )
  }

  return (
    <div
      ref={dropdownRef}
      className={`dropdown-menu-container ${className}`}
      style={style}
      onMouseEnter={handleContainerMouseEnter}
      onMouseLeave={handleContainerMouseLeave}
    >
      <div className="dropdown-trigger" onClick={handleTriggerClick}>
        {children}
      </div>

      {visible && (
        <div ref={menuRef} className="dropdown-menu" style={getMenuStyle()}>
          {menu.map(renderMenuItem)}
        </div>
      )}
    </div>
  )
}
