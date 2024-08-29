// components
import Spring from '@components/Spring'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

// hooks
import { useTheme } from '@contexts/themeContext'

// utils
import { generateGridPoints, numFormatter } from '@utils/helpers'

const data = [
  { name: 'Q1', a: 10874, b: 5874, trend: 14.46 },
  { name: 'Q2', a: 8471, b: 8974, trend: -4.19 },
  { name: 'Q3', a: 15874, b: 7000, trend: 12.88 },
  { name: 'Q4', a: 10455, b: 12584, trend: 50.14 }
]

const SalesVolumeChart = () => {
  const { theme } = useTheme()
  const gridPoints = generateGridPoints(40, 'x')

  return (
    <Spring className='card flex flex-col h-[425px] lg:h-full md:col-span-2 lg:col-span-1'>
      <div className='flex flex-col gap-2 mb-5 sm:flex-row sm:justify-between sm:items-center'>
        <h4>Sales Volume</h4>
        <div className='flex items-center gap-[18px]'>
          <div className='flex items-center gap-2.5'>
            <span className='legend-bar bg-header' />
            <span className='label-text'>2022</span>
          </div>
          <div className='flex items-center gap-2.5'>
            <span className='legend-bar bg-green' />
            <span className='label-text'>2023</span>
          </div>
        </div>
      </div>
      <div className='flex-1 overflow-hidden'>
        <ResponsiveContainer width='99%' height='100%' id='salesVolumeChart'>
          <LineChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
            <CartesianGrid
              strokeDasharray='0 0'
              stroke='var(--input-border)'
              vertical={false}
              horizontalPoints={gridPoints}
            />
            <XAxis
              dataKey='name'
              tickLine={false}
              tick={{ fill: 'var(--header)', fontWeight: 600, fontFamily: 'var(--heading-font)' }}
              axisLine={false}
            />
            <YAxis
              tickFormatter={(value) => numFormatter(value, 0, '$')!}
              tickMargin={10}
              tickCount={5}
              tick={{ fill: 'var(--text)' }}
              tickLine={false}
              axisLine={false}
            />

            <Line
              type='monotone'
              strokeWidth={6}
              dataKey='b'
              stroke='var(--green)'
              strokeLinecap='round'
              style={{ filter: 'drop-shadow(0 5px 6px rgba(0, 235, 199, 0.3))' }}
              dot={false}
              activeDot={false}
            />
            <Line
              type='monotone'
              strokeWidth={6}
              dataKey='a'
              stroke='var(--header)'
              strokeLinecap='round'
              style={{
                filter: `drop-shadow(0 5px 6px rgba(${theme === 'light' ? '98, 98, 98' : '216, 233, 255'}, 0.3))`
              }}
              dot={false}
              activeDot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Spring>
  )
}

export default SalesVolumeChart
