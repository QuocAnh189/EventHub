interface UITruncatedTextProps {
  text: string
  lines?: number
  className?: string
  width?: number
}

export const TruncatedText = (props: UITruncatedTextProps) => {
  const { text, lines = 1, className, width } = props
  return (
    <span className={className ? className : ''}>
      <p className={`truncate w-${width} line-clamp-${lines}`}>{text}</p>
    </span>
  )
}
