//utils
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import duration from 'dayjs/plugin/duration'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)
dayjs.extend(duration)

const TimeDifference = (startTime: string, endTime: string) => {
  const start = dayjs(startTime, 'YYYY/MM/DD hh:mm A')
  const end = dayjs(endTime, 'YYYY/MM/DD hh:mm A')

  const diffInMilliseconds = end.diff(start)
  const diffDuration = dayjs.duration(diffInMilliseconds)

  const days = diffDuration.days()
  const hours = diffDuration.hours()
  const minutes = diffDuration.minutes()

  return {
    days,
    hours,
    minutes
  }
}

export default TimeDifference
