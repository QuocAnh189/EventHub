//hooks
import { useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

//components
import { toast } from 'react-toastify'
import CircularProgress from '@mui/material/CircularProgress'

//validate
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

//icons
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import googleIcon from '@assets/images/icons/google.png'
import facebookIcon from '@assets/images/icons/facebook.png'

//type
import { LoginPayload, InitLogin } from '@type/auth.type'

//redux
import { RootState } from '@redux/store'
import { useAppSelector } from '@hooks/index'
import { useSignInMutation } from '@redux/apis/auth.api'

//motion
import { motion } from 'framer-motion'

//i18n
import { withTranslation } from 'react-i18next'

// utils
import classNames from 'classnames'

const formSchema = z.object({
  identity: z.string().min(1, 'Account is not empty'),
  password: z.string().min(1, 'Password is not empty')
})

interface Props {
  t: any
  changeSession: (name: string) => void
}

const FormSignIn = (props: Props) => {
  const { t, changeSession } = props

  const navigate = useNavigate()
  const user = useAppSelector((state: RootState) => state.persistedReducer.user.user)

  const [showPassWord, setShowPassWord] = useState<boolean>(false)

  const [signIn, { isLoading: loadingSignIn }] = useSignInMutation()

  useLayoutEffect(() => {
    if (user) {
      navigate('/organization')
    }
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginPayload>({
    resolver: zodResolver(formSchema),
    defaultValues: InitLogin
  })

  const onSubmit: SubmitHandler<LoginPayload> = async (data: LoginPayload) => {
    try {
      const result = await signIn(data).unwrap()
      if (result) {
        localStorage.setItem('token', JSON.stringify(result))
        navigate('/organization')
      }
    } catch (error: any) {
      const message = error.data.message
      switch (message) {
        case 'Invalid credentials':
          toast.error('Your account or password is wrong')
          break
        default:
          toast.error('Some thing went wrong')
          break
      }
    }
  }

  return (
    <div className='flex flex-col h-full items-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-4 flex flex-col w-4/5 sm:w-full'>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className='relative mb-6'
        >
          <input
            className={classNames(
              'field-input text-header block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-6 font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px]',
              {
                'field-input--error': errors.identity
              }
            )}
            {...register('identity')}
            type='text'
            name='identity'
            placeholder={t('login.identify_placeholder')}
          />
          {errors.identity && <p className='mt-1 text-red'>{errors.identity.message}</p>}
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className='mb-6'
        >
          <div className='relative'>
            <input
              className={classNames(
                'field-input text-header block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-6 font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px]',
                {
                  'field-input--error': errors.identity
                }
              )}
              {...register('password')}
              type={showPassWord ? 'text' : 'password'}
              name='password'
              placeholder={t('login.password_placeholder')}
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
          {errors.password && <p className='mt-1 text-red'>{errors.password.message}</p>}
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <button
            disabled={loadingSignIn}
            type='submit'
            className='flex w-full btn hover:bg-blue-light2 bg-blue-light3 text-white'
          >
            {loadingSignIn ? <CircularProgress size={28} color='info' /> : t('login.signin_btn')}
          </button>
        </motion.div>
      </form>
      <div className='w-4/5 sm:w-full mt-3 flex flex-col gap-y-2'>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button
            onClick={() => navigate('/signup')}
            className='block w-full py-4 text-sm font-semibold hover:rounded-[18px] hover:bg-gray-light2 text-header'
          >
            {t('login.option')}
          </button>
        </motion.div>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          <button
            onClick={() => changeSession('forgot-password')}
            className='block w-full py-4 text-sm font-semibold hover:rounded-[18px] hover:bg-gray-light2 text-header'
          >
            {t('login.forgot_text')}
          </button>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <form method='POST' action='http://localhost:8888/api/v1/auth/external-login?provider=google'>
            <button
              type='submit'
              className='flex w-full flex-row items-center justify-around rounded-2xl border-[2px] border-textPurple bg-white py-[0.8rem] font-bold text-textGray hover:bg-purple hover:text-white'
            >
              <img loading='lazy' src={googleIcon} alt='' className='block h-[20px] w-[20px]' />
              <span className='inline-block'>{t('login.signin_google')}</span>
              <span />
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <form method='POST' action='http://localhost:8888/api/v1/auth/external-login?provider=facebook'>
            <button
              type='submit'
              className='flex w-full flex-row items-center justify-around rounded-2xl border-[2px] border-blue bg-white py-[0.8rem] font-bold text-textGray hover:bg-blue-light3 hover:text-white'
            >
              <img loading='lazy' src={facebookIcon} alt='' className='block h-[20px] w-[20px]' />
              <span className='inline-block'>{t('login.signin_facebook')}</span>
              <span />
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        >
          <button
            onClick={() => {
              navigate('/')
            }}
            className='mb-3 block w-full py-4 text-sm font-bold hover:rounded-[18px] hover:bg-gray-light2 text-header'
          >
            {t('back_btn')}
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default withTranslation('signin')(FormSignIn)
