interface IconfontProps {
  className?: string
  label?: string
}

export const Iconfont = (props: IconfontProps) => {
  const { className, label = '' } = props
  return <div className={className}>{label}</div>
}
