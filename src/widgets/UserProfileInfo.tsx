import Spring from '@components/Spring'
import { useAppSelector } from '@hooks/useRedux'
import { withTranslation } from 'react-i18next'

const UserProfileInfo = ({ t }: any) => {
  const user = useAppSelector((state) => state.persistedReducer.user.user)

  return (
    <Spring className='card flex items-center'>
      <div className='flex flex-col gap-5'>
        <div className='flex items-center gap-4 text-header'>
          <span className='icon-wrapper mt-1'>
            <i className='icon icon-envelope-solid' />
          </span>
          {user?.email}
        </div>

        <div className='flex items-center gap-4 text-header'>
          <span className='icon-wrapper mt-1'>
            <i className='icon icon-mobile-solid' />
          </span>
          {t('profile pannel.number_of_events')}: {user?.numberOfCreatedEvents}
        </div>
        <div className='flex items-center gap-4 text-header'>
          <span className='icon-wrapper mt-1'>
            <i className='icon icon-whatsapp' />
          </span>
          {t('profile pannel.follwing')}: {user?.numberOfFollowers}
        </div>
        <button type='button' className='flex items-center gap-4 w-fit text-header'>
          <span className='icon-wrapper mt-1'>
            <i className='icon icon-file-arrow-down-solid' />
          </span>
          {t('profile pannel.follower')}: {user?.numberOfFolloweds}
        </button>
      </div>
    </Spring>
  )
}

export default withTranslation('profile')(UserProfileInfo)
