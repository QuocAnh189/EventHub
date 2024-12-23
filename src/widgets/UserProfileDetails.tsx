//hooks
import { Controller, UseFormRegister, UseFormWatch, UseFormSetValue, Control } from 'react-hook-form'
import { useTheme } from '@contexts/theme.context'
import { useWindowSize } from 'react-use'
import { useEffect, useState } from 'react'

//components
import Spring from '@components/Spring'
import Select from '@ui/Select'
import { NavLink } from 'react-router-dom'
import { PatternFormat } from 'react-number-format'
import Loading from '@components/Loading'

//utils
import classNames from 'classnames'

//i18n
import { withTranslation } from 'react-i18next'

//interface
import { IUpdateUserProfilePayload } from '@dtos/user.dto'
import { IRole } from '@interfaces/systems'
import { GENDER_OPTIONS } from '@constants/options.constant'

interface Props {
  t: any
  register: UseFormRegister<IUpdateUserProfilePayload>
  watch: UseFormWatch<IUpdateUserProfilePayload>
  setValue: UseFormSetValue<IUpdateUserProfilePayload>
  control: Control<IUpdateUserProfilePayload>
  errors: any
  isLoading: boolean
  roles: IRole[]
  setModalOpen: (value: boolean) => void
}

const UserProfileDetails = (props: Props) => {
  const { t, register, watch, setValue, control, errors, isLoading, roles, setModalOpen } = props

  const { theme, toggleTheme }: any = useTheme()
  const { width } = useWindowSize()

  const [sidebarCurrent, setSidebarCurrent] = useState<string>(localStorage.getItem('type_sidebar')! || 'left')

  useEffect(() => {
    localStorage.setItem('type_sidebar', sidebarCurrent)
  }, [sidebarCurrent])

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
              <label className='field-label' htmlFor='firstName'>
                {t('profile_detail.user_name')}
              </label>
              <input
                className={classNames('field-input text-header', { 'field-input--error': errors.userName })}
                type='text'
                id='userName'
                placeholder='User Name'
                defaultValue='Maria'
                {...register('userName', { required: true })}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='lastName'>
                {t('profile_detail.full_name')}
              </label>
              <input
                className={classNames('field-input text-header', { 'field-input--error': errors.fullName })}
                type='text'
                id='fullName'
                placeholder='Full Name'
                defaultValue='Smith'
                {...register('fullName', { required: true })}
              />
            </div>

            <div className='field-wrapper'>
              <label className='field-label' htmlFor='email'>
                {t('profile_detail.email')}
              </label>
              <input
                className={classNames('field-input text-header', { 'field-input--error': errors.email })}
                type='text'
                id='email'
                placeholder='Email'
                defaultValue='maria@email.com'
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='lastName'>
                {t('profile_detail.password')}
              </label>
              <input
                className={classNames('field-input text-header', { 'field-input--error': errors.fullName })}
                type='password'
                id='fullName'
                placeholder='Full Name'
                defaultValue='Smith'
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='phone'>
                {t('profile_detail.phone_number')}
              </label>
              <Controller
                name='phoneNumber'
                control={control}
                render={({ field }) => (
                  <PatternFormat
                    value={field.value}
                    format='+#-###-###-####'
                    placeholder='(123) 456-7890'
                    className={classNames('field-input text-header', { 'field-input--error': errors.phoneNumber })}
                    getInputRef={field.ref}
                  />
                )}
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='city'>
                {t('profile_detail.gender')}
              </label>
              <Select
                placeholder='Gender'
                id='gender'
                options={GENDER_OPTIONS}
                value={{ value: watch().gender, label: watch().gender }}
                onChange={(e: any) => {
                  setValue('gender', e.value)
                }}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='state'>
                {t('profile_detail.dob')}
              </label>
              <input
                className='field-input text-header'
                type='date'
                id='state'
                placeholder='State'
                {...register('dob')}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='zip'>
                {t('profile_detail.status')}
              </label>
              <input
                readOnly
                className='field-input text-header'
                type='text'
                id='Status'
                placeholder='Status'
                value='Active'
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
                value={roles?.map((role: IRole) => role.name).join(', ')}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='address'>
                {t('profile_detail.bio')}
              </label>
              <input className='field-input text-header' type='text' id='Bio' placeholder='Bio' {...register('bio')} />
            </div>
          </div>
        </div>
        <div className='mt-2.5 flex justify-between'>
          <button onClick={() => setModalOpen(true)} className='text-btn' type='button'>
            {t('profile_detail.change_password')}
          </button>
          <button disabled={isLoading} type='submit' className='btn btn-primary hover:bg-primary-400 w-[260px] mt-5'>
            {isLoading ? <Loading /> : t('profile_detail.update_information')}
          </button>
        </div>
        {width < 1920 && (
          <div className='mt-2.5 flex gap-2'>
            <label className='field-label' htmlFor='firstName'>
              {t('profile_detail.sidebar_position')}
            </label>
            <Select
              placeholder='Gender'
              id='gender'
              options={[
                { value: 'left', label: 'Left' },
                { value: 'right', label: 'Right' }
              ]}
              value={{ value: sidebarCurrent, label: sidebarCurrent === 'left' ? 'Left' : 'Right' }}
              onChange={(e: any) => {
                setSidebarCurrent(e.value)
              }}
            />
          </div>
        )}
      </div>
      <div>
        <h5>{t('profile_detail.admin_panel_tools')}</h5>
        <div className='grid gap-4 mt-5 md:grid-cols-2 md:gap-y-8 md:gap-x-[50px] md:mt-8 lg:grid-cols-3 lg:max-w-[780px]'>
          <NavLink className='tool-btn text-header' to='/connected-apps'>
            <span className='icon-wrapper'>
              <i className='icon icon-window-solid' />
            </span>
            <span>{t('profile_detail.connected_apps')}</span>
          </NavLink>
          <NavLink className='tool-btn text-header' to='/payment-method'>
            <span className='icon-wrapper'>
              <i className='icon icon-money-check-dollar-pen-solid' style={{ fontSize: 16 }} />
            </span>
            {t('profile_detail.payment_methods')}
          </NavLink>
          <NavLink className='tool-btn text-header' to='/appearance'>
            <span className='icon-wrapper'>
              <i className='icon icon-screwdriver-wrench-solid' />
            </span>
            {t('profile_detail.appearance')}
          </NavLink>
          <NavLink className='tool-btn text-header' to='/security-assets'>
            <span className='icon-wrapper'>
              <i className='icon icon-shield-halved-solid' />
            </span>
            {t('profile_detail.security_assets')}
          </NavLink>
          <NavLink className='tool-btn text-header' to='/configuration-settings'>
            <span className='icon-wrapper'>
              <i className='icon icon-sliders-solid' />
            </span>
            {t('profile_detail.configuration_settings')}
          </NavLink>
          <button type='button' className='tool-btn text-header' aria-label='Change theme' onClick={toggleTheme}>
            <span className='icon-wrapper'>
              <i className={`icon icon-${theme === 'light' ? 'sun-bright' : 'moon'}-solid`} />
            </span>
            {t('profile_detail.view_mode')}
          </button>
        </div>
      </div>
    </Spring>
  )
}

export default withTranslation('profile')(UserProfileDetails)
