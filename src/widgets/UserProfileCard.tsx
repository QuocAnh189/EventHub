//hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@hooks/useRedux'
import { UseFormSetValue } from 'react-hook-form'

//components
import Spring from '@components/Spring'

//redux
import { useSignOutMutation } from '@redux/apis/auth.api'
import { setUser } from '@redux/slices/user.slice'
import { clearDataConversation, setConservation } from '@redux/slices/conservation.slice'

//interface
import { IUser } from 'interfaces/systems/user.interface'

//assets
import userDefault from '@assets/images/common/user_default.png'

//i18n
import { withTranslation } from 'react-i18next'
import { IRole } from '@interfaces/systems'

interface Props {
  t: any
  avatar: string
  fullName: string
  setValue: UseFormSetValue<IUser>
  roles: IRole[]
}

const UserProfileCard = (props: Props) => {
  const { t, avatar, setValue, fullName, roles } = props
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [signOut, { isLoading: loadingLogout }] = useSignOutMutation()
  const [avatarUser, setAvatarUser] = useState<string>(avatar)

  const handleChangeAvatar = (e: any) => {
    const image = e.target.files[0]
    setAvatarUser(URL.createObjectURL(image))
    setValue('avatarUrl', image)
  }

  const handleSignOut = async () => {
    const result = await signOut().unwrap()
    if (result) {
      localStorage.removeItem('token')
      dispatch(setUser(null))
      dispatch(setConservation(null))
      // dispatch(setSocket(null))
      dispatch(clearDataConversation())
      navigate('/')
    }
  }

  return (
    <Spring className='relative card flex flex-col items-center gap-2 justify-center'>
      <div className='relative mb-3.5'>
        <img
          loading='lazy'
          className='relative rounded-full w-[110px] h-[110px]'
          src={avatarUser ? avatarUser : userDefault}
          alt=''
        />

        <button
          className='absolute z-10 right-0 bottom-0 h-10 w-10 bg-green text-widget rounded-full border-[3px]
                        border-widget border-solid transition hover:bg-green-darker hover:cursor-pointer'
          aria-label='Change profile picture'
        >
          <i className='inline-block icon-camera-solid mt-1' />
        </button>
        <input
          className='absolute z-10 right-0 bottom-0 h-10 w-10 bg-green text-widget rounded-full border-[3px]
                        border-widget border-solid transition hover:bg-green-darker opacity-0 hover:cursor-pointer'
          type='file'
          accept='*/*'
          onChange={handleChangeAvatar}
        />
      </div>
      <h4>{fullName ? fullName : 'Tran Phuoc Anh Quoc'}</h4>
      <span className='badge badge--square bg-red min-w-[96px] mt-2.5 text-white'>
        {roles.map((role: IRole) => role.name).join(', ') || 'Admin'}
      </span>

      <button disabled={loadingLogout} onClick={handleSignOut} className='btn btn--secondary w-full md:max-w-[280px]'>
        {t('profile pannel.logout')}
      </button>
    </Spring>
  )
}

export default withTranslation('profile')(UserProfileCard)
