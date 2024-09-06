//hook
import { useAppSelector } from '@hooks/useRedux'

//Spring
import { Spring } from '@components/Spring'

//i18
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
          {user?.email || 'anhquoc18092003@gmail.com'}
        </div>

        <div className='flex items-center gap-4 text-header'>
          <span className='icon-wrapper mt-1'>
            <i className='icon icon-mobile-solid' />
          </span>
          {t('profile pannel.number_of_events')}: {user?.numberOfCreatedEvents || 0}
        </div>
        <div className='flex items-center gap-4 text-header'>
          <span className='icon-wrapper mt-1'>
            <i className='icon icon-whatsapp' />
          </span>
          {t('profile pannel.follwing')}: {user?.numberOfFollowers || 0}
        </div>
        <button type='button' className='flex items-center gap-4 w-fit text-header'>
          <span className='icon-wrapper mt-1'>
            <i className='icon icon-file-arrow-down-solid' />
          </span>
          {t('profile pannel.follower')}: {user?.numberOfFolloweds || 0}
        </button>
      </div>
    </Spring>
  )
}

export default withTranslation('profile')(UserProfileInfo)
