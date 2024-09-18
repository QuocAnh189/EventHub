// styling
import styles from './styles.module.scss'

// hooks
import { useTheme } from '@contexts/theme.context'

// utils
import { commaFormatter, numFormatter } from '@utils/helpers'

//i18n
import { withTranslation } from 'react-i18next'

const placeholder = [
  { year: 2022, customers: 3234, trend: 10, revenue: 124000 },
  { year: 2023, customers: 12345, trend: 35, revenue: 32000 }
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
          <th className={styles.table_header}>{t('conversion_rate.trend')}</th>
          <th className={styles.table_header}>{t('conversion_rate.revenue')}</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, index: number) => (
          <tr className={styles.table_row} key={index}>
            <td>{item.year}</td>
            <td>{commaFormatter(item.customers)}</td>
            <td>${item.trend}%</td>
            <td>${numFormatter(item.revenue)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default withTranslation('customer')(StatsHighlightTable)
