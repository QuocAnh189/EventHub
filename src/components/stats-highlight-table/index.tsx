// styling
import styles from './styles.module.scss'

//hooks
import { useTheme } from '@contexts/theme.context'

//utils
import { commaFormatter, numFormatter } from '@utils/helpers'

//i18n
import { withTranslation } from 'react-i18next'

const placeholder = [
  { year: 2023, customers: 3234, orders: 10234, revenue: 124000 },
  { year: 2024, customers: 12345, orders: 35123, revenue: 32000 }
]

interface Props {
  t: any
  data: any
}

const StatsHighlightTable = (props: Props) => {
  const { t, data = placeholder } = props

  const { theme } = useTheme()

  return (
    <table className={`${styles.table} ${styles[theme]}`}>
      <thead>
        <tr>
          <th className={styles.table_header}>{t('conversion_rate.year')}</th>
          <th className={styles.table_header}>{t('conversion_rate.customers')}</th>
          <th className={styles.table_header}>{t('conversion_rate.orders')}</th>
          <th className={styles.table_header}>{t('conversion_rate.revenue')}</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, index: number) => (
          <tr className={styles.table_row} key={index}>
            <td>{item.year}</td>
            <td>{commaFormatter(item.customers)}</td>
            <td>{commaFormatter(item.orders)}</td>
            <td>${numFormatter(item.revenue)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default withTranslation('customer')(StatsHighlightTable)
