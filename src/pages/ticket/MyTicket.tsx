//component
import PageHeader from '@layouts/components/PageHeader'
import ProtectedLayout from '@layouts/protected'
import TicketsGrid from '@widgets/TicketsGrid'

//i18n
import { withTranslation } from 'react-i18next'

const MyTicket = ({ t }: any) => {
  return (
    <ProtectedLayout>
      <PageHeader title={t('header.title')} />
      <TicketsGrid />
    </ProtectedLayout>
  )
}

export default withTranslation('my_ticket')(MyTicket)
