// styling
import styles from './styles.module.scss'

// hooks
import { useTheme } from '@contexts/theme.context'

// utils
import { commaFormatter, numFormatter } from '@utils/helpers'

const placeholder = [
  { year: 2022, customers: 3234, trend: 10, revenue: 124000 },
  { year: 2023, customers: 12345, trend: 35, revenue: 32000 }
]

export const StatsHighlightTable = ({ data = placeholder }) => {
  const { theme } = useTheme()

  return (
    <table className={`${styles.table} ${styles[theme]}`}>
      <thead>
        <tr>
          <th className={styles.table_header}>Year</th>
          <th className={styles.table_header}>Customers</th>
          <th className={styles.table_header}>Trend</th>
          <th className={styles.table_header}>Revenue</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
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
