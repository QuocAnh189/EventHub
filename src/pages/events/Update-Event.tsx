//hook
import { useParams } from 'react-router-dom'

//page
import ModifyEvent from '@pages/common/Modify-Create-Event'

//component
import Loader from '@components/Loader'
import ProtectedLayout from '@layouts/protected'

//redux
import { useGetEventByIdQuery } from '@redux/apis/event.api'

//i18n
import { withTranslation } from 'react-i18next'

const EditEvent = ({ t }: any) => {
  const { id } = useParams()

  const { data: event, isFetching } = useGetEventByIdQuery(id!)

  return (
    <ProtectedLayout>
      {isFetching ? <Loader /> : <ModifyEvent title={t('header.update_create')} event={event!} />}
    </ProtectedLayout>
  )
}

export default withTranslation('create_event')(EditEvent)
