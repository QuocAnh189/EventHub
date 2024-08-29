// components
import Spring from '@components/Spring'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

// utils
import { commaFormatter, getPercentage, getTotal } from '@utils/helpers'

const data = [
  { name: 'New Customers', value: 27153, color: 'chart-dark' },
  { name: 'Frequent Customers', value: 7587, color: 'accent' },
  { name: 'Idle Users', value: 5937, color: 'red' },
  { name: 'Cart Abandoners', value: 2309, color: 'yellow' }
]

// const CustomTooltip = ({ active, payload }: any) => {
//   if (active) {
//     return (
//       <div className='chart-tooltip p-2'>
//         <span className='h6'>{commaFormatter(payload[0].value)}</span>
//       </div>
//     )
//   }

//   return null
// }

const CustomerRetentionRate = () => {
  return (
    <Spring className='card xl:col-span-4'>
      <h5 className='mb-5'>Customer Retention Rate</h5>
      <div className='flex flex-col gap-[30px] md:flex-row md:items-start lg:items-center lg:gap-[70px]'>
        <div className='shrink-0 h-[220px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px]'>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart>
              <Pie data={data} cx='50%' cy='50%' outerRadius='100%' fill='#8884d8' dataKey='value' strokeWidth={0}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`var(--${entry.color})`} />
                ))}
              </Pie>
              {/* <Tooltip content={<CustomTooltip />} /> */}
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h6>Total Customers - {commaFormatter(getTotal(data))} in 2023</h6>
          <p className='mt-2.5 mb-3 md:mb-5'>
            Donec placerat, ipsum et bibendum blandit, ligula lectus ullamcorper lorem, in viverra nisl elit viverra
            massa. Nullam sodales rutrum arcu. Maecenas sed lorem ut dolor tincidunt mattis. Vestibulum vitae aliquet
            felis, at iaculis metus
          </p>
          <ul className='flex flex-col gap-5'>
            {data.map((item, index) => (
              <li className='flex gap-[14px]' key={index}>
                <i className='icon-circle-solid text-sm' style={{ color: `var(--${item.color})` }} />
                <p className='label-text max-w-[280px]'>
                  {item.name} - {getPercentage(data, item.value)}%, which is {commaFormatter(item.value)} visitors
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Spring>
  )
}

export default CustomerRetentionRate
