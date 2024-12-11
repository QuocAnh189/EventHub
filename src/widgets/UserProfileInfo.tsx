//hooks
import { useAppSelector } from '@hooks/useRedux'

//components
import Spring from '@components/Spring'

//i18n
import { withTranslation } from 'react-i18next'
import { IUser } from '@interfaces/systems'

const UserProfileInfo = ({ t }: any) => {
  const user: IUser = useAppSelector((state) => state.persistedReducer.user.user)

  return (
    <Spring className='card flex flex-col justify-center'>
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
          {t('profile pannel.number_of_events')}: <span className='subheading-2'>({user.totalEvent || 0})</span>
        </div>
        <div className='flex items-center gap-4 text-header'>
          <span className='icon-wrapper mt-1'>
            <i className='icon icon-whatsapp' />
          </span>
          {t('profile pannel.follwing')}:<span className='subheading-2'>({user.totalFollowing || 0})</span>
        </div>
        <button type='button' className='flex items-center gap-4 w-fit text-header'>
          <span className='icon-wrapper mt-1'>
            <i className='icon icon-file-arrow-down-solid' />
          </span>
          {t('profile pannel.follower')}:<span className='subheading-2'>({user.totalFollower || 0})</span>
        </button>
      </div>
    </Spring>
  )
}

export default withTranslation('profile')(UserProfileInfo)
