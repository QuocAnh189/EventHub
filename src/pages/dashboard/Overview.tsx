// hooks
import { useWindowSize } from 'react-use'

//layout
import ProtectedLayout from '@layouts/protected'

//components
import { PageHeader } from '@layouts/components/PageHeader'
import MainOverviewInfo from '@widgets/MainOverviewInfo'
import SalesStats from '@widgets/SalesStats'
import TotalReport from '@widgets/TotalReport'
import TotalBalance from '@components/TotalBalance'

//i18n
import { withTranslation } from 'react-i18next'

const Overview = ({ t }: any) => {
  const { width } = useWindowSize()

  return (
    <ProtectedLayout>
      <PageHeader title={t('header.title')} />
      <div className='widgets-grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-[minmax(0,_951px)_minmax(0,_1fr)]'>
        <MainOverviewInfo />
        {width >= 1536 && <TotalBalance />}
        <SalesStats />
        <TotalReport />
      </div>
    </ProtectedLayout>
  )
}

export default withTranslation('overview')(Overview)
