import React from 'react'
import './index.css'

interface ButtonProps {
  size?: 'small' | 'medium' | 'large'
  type?: 'primary' | 'dashed' | 'text' | 'link' | 'default'
  className?: string
  children?: React.ReactNode
  block?: boolean
  icon?: React.ReactNode
  iconPosition?: 'start' | 'end'
  loading?: boolean
  disabled?: boolean
}

export const Button = (props: ButtonProps) => {
  const {
    size = 'default',
    type,
    children,
    className,
    block = false,
    icon,
    iconPosition = 'start',
    loading = false,
    disabled = false
  } = props

  // 如果正在加载，不显示原来的图标，显示加载图标
  const showIcon = !loading && icon

  return (
    <button
      className={className}
      data-button-type={type}
      data-size={size}
      data-block={block}
      data-icon-position={iconPosition}
      disabled={disabled}
    >
      {iconPosition === 'start' && (
        <>
          {showIcon && <span className="icon">{icon}&nbsp;</span>}
          {loading && <span className="loading-icon">&nbsp;Loading...</span>}
        </>
      )}
      {children ?? ''}
      {iconPosition === 'end' && (
        <>
          {loading && <span className="loading-icon">Loading...&nbsp;</span>}
          {showIcon && <span className="icon">&nbsp;{icon}</span>}
        </>
      )}
    </button>
  )
}
