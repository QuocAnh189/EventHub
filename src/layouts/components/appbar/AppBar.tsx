//hooks
import { useSidebar } from '@contexts/sidebar.context'
import { useWindowSize } from 'react-use'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

//context
import { ThemeContext } from '@contexts/theme.context'

//components
import Headroom from 'react-headroom'
import Search from '@ui/Search'
import ModalBase from '@ui/ModalBase'
import NotificationsPanel from '../navbar/NotificationsPanel'
import SelectLanguage from '@components/SelectLanguage'
import ToggleDarkLight from './switch/ToggleDarkLight'
import InvitationPanel from '../navbar/InvitationPanel'

//constants
import { LOCALES } from '@constants/options.constant'

//redux
import { useAppSelector } from '@hooks/useRedux'

//assets
import useDefault from '@assets/images/common/user_default.png'

//i18
import { useTranslation, withTranslation } from 'react-i18next'

//interfaces
import { IUser } from '@interfaces/systems'
import { toast } from 'react-toastify'

const AppBar = ({ t }: any) => {
  const navigate = useNavigate()

  const [notification, setNotification] = useState<number>(7)
  const [invitation, setInvitation] = useState<number>(5)
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false)
  const [notificationsPanelOpen, setNotificationsPanelOpen] = useState<boolean>(false)
  const [invitePanelOpen, setInvitePanelOpen] = useState<boolean>(false)

  const { i18n } = useTranslation()
  const [locale, setLocale] = useState(
    localStorage.getItem('language') ? localStorage.getItem('language') : i18n.language
  )

  const { width } = useWindowSize()
  const { theme, toggleTheme }: any = useContext(ThemeContext)
  const { setOpen } = useSidebar()

  const user: IUser = useAppSelector((state) => state.persistedReducer.user.user)
  const socket = useAppSelector((state) => state.socket.socket)

  const activeLocale = LOCALES.find((l: any) => l.value === locale)

  const handleChangeLangue = (value: any) => {
    setLocale(value)
    i18n.changeLanguage(value)
    localStorage.setItem('language', value)
  }

  useEffect(() => {
    setSearchModalOpen(false)
  }, [width])

  useEffect(() => {
    localStorage.setItem('language', i18n.language)
  }, [i18n.language])

  useEffect(() => {
    socket?.on('notify_follow', (data: any) => {
      toast.success('You have a new notification')
      console.log(data)
      setNotification(notification + 1)
    })

    return () => {
      socket?.off('notify_follow')
    }
  }, [socket])

  useEffect(() => {
    socket?.on('notify_invitation', (data: any) => {
      toast.success('You have a new invitation')
      console.log(data)
      setInvitation(invitation + 1)
    })

    return () => {
      socket?.off('notify_invitation')
    }
  }, [socket])

  return (
    <>
      <Headroom>
        <div className='flex items-center justify-between'>
          {width < 1920 && (
            <button className='icon text-2xl leading-none' aria-label='Open sidebar' onClick={() => setOpen(true)}>
              <i className='icon-bars-solid' />
            </button>
          )}
          {width >= 768 && <Search wrapperClass='flex-1 max-w-[1054px] ml-5 mr-auto 4xl:ml-0' />}
          <div className='flex items-center gap-5 md:ml-5 xl:gap-[26px]'>
            {width < 768 && (
              <button
                className='text-[20px] leading-none text-gray dark:text-gray-red xl:text-2xl'
                aria-label='Open search'
                onClick={() => setSearchModalOpen(true)}
              >
                <i className='icon-magnifying-glass-solid' />
              </button>
            )}
            <ToggleDarkLight theme={theme} toggleTheme={toggleTheme} />

            <div className='z-[1001]'>
              <SelectLanguage
                value={activeLocale}
                id='status'
                options={LOCALES || []}
                onChange={(e: any) => {
                  handleChangeLangue(e.value)
                }}
              />
            </div>
            {user !== null ? (
              <>
                <div className='relative h-fit mt-1.5 xl:self-end xl:mt-0 xl:mr-1.5'>
                  <button
                    className='text-lg leading-none text-gray dark:text-gray-red xl:text-[20px]'
                    onClick={() => setNotificationsPanelOpen(true)}
                    aria-label='Notifications'
                  >
                    <i className='icon-bell-solid' />
                  </button>
                  <span
                    className='absolute w-3 h-3 rounded-full bg-red -top-1.5 -right-1.5 border-[2px] border-body
                                  xl:w-6 xl:h-6 xl:-top-5 xl:-right-4 xl:flex xl:items-center xl:justify-center'
                  >
                    <span className='hidden text-xs font-bold text-white dark:text-[#00193B] xl:block'>
                      {notification}
                    </span>
                  </span>
                </div>
                <div className='relative h-fit mt-1.5 xl:self-end xl:mt-0 xl:mr-1.5'>
                  <button
                    className='text-lg leading-none text-gray dark:text-gray-red xl:text-[20px]'
                    onClick={() => setInvitePanelOpen(true)}
                    aria-label='Messages'
                  >
                    <i className='icon-user-solid' />
                  </button>
                  <span
                    className='absolute w-3 h-3 rounded-full bg-green -top-1.5 -right-1.5 border-[2px] border-body
                                  xl:w-6 xl:h-6 xl:-top-5 xl:-right-4 xl:flex xl:items-center xl:justify-center'
                  >
                    <span className='hidden text-xs font-bold text-white dark:text-[#00193B] xl:block'>
                      {invitation}
                    </span>
                  </span>
                </div>
                <div className='relative'>
                  <button
                    className='h-8 w-8 rounded-full bg-accent text-widget text-sm flex items-center justify-center relative xl:w-11 xl:h-11 xl:text-lg'
                    onClick={() => navigate('settings/profile')}
                    aria-label='Account menu'
                  >
                    <img
                      src={user.avatarUrl ? user.avatarUrl : useDefault}
                      className='object cover rounded-full h-full'
                    />
                  </button>
                  <span className='badge-online' />
                </div>
              </>
            ) : (
              <button onClick={() => navigate('/signin')} className='btn btn-primary w-36'>
                {t('header.signin_btn')}
              </button>
            )}
          </div>
        </div>
      </Headroom>
      {width < 768 && (
        <ModalBase open={searchModalOpen} onClose={() => setSearchModalOpen(false)}>
          <div className='card max-w-[360px] w-full'>
            <h3 className='mb-3'>{t('header.search')}</h3>
            <Search placeholder='What are you looking for?' />
          </div>
        </ModalBase>
      )}
      <NotificationsPanel
        open={notificationsPanelOpen}
        onOpen={() => setNotificationsPanelOpen(true)}
        onClose={() => setNotificationsPanelOpen(false)}
      />
      <InvitationPanel
        open={invitePanelOpen}
        onOpen={() => setInvitePanelOpen(true)}
        onClose={() => setInvitePanelOpen(false)}
      />
    </>
  )
}

export default withTranslation('common')(AppBar)
