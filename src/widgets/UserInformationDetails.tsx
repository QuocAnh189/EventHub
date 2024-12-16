//components
import Spring from '@components/Spring'

//utils
import classNames from 'classnames'

//i18n
import { withTranslation } from 'react-i18next'

//interface
import { IRole, IUser } from '@interfaces/systems'
import dayjs from 'dayjs'

// interface IProps {
// }

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
        <h5>My Profile</h5>

        <div className='grid gap-4 md:grid-cols-2 md:gap-5'>
          <div className='grid gap-4'>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='userName'>
                {t('profile detail.user_name')}
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
                {t('profile detail.full_name')}
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
                {t('profile detail.email')}
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
                {t('profile detail.phone_number')}
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
                {t('profile detail.gender')}
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
              <label className='field-label text-header' htmlFor='state'>
                {t('profile detail.dob')}
              </label>
              <input
                className='field-input text-header'
                type='date'
                id='state'
                placeholder='State'
                value={dayjs(user?.dob).format('YYYY-MM-DD')}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='firstName'>
                {t('profile detail.role')}
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
                {t('profile detail.bio')}
              </label>
              <input readOnly className='field-input text-header' type='text' id='Bio' value={user?.bio} />
            </div>
          </div>
        </div>
      </div>
    </Spring>
  )
}

export default withTranslation('profile')(UserInformationDetails)
