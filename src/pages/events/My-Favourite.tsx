//components
import ProtectedLayout from '@layouts/protected'
import PageHeader from '@layouts/components/PageHeader'
import EventFavouriteGrid from '@widgets/EventFavouriteGrid'

//i18n
import { withTranslation } from 'react-i18next'

const MyFavourite = ({ t }: any) => {
  return (
    <ProtectedLayout>
      <PageHeader title={t('header.title')} />
      <EventFavouriteGrid search_label={t('search')} />
    </ProtectedLayout>
  )
}

export default withTranslation('my_favourite')(MyFavourite)
