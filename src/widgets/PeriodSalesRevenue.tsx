//components
import Spring from '@components/Spring'
import InfoBtn from '@ui/InfoBtn'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
// import Trend from '@ui/Trend'

//hooks
import { useWindowSize } from 'react-use'

// utils
import dayjs from 'dayjs'
import { numFormatter } from '@utils/helpers'

const data = [
  {
    date: new Date(2023, 8, 12),
    value: 1554,
    trend: 14.56
  },
  {
    date: new Date(2023, 8, 14),
    value: 2741,
    trend: 25.11
  },
  {
    date: new Date(2023, 8, 16),
    value: 1088,
    trend: -12.56
  },
  {
    date: new Date(2023, 8, 18),
    value: 1541,
    trend: 8.25
  },
  {
    date: new Date(2023, 8, 20),
    value: 3874,
    trend: 0.23
  },
  {
    date: new Date(2023, 8, 22),
    value: 2390,
    trend: -0.23
  },
  {
    date: new Date(2023, 8, 24),
    value: 3490,
    trend: -1.15
  }
]

// const CustomTooltip = ({ active, payload, label }: any) => {
//   if (active) {
//     return (
//       <div className='chart-tooltip px-[14px] py-5 flex flex-col'>
//         <h6>Revenue by:</h6>
//         <span className='my-1'>{dayjs(label).format('DD MMM, YYYY')}</span>
//         <Trend value={payload[0].payload.trend} />
//         <span className='h3 mt-2'>{numFormatter(payload[0].value, 1, '$')}</span>
//       </div>
//     )
//   }

//   return null
// }

interface Props {
  title: string
}

const PeriodSalesRevenue = (props: Props) => {
  const { title } = props

  const { width } = useWindowSize()

  return (
    <Spring className='card flex flex-col h-[300px] md:h-[494px] lg:h-[400px] xl:h-full'>
      <div className='flex items-center justify-between mb-8'>
        <h4 className='h4'>{title}</h4>
        <InfoBtn />
      </div>
      <div className='flex-1 -mt-5 overflow-hidden'>
        <ResponsiveContainer width='99%' height='100%'>
          <AreaChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
            <defs>
              <linearGradient
                id='area'
                x1='610.509'
                y1='172.326'
                x2='610.509'
                y2='38.1836'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='var(--accent)' stopOpacity='0.01' />
                <stop offset='1' stopColor='var(--accent)' stopOpacity='0.175261' />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray='0' stroke='var(--input-border)' strokeOpacity='0.6' vertical={false} />
            <XAxis
              dataKey='date'
              tickLine={false}
              axisLine={false}
              dy={9}
              hide={width < 768 || (width >= 1024 && width < 1280)}
              tick={{ fill: 'var(--header)' }}
              tickFormatter={(value) => dayjs(value).format('DD MMM')}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              hide={width < 768}
              dx={-20}
              tickFormatter={(value) => numFormatter(value, 0, '$')!}
            />
            {/* <Tooltip cursor={{ strokeDasharray: '4 4', stroke: 'var(--header)' }} content={<CustomTooltip />} /> */}
            <Area
              type='monotone'
              dataKey='value'
              stroke='var(--accent)'
              strokeWidth={6}
              strokeLinecap='round'
              fill='url(#area)'
              dot={{
                r: 4,
                fill: 'var(--green)',
                stroke: 'var(--header)',
                strokeWidth: 1,
                fillOpacity: 1
              }}
              activeDot={{ r: 6, fill: 'var(--green)', stroke: 'var(--header)' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Spring>
  )
}

export default PeriodSalesRevenue
