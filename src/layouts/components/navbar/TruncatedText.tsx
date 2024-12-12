interface Props {
  text: string
  lines?: number
  className?: string
  width?: number
}

export const TruncatedText = (props: Props) => {
  const { text, lines = 1, className, width } = props
  return (
    <span className={className ? className : ''}>
      <p className={`w-${width} line-clamp-${lines}`}>{text}</p>
    </span>
  )
}
