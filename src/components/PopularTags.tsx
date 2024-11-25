//i18n
import { withTranslation } from 'react-i18next'

const PopularTags = ({ t }: any) => {
  return (
    <div className='flex flex-col gap-2.5 lg:gap-5'>
      <h5 className='h5 lg:text-right'>{t('popular-tags.title')}:</h5>
      <div className='flex flex-wrap gap-2.5'>
        <button className='button btn btn--outline blue size-sm bg-body'>{t('popular-tags.top-rated')}</button>
        <button className='btn btn--outline blue size-sm bg-body'>{t('popular-tags.new-in')}</button>
        <button className='btn btn--outline blue size-sm bg-body'>{t('popular-tags.best-sellers')}</button>
        <button className='btn btn--outline blue size-sm bg-body'>{t('popular-tags.a-z')}</button>
        <button className='btn btn--outline blue size-sm bg-body'>{t('popular-tags.reviews')}</button>
      </div>
    </div>
  )
}

export default withTranslation('overview_detail')(PopularTags)
