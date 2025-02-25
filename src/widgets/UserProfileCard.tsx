//hooks
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@hooks/useRedux'
import { UseFormSetValue } from 'react-hook-form'

//components
import Spring from '@components/Spring'

//redux
import { useSignOutMutation } from '@redux/apis/auth.api'
import { setUser } from '@redux/slices/user.slice'
import { setConversation } from '@redux/slices/conversation.slice'
import { setCoupons } from '@redux/slices/coupon.slice'

//interface
import { IUpdateUserProfilePayload } from '@dtos/user.dto'
import { IRole } from '@interfaces/systems'
// import type { Socket } from 'socket.io-client'

//i18n
import { withTranslation } from 'react-i18next'
import { HiTrash } from 'react-icons/hi'

//redux
import { useAppSelector } from '@hooks/useRedux'
// import { setSocket } from '@redux/slices/socket.slice'

//context
import { AppSocketContext } from '@contexts/socket_io.context'

//assets
import defaultAvatar from '@assets/images/common/user_default.png'

interface IProps {
  t: any
  avatarUrl: string
  avatar: any
  fullName: string
  setValue: UseFormSetValue<IUpdateUserProfilePayload>
  roles: IRole[]
}

const UserProfileCard = (props: IProps) => {
  const { SocketLogout } = useContext(AppSocketContext)

  const { t, avatar, avatarUrl, setValue, fullName, roles } = props
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const socket = useAppSelector((state) => state.socket.socket)

  const [signOut, { isLoading: loadingLogout }] = useSignOutMutation()

  const handleChangeAvatar = (e: any) => {
    const image = e.target.files[0]
    setValue('avatar', image)
  }

  const handleSignOut = async () => {
    const result = await signOut().unwrap()
    if (result) {
      localStorage.removeItem('token')
      dispatch(setUser(null))
      dispatch(setConversation(null))
      dispatch(setCoupons(null))
      if (socket && SocketLogout) {
        SocketLogout(socket)
      }
      navigate('/')
    }
  }

  return (
    <Spring className='relative card flex flex-col items-center gap-2 justify-center'>
      <div className='relative mb-3.5'>
        <img
          loading='lazy'
          className='relative rounded-full w-[110px] h-[110px]'
          src={avatar ? URL.createObjectURL(avatar) : avatarUrl ? avatarUrl : defaultAvatar}
          alt=''
        />
        {avatar && (
          <button
            onClick={() => setValue('avatar', null)}
            className='absolute z-10 right-0 top-0 h-10 w-10 bg-red text-widget rounded-full border-[3px]
                        border-widget border-solid transition hover:bg-red hover:cursor-pointer'
            aria-label='Change profile picture'
          >
            <HiTrash className='ml-1 h-6 w-6' />
          </button>
        )}

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
          onClick={(event: any) => (event.target.value = null)}
        />
      </div>
      <h4>{fullName ? fullName : 'Tran Phuoc Anh Quoc'}</h4>
      <span className='badge badge--square bg-red min-w-[96px] mt-2.5 text-white'>
        {roles?.map((role: IRole) => role.name).join(', ') || 'Admin'}
      </span>

      <button disabled={loadingLogout} onClick={handleSignOut} className='btn btn--secondary w-full md:max-w-[280px]'>
        {t('profile pannel.logout')}
      </button>
    </Spring>
  )
}

export default withTranslation('profile')(UserProfileCard)
