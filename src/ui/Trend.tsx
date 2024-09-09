interface Props {
  value?: number
  wrapperClass?: string
}

const Trend = (props: Props) => {
  const { value = props.value || 0, wrapperClass } = props
  const isPositive = value > 0

  return (
    <div
      className={`flex gap-2 text-sm font-heading font-bold ${wrapperClass || ''} ${
        isPositive ? 'text-green' : 'text-red'
      }`}
    >
      <i className={`icon-caret-${isPositive ? 'up' : 'down'}-solid text-[20px] ${isPositive ? 'mt-0.5' : 'mb-0.5'}`} />
      <span>
        {isPositive && '+'}
        {value}%
      </span>
    </div>
  )
}

export default Trend
