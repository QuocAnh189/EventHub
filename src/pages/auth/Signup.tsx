// hooks
import { useMemo, useState, ChangeEvent } from 'react'
import { useWindowSize } from 'react-use'
import { useNavigate } from 'react-router-dom'

//component
import { toast } from 'react-toastify'
import { SessionOne, SessionTwo } from './components'

//motion
import { motion } from 'framer-motion'

//type
import { SignUpPayload, SignUpPayloadOne, SignUpPayloadTwo, InitSignUpOne, InitSignUpTwo } from '@type/auth.type'

//redux
import { useAppDispatch } from '@hooks/useRedux'
import { setUser } from '@redux/slices/user.slice'
import { useSignUpMutation } from '@redux/apis/auth.api'

//i18
import { withTranslation } from 'react-i18next'

// assets
import authImg from '@assets/images/auth/bg_auth.png'
import logoText_Img from '@assets/images/common/logo_text.png'

const SignUp = ({ t }: any) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { width } = useWindowSize()

  const [signUp, { isLoading }] = useSignUpMutation()

  const [formDataSessionOne, setFormDataSessionOne] = useState<SignUpPayloadOne>(InitSignUpOne)
  const [formDataSessionTwo, setFormDataSessionTwo] = useState<SignUpPayloadTwo>(InitSignUpTwo)

  const [showFormSessionOne, setShowFormSessionOne] = useState<boolean>(true)
  const [showFormSessionTwo, setShowFormSessionTwo] = useState<boolean>(false)

  const nextSession = useMemo(() => {
    return () => {
      setShowFormSessionOne(false)
      setShowFormSessionTwo(true)
    }
  }, [])

  const backSession = useMemo(() => {
    return () => {
      setShowFormSessionOne(true)
      setShowFormSessionTwo(false)
    }
  }, [])

  const handleChangeFormSessionOne = (e: ChangeEvent<HTMLInputElement> | any) => {
    setFormDataSessionOne({
      ...formDataSessionOne,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeFormSessionTwo = (e: ChangeEvent<HTMLInputElement> | any) => {
    setFormDataSessionTwo({
      ...formDataSessionTwo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async () => {
    const formData: SignUpPayload = {
      ...formDataSessionOne,
      ...formDataSessionTwo
    }

    try {
      const result = await signUp(formData).unwrap()

      if (result) {
        localStorage.setItem('token', JSON.stringify(result))
        const response = await fetch(`${import.meta.env.VITE_API_URL!}/auth/profile`, {
          headers: { Authorization: `Bearer ${result.accessToken}` }
        })

        const user = await response.json()

        if (user) {
          dispatch(setUser(user.data))
          navigate('/organization')
        }
      }
    } catch (error: any) {
      const message = error.data.message
      switch (message) {
        case 'Email already exists':
          toast.error('Email already exists')
          break
        case 'Phone number already exists':
          toast.error('Phone already exists')
          break
        default:
          break
      }
    }
  }

  return (
    <div className='flex-1 grid grid-cols-1 xl:grid-cols-2 4xl:grid-cols-[minmax(0,_1030px)_minmax(0,_1fr)]'>
      {width >= 1280 && (
        <div className='flex flex-col justify-center items-center lg:p-[60px]'>
          <a className='logo' href='/'>
            <img loading='lazy' src={logoText_Img} alt='EventHub' className='w-[200px] object-cover' />
          </a>
          <p className='text-center tracking-[0.2px] font-semibold text-lg leading-6 max-w-[540px] my-7 mx-auto'>
            {t('slogan')}
          </p>
          <img loading='lazy' className='max-w-[780px]' src={authImg} alt='media' />
        </div>
      )}
      <div className='relative w-full h-screen flex justify-center items-center'>
        <motion.main
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1 }}
          className='mx-auto mt-auto flex min-h-screen w-full max-w-full flex-col overflow-hidden bg-pink'
        >
          <div className='absolute left-[50%] top-[50%] min-h-full w-[600px] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-[50px] bg-body px-[100px] py-[60px] mdl:min-h-[600px]'>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className='mb-[30px] flex flex-row items-center justify-center gap-x-4'
            >
              <h1 className='text-4xl font-semibold'>{t('title')}</h1>
            </motion.div>
            <div className='block h-full'>
              {showFormSessionOne && (
                <SessionOne
                  nextSession={nextSession}
                  formDataSessionOne={formDataSessionOne}
                  setFormDataSessionOne={handleChangeFormSessionOne}
                />
              )}
              {showFormSessionTwo && (
                <SessionTwo
                  backSession={backSession}
                  formDataSessionTwo={formDataSessionTwo}
                  setFormDataSessionTwo={handleChangeFormSessionTwo}
                  handleSubmit={handleSubmit}
                  disabled={isLoading}
                />
              )}
            </div>
            <div className='absolute bottom-0 left-[50%] min-h-[40px] w-full translate-x-[-50%] text-center'>
              <p className='font-semibold text-header'>
                {t('footer_one')} - <span className='font-bold text-header'>{t('footer_two')}</span>
              </p>
            </div>
          </div>
        </motion.main>
      </div>
    </div>
  )
}

export default withTranslation('signup')(SignUp)
