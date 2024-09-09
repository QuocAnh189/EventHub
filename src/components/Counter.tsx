// components
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

// hooks
import { useState } from 'react'

// utils
import { numFormatter, commaFormatter } from '@utils/helpers'

interface Props {
  num: number
  className?: string
  isFormatted?: boolean
  decimals?: any
  suffix?: any
  prefix?: any
}

const Counter = (props: Props) => {
  const { num, className, isFormatted, decimals, suffix, prefix } = props

  const [countFinished, setCountFinished] = useState(false)

  return (
    <CountUp
      start={countFinished ? num : 0}
      end={num}
      duration={2}
      onEnd={() => setCountFinished(true)}
      formattingFn={isFormatted ? (value) => numFormatter(value, 0, prefix)! : undefined}
      {...props}
    >
      {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} active={!countFinished} delayedCall>
          <span className={`relative ${className || ''}`}>
            <span className='opacity-0'>
              {prefix}
              {isFormatted ? numFormatter(num, decimals || 0, prefix) : commaFormatter(num)}
              {suffix}
            </span>
            <span className='absolute left-0' ref={countUpRef} />
          </span>
        </VisibilitySensor>
      )}
    </CountUp>
  )
}

export default Counter
