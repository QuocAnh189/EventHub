// components
import Spring from '@components/Spring'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'

// hooks
import { useTheme } from '@contexts/theme.context'

// utils
// import { numFormatter } from '@utils/helpers'

const data = [
  { name: 'Period 1', expense: 4000, income: 2400 },
  { name: 'Period 2', expense: 3000, income: 1398 },
  { name: 'Period 3', expense: 2000, income: 7000 },
  { name: 'Period 4', expense: 2780, income: 3908 },
  { name: 'Period 5', expense: 1890, income: 4800 },
  { name: 'Period 6', expense: 2390, income: 3800 },
  { name: 'Period 7', expense: 3490, income: 4300 }
]

const SaleActivity = () => {
  const { theme } = useTheme()

  return (
    <Spring className='card flex flex-col gap-[5px] min-h-[182px]'>
      <h5>Sale Activity</h5>
      <div className='flex-1'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data}>
            <XAxis dataKey='name' hide={true} />
            <YAxis hide={true} />
            <Bar dataKey='income' barSize={12} radius={6} fill='var(--green)' />
            <Bar
              dataKey='expense'
              barSize={12}
              radius={6}
              fill='var(--header)'
              style={{
                filter: `drop-shadow(0 1px 4px ${theme === 'light' ? 'rgba(119, 119, 119, 0.72)' : '#9F9F9F'})`
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Spring>
  )
}

export default SaleActivity
