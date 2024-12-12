//layouts
import ProtectedLayout from '@layouts/protected'

//components
import PageHeader from '@layouts/components/PageHeader'
import EventManagement from '@widgets/EventManagementTable'

//i18n
import { withTranslation } from 'react-i18next'

const MyEvent = ({ t }: any) => {
  return (
    <ProtectedLayout>
      <div className='min-h-screen'>
        <PageHeader title={t('header.title')} />
        <EventManagement />
      </div>
    </ProtectedLayout>
  )
}

export default withTranslation('my_event')(MyEvent)
