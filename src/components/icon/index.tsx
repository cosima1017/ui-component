import type React from 'react'
import './index.css'

interface IconProps {
  className?: string
  label?: string
  iconPosition?: 'start' | 'end'
  style?: React.CSSProperties
}

export const Icon = (props: IconProps) => {
  const { className, label, iconPosition = 'start', style } = props
  if (iconPosition === 'end') {
    return (
      <>
        {label}&nbsp;
        <i className={`ui-icon iconfont ${className}`} style={style} />
      </>
    )
  }
  return (
    <>
      <i className={`ui-icon iconfont ${className}`} style={style} />
      &nbsp;{label}
    </>
  )
}
