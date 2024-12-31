//components
import Spring from '@components/Spring'

//utils
import classNames from 'classnames'

//i18n
import { withTranslation } from 'react-i18next'

//interface
import { IRole, IUser } from '@interfaces/systems'

//utils
import dayjs from 'dayjs'

interface IProps {
  t: any
  user: IUser
}

const UserInformationDetails = (props: IProps) => {
  const { t, user } = props

  return (
    <Spring
      className='card flex flex-col gap-[30px] md:gap-12 md:row-start-2 md:col-span-2 md:!pb-[50px]
                xl:row-start-1 xl:col-start-2 xl:col-span-1'
    >
      <div className='flex flex-col gap-5'>
        <h5>{t('profile_detail.title')}</h5>

        <div className='grid gap-4 md:grid-cols-2 md:gap-5'>
          <div className='grid gap-4'>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='userName'>
                {t('profile_detail.user_name')}
              </label>
              <input
                readOnly
                className={classNames('field-input text-header')}
                type='text'
                id='userName'
                value={user?.userName}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='fullName'>
                {t('profile_detail.full_name')}
              </label>
              <input
                readOnly
                className={classNames('field-input text-header')}
                type='text'
                id='fullName'
                value={user?.fullName}
              />
            </div>

            <div className='field-wrapper'>
              <label className='field-label' htmlFor='email'>
                {t('profile_detail.email')}
              </label>
              <input
                readOnly
                className={classNames('field-input text-header')}
                type='text'
                id='email'
                value={user?.email}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='phone'>
                {t('profile_detail.phone_number')}
              </label>
              <input
                readOnly
                className={classNames('field-input text-header')}
                type='text'
                id='phone'
                value={user?.phoneNumber}
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='city'>
                {t('profile_detail.gender')}
              </label>
              <input
                readOnly
                className={classNames('field-input text-header')}
                type='text'
                id='gender'
                value={user?.gender}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='state'>
                {t('profile_detail.dob')}
              </label>
              <input
                className={classNames('field-input text-header')}
                type='date'
                id='state'
                placeholder='State'
                value={dayjs(user?.dob).format('YYYY-MM-DD')}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='firstName'>
                {t('profile_detail.role')}
              </label>
              <input
                readOnly
                className={classNames('field-input text-header')}
                type='text'
                id='role'
                placeholder='Role'
                value={user?.roles?.map((role: IRole) => role.name).join(', ')}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='address'>
                {t('profile_detail.bio')}
              </label>
              <input readOnly className='field-input text-header' type='text' id='Bio' value={user?.bio} />
            </div>
          </div>
        </div>
      </div>
    </Spring>
  )
}

export default withTranslation('userinfo')(UserInformationDetails)
