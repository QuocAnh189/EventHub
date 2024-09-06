// hooks
import { useState, useEffect } from 'react'
import { useWindowSize } from 'react-use'

// components
import { DocumentTitle } from '@components/DocumentTitle'

// utils
import dayjs from 'dayjs'

interface Props {
  title: string
}

export const PageHeader = (props: Props) => {
  const { title } = props
  const [currentTime, setCurrentTime] = useState(new Date())
  const { width } = useWindowSize()
  const dateFormat = width < 768 ? 'MM.DD.YYYY' : 'MMMM DD, YYYY'

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [currentTime])

  return (
    <>
      <DocumentTitle title={title} />
      <div
        className='card no-hover flex flex-col gap-5 !p-5 mb-5 md:mb-[26px] md:!p-[26px] lg:!py-5 lg:flex-row
                 lg:items-center lg:gap-4'
      >
        <h1 className='flex-1 text-center lg:text-left text-2xl font-bold'>{title}</h1>
        <div
          className='h-11 bg-body flex items-center justify-center rounded-md px-9 font-heading font-bold
                    text-header text-sm border border-input-border lg:w-[310px]'
        >
          {dayjs(currentTime).format(`${dateFormat} HH`)}
          <span className='animate-pulse-fast'>:</span>
          {dayjs(currentTime).format('mm A')}
        </div>
      </div>
    </>
  )
}
