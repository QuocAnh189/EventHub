import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

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
