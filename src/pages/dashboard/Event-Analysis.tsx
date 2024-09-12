//components
import { PageHeader } from '@layouts/components/PageHeader'
import ProtectedLayout from '@layouts/protected'
import EventAnalysisGrid from '@widgets/EventAnalysisGrid'

//i18n
import { withTranslation } from 'react-i18next'

const EventAnalysis = ({ t }: any) => {
  console.log(t('search'))
  return (
    <ProtectedLayout>
      <PageHeader title={t('header.title')} />
      <EventAnalysisGrid search_label={t('search')} />
    </ProtectedLayout>
  )
}

export default withTranslation('event_analysis')(EventAnalysis)
