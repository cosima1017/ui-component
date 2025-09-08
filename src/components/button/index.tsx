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
  loadingIcon?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
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
    disabled = false,
    loadingIcon = <i className="iconfont icon-loading inline-block"></i>,
    onClick
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
      onClick={onClick}
    >
      {iconPosition === 'start' && (
        <>
          {showIcon && <span className="icon">{icon}</span>}
          {loading && <span className="loading-icon">{loadingIcon}</span>}
        </>
      )}
      {children ?? ''}
      {iconPosition === 'end' && (
        <>
          {loading && <span className="loading-icon">&nbsp;{loadingIcon}</span>}
          {showIcon && <span className="icon">&nbsp;{icon}</span>}
        </>
      )}
    </button>
  )
}
