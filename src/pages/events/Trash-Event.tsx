//components
import PageHeader from '@layouts/components/PageHeader'
import ProtectedLayout from '@layouts/protected'
import EventManagementTrash from '@widgets/EventManagementTrash'

//i18n
import { withTranslation } from 'react-i18next'

const TrashEvent = ({ t }: any) => {
  return (
    <ProtectedLayout>
      <div className='min-h-screen'>
        <PageHeader title={t('header.title')} />
        <EventManagementTrash />
      </div>
    </ProtectedLayout>
  )
}

export default withTranslation('trash_event')(TrashEvent)
