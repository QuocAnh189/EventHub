//hooks
import { useParams } from 'react-router-dom'

//components
import PageHeader from '@layouts/components/PageHeader'
import UserInformationCard from '@widgets/UserInformationCard'
import UserInformationDetails from '@widgets/UserInformationDetails'
import UserProfileInfo from '@widgets/UserProfileInfo'

//layout
import ProtectedLayout from '@layouts/protected'

//i18n
import { withTranslation } from 'react-i18next'

//redux
import { useGetUserByIdQuery } from '@redux/apis/user.api'

const UserInfo = () => {
  const params = useParams()
  const { data } = useGetUserByIdQuery(params.id!)

  return (
    <ProtectedLayout>
      <PageHeader title='Profile User' />
      <div className='widgets-grid md:!grid-cols-2 xl:!grid-cols-[340px,_minmax(0,1fr)]'>
        <div className='widgets-grid md:!grid-cols-2 md:col-span-2 xl:!grid-cols-1 xl:col-span-1'>
          <UserInformationCard avatarUrl={data?.avatarUrl!} fullName={data?.fullName!} roles={data?.roles!} />
          <div className='widgets-grid'>
            <UserProfileInfo
              email={data?.email!}
              totalEvent={data?.totalEvent!}
              totalFollower={data?.totalFollower!}
              totalFollowing={data?.totalFollowing!}
            />
          </div>
        </div>
        <UserInformationDetails user={data!} />
      </div>
    </ProtectedLayout>
  )
}

export default withTranslation('profile')(UserInfo)
