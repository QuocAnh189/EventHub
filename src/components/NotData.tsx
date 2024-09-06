//assets
import dataImg from '@assets/images/common/no_data.png'

//i18
import { withTranslation } from 'react-i18next'

interface NodataProp {
  t: any
  color?: string
}

const NotData = (props: NodataProp) => {
  const { t } = props
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center'>
      <img src={dataImg} alt='' />
      <p className='text-header'>{t('not_data.text')}</p>
    </div>
  )
}

export default withTranslation('common')(NotData)
