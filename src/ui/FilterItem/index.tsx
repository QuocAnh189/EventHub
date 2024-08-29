/* eslint-disable no-unused-vars */
// styling
import { withTranslation } from 'react-i18next'
import styles from './styles.module.scss'

interface Props {
  t: any
  type?: string
  text: string
  qty: number
  value: string
  active: string
  onClick: (value: any) => void
}

const FilterItem = (props: Props) => {
  const { t, type, qty = 0, value, active, onClick } = props

  return (
    <button className={`${styles.button} ${value === active ? styles.active : ''}`} onClick={() => onClick(value)}>
      <span className={`${styles.text} subheading-2`}>{t(`${type}.${value}`)}</span>
      <span className='text-sm text-highlight-inverse'>({qty})</span>
    </button>
  )
}

export default withTranslation('common')(FilterItem)
