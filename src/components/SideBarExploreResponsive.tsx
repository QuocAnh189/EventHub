//components
import Select from '@ui/Select'

//constants
import { EVENT_CATEGORIES, EVENT_RATE_OPTIONS, EVENT_STATUS_OPTIONS } from '@constants/options.constant'

//i18
import { withTranslation } from 'react-i18next'

interface Props {
  t: any
}

const SidebarExploreResponsive = (props: Props) => {
  const { t } = props

  return (
    <div className='w-full flex items-center gap-4 pb-4 px-4 mdl:hidden'>
      <div className='flex items-center gap-2'>
        <p className='text-gray500 inline-block text-header'>{t('sidebar.rate.label')}: </p>
        <Select
          placeholder={t('asc')}
          options={EVENT_RATE_OPTIONS || []}
          onChange={(value: any) => {
            // setValue('order', value.value)
            console.log(value)
          }}
        />
      </div>

      <div className='flex items-center gap-2'>
        <p className='text-gray500 inline-block text-header'>{t('sidebar.status.label')}: </p>
        <Select
          placeholder={t('asc')}
          options={EVENT_STATUS_OPTIONS || []}
          onChange={(value: any) => {
            console.log(value)
          }}
        />
      </div>

      <div className='flex items-center gap-2'>
        <p className='text-gray500 inline-block text-header'>{t('sidebar.category.label')}: </p>
        <Select
          placeholder={t('asc')}
          options={EVENT_CATEGORIES || []}
          onChange={(value: any) => {
            console.log(value)
          }}
        />
      </div>
    </div>
  )
}

export default withTranslation('explore')(SidebarExploreResponsive)
