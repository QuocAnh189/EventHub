//components
import Spring from '@components/Spring'
import InfoBtn from '@ui/InfoBtn'
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts'

//utils
// import { numFormatter } from '@utils/helpers'

const data_default = [
  { name: '2023', value: 8400 },
  { name: '2024', value: 5300 }
]
const COLORS = ['var(--header)', 'var(--green)']

interface Props {
  title: string
  data?: any
}

const ProfitPerformance = (props: Props) => {
  const { title, data = data_default } = props

  return (
    <Spring className='card flex flex-col h-[380px] lg:h-[300px] 2xl:h-full'>
      <div className='flex justify-between items-center'>
        <h5 className='h5'>{title}</h5>
        <InfoBtn />
      </div>
      <div className='flex-1 overflow-hidden'>
        <ResponsiveContainer width='99%' height='100%'>
          <PieChart>
            <Pie data={data} cx='50%' cy='50%' fill='#8884d8' strokeWidth={10} stroke='var(--widget)' dataKey='value'>
              {data.map((entry: any, index: number) => (
                <Cell values={entry.name} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='flex justify-center gap-5'>
        <div className='flex items-center gap-2.5'>
          <span className='w-[18px] h-[18px] rounded-full bg-header' />
          <span className='font-heading font-semibold text-header text-sm'>
            <span className='inline'>{data[0].name}</span>
          </span>
        </div>
        <div className='flex items-center gap-2.5'>
          <span className='w-[18px] h-[18px] rounded-full bg-green' />
          <span className='font-heading font-semibold text-header text-sm'>
            <span className='inline'>{data[1].name}</span>
          </span>
        </div>
      </div>
    </Spring>
  )
}

export default ProfitPerformance
