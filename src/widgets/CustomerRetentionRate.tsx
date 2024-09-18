// components
import Spring from '@components/Spring'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

// utils
import { commaFormatter, getPercentage, getTotal } from '@utils/helpers'

//i18n
import { withTranslation } from 'react-i18next'

const data = [
  { key: 'new_customers', name: 'New Customers', value: 27153, color: 'chart-dark' },
  { key: 'frequent_customers', name: 'Frequent Customers', value: 7587, color: 'accent' },
  { key: 'idle_users', name: 'Idle Users', value: 5937, color: 'red' },
  { key: 'cart_abandoners', name: 'Cart Abandoners', value: 2309, color: 'yellow' }
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

const CustomerRetentionRate = ({ t }: any) => {
  return (
    <Spring className='card xl:col-span-4'>
      <h5 className='mb-5'>{t('customer_retention_rate.title')}</h5>
      <div className='flex flex-col gap-[30px] md:flex-row md:items-start lg:items-center lg:gap-[70px]'>
        <div className='shrink-0 h-[220px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px]'>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart>
              <Pie data={data} cx='50%' cy='50%' outerRadius='100%' fill='#8884d8' dataKey='value' strokeWidth={0}>
                {data.map((entry, index: number) => (
                  <Cell key={`cell-${index}`} fill={`var(--${entry.color})`} />
                ))}
              </Pie>
              {/* <Tooltip content={<CustomTooltip />} /> */}
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className='text-header'>
          <h6>
            {t('customer_retention_rate.total_customer')} - {commaFormatter(getTotal(data))}{' '}
            {t('customer_retention_rate.in')} 2024
          </h6>
          <p className='mt-2.5 mb-3 md:mb-5 text-justify'>{t('customer_retention_rate.description')}</p>
          <ul className='flex flex-col gap-5'>
            {data.map((item: any, index: number) => (
              <li className='flex gap-[14px]' key={index}>
                <i className='icon-circle-solid text-sm' style={{ color: `var(--${item.color})` }} />
                <p className='label-text max-w-[280px] text-header'>
                  {t(`customer_retention_rate.${item['key']}`)} - {getPercentage(data, item.value)}%,{' '}
                  {t('customer_retention_rate.which_is')} {commaFormatter(item.value)}{' '}
                  {t('customer_retention_rate.visitors')}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Spring>
  )
}

export default withTranslation('customer')(CustomerRetentionRate)
