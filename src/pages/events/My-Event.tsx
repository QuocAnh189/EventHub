//layouts
import ProtectedLayout from '@layouts/protected'

//components
import PageHeader from '@layouts/components/PageHeader'
import { CSVLink } from 'react-csv'
import EventManagement from '@widgets/EventManagementTable'

//hook
import { useNavigate } from 'react-router-dom'

//i18n
import { withTranslation } from 'react-i18next'

const csvData = [
  ['firstname', 'lastname', 'email'],
  ['John', 'Doe', 'johndoe@domain.com'],
  ['Jane', 'Doe', 'janedoe@domain.com']
]

const MyEvent = ({ t }: any) => {
  const navigate = useNavigate()

  return (
    <ProtectedLayout>
      <div className='min-h-screen'>
        <PageHeader title={t('header.title')} />
        <div className='flex flex-col-reverse gap-4 mb-5 md:flex-col lg:flex-row lg:justify-between'>
          <div className='flex flex-col gap-4 md:flex-row md:gap-[14px]'>
            <button
              onClick={() => {
                navigate('/organization/event/create-event')
              }}
              className='btn btn--primary'
            >
              {t('body.title')} <i className='icon-circle-plus-regular' />
            </button>
            <CSVLink className='btn btn--outline blue !h-[44px]' data={csvData}>
              {t('body.link_csv')} <i className='icon-file-export-solid' />
            </CSVLink>
          </div>
        </div>
        <EventManagement />
      </div>
    </ProtectedLayout>
  )
}

export default withTranslation('my_event')(MyEvent)
