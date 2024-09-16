//components
import ProtectedLayout from '@layouts/protected'
import ModifyEvent from '@pages/common/Modify-Create-Event'

//i18n
import { withTranslation } from 'react-i18next'

const CreateEvent = ({ t }: any) => {
  return (
    <ProtectedLayout>
      <ModifyEvent title={t('header.title_create')} create={true} />
    </ProtectedLayout>
  )
}

export default withTranslation('create_event')(CreateEvent)
