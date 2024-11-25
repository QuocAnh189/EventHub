// utils
import { lazy } from 'react'

//components
import ProtectedLayout from '@layouts/protected'
const ModifyEvent = lazy(() => import('@pages/common/Modify-Create-Event'))

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
