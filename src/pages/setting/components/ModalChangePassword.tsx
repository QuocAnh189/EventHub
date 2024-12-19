//hooks
import { useState } from 'react'

//components
import ModalBase from '@ui/ModalBase'
import Loading from '@components/Loading'
import { toast } from 'react-toastify'

//util
import classNames from 'classnames'

//redux
import { useChangePasswordMutation } from '@redux/apis/user.api'

//dto
import { IChangePasswordsPayload } from '@dtos/user.dto'

//icons
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

interface IProps {
  modalOpen: boolean
  setModalOpen: (value: boolean) => void
}

const ModalChangePassword = (props: IProps) => {
  const { modalOpen, setModalOpen } = props

  const [showPassWord, setShowPassWord] = useState<boolean>(false)
  const [showNewPassWord, setShowNewPassWord] = useState<boolean>(false)

  const [password, setPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')

  const [ChangePassword, { isLoading }] = useChangePasswordMutation()

  const handleChangePassword = async () => {
    const data: IChangePasswordsPayload = { password, newPassword }
    try {
      const result = await ChangePassword(data).unwrap()
      if (result) {
        toast.success('Change password successfully')
        setPassword('')
        setNewPassword('')
        setModalOpen(false)
      }
    } catch (error: any) {
      switch (error.data.message) {
        case 'password is wrong':
          toast.error('Current password is incorrect')
          break
        default:
          toast.error('Some thing went wrong')
          break
      }
    }
  }

  return (
    <ModalBase open={modalOpen} onClose={() => setModalOpen(false)}>
      <div className='card relative no-hover flex flex-col w-full max-w-[400px] will-change-transform'>
        <button
          className='absolute top-5 right-5 icon text-[18px] transition hover:text-red'
          onClick={() => setModalOpen(false)}
          aria-label='Close'
        >
          <i className='icon-circle-xmark-regular' />
        </button>
        <h6 className='h6'>Change Password</h6>
        <div className='flex flex-col gap-4 mt-4'>
          <div className='field-wrapper'>
            <label className='field-label' htmlFor='brandName'>
              Current password
            </label>
            <div className='relative'>
              <input
                type={showPassWord ? 'text' : 'password'}
                className={classNames('field-input')}
                id='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type='button'
                className='absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer text-header'
                onClick={() => {
                  setShowPassWord(!showPassWord)
                }}
              >
                {showPassWord ? (
                  <AiFillEye className='h-[20px] w-[20px]' />
                ) : (
                  <AiFillEyeInvisible className=' h-[20px] w-[20px]' />
                )}
              </button>
            </div>
          </div>
          <div className='field-wrapper'>
            <label className='field-label' htmlFor='description'>
              New password
            </label>
            <div className='relative'>
              <input
                type={showNewPassWord ? 'text' : 'password'}
                className={classNames('field-input')}
                id='new_password'
                placeholder='Enter new password'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                type='button'
                className='absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer text-header'
                onClick={() => {
                  setShowNewPassWord(!showNewPassWord)
                }}
              >
                {showNewPassWord ? (
                  <AiFillEye className='h-[20px] w-[20px]' />
                ) : (
                  <AiFillEyeInvisible className=' h-[20px] w-[20px]' />
                )}
              </button>
            </div>
          </div>
          <button onClick={handleChangePassword} className='btn btn-primary hover:bg-primary-300'>
            {isLoading ? <Loading /> : 'Change Password'}
          </button>
        </div>
      </div>
    </ModalBase>
  )
}

export default ModalChangePassword
