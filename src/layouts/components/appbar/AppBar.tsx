// hooks
import { useSidebar } from '@contexts/sidebar.context'
import { useWindowSize } from 'react-use'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

//context
import { ThemeContext } from '@contexts/theme.context'

// components
import Headroom from 'react-headroom'
import Search from '@ui/Search'
import ModalBase from '@ui/ModalBase'
import NotificationsPanel from '../navbar/NotificationsPanel'
import MessagesPanel from '../navbar/MessagesPanel'
import SelectLanguage from '@components/SelectLanguage'

// constants
import { LOCALES } from '@constants/options.constant'
import { useAppSelector } from '@hooks/useRedux'

//assets
import useDefault from '@assets/images/common/user_default.png'

//i18
import { useTranslation, withTranslation } from 'react-i18next'
import ToggleDarkLight from './switch/ToggleDarkLight'

const TranslatedAppBar = ({ t }: any) => {
  const navigate = useNavigate()
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false)
  const [notificationsPanelOpen, setNotificationsPanelOpen] = useState<boolean>(false)
  const [messagesPanelOpen, setMessagesPanelOpen] = useState<boolean>(false)

  const { i18n } = useTranslation()
  const [locale, setLocale] = useState(
    localStorage.getItem('language') ? localStorage.getItem('language') : i18n.language
  )

  const { width } = useWindowSize()
  const { theme, toggleTheme }: any = useContext(ThemeContext)
  const { setOpen } = useSidebar()

  const user = useAppSelector((state) => state.persistedReducer.user.user)

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

  return (
    <>
      <Headroom style={{ zIndex: 999 }}>
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

            <div className='z-[2000]'>
              <SelectLanguage
                // placeholder={t('search home.All')}
                value={activeLocale}
                id='status'
                options={LOCALES || []}
                onChange={(e: any) => {
                  handleChangeLangue(e.value)
                  // setActive={setLocale}
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
                    <span className='hidden text-xs font-bold text-white dark:text-[#00193B] xl:block'>7</span>
                  </span>
                </div>
                <div className='relative h-fit mt-1.5 xl:self-end xl:mt-0 xl:mr-1.5'>
                  <button
                    className='text-lg leading-none text-gray dark:text-gray-red xl:text-[20px]'
                    onClick={() => setMessagesPanelOpen(true)}
                    aria-label='Messages'
                  >
                    <i className='icon-message-solid' />
                  </button>
                  <span
                    className='absolute w-3 h-3 rounded-full bg-green -top-1.5 -right-1.5 border-[2px] border-body
                                  xl:w-6 xl:h-6 xl:-top-5 xl:-right-4 xl:flex xl:items-center xl:justify-center'
                  >
                    <span className='hidden text-xs font-bold text-white dark:text-[#00193B] xl:block'>2</span>
                  </span>
                </div>
                <div className='relative'>
                  <button
                    className='h-8 w-8 rounded-full bg-accent text-widget text-sm flex items-center justify-center relative xl:w-11 xl:h-11 xl:text-lg'
                    onClick={() => navigate('settings/profile')}
                    aria-label='Account menu'
                  >
                    <img src={user?.avatar ? user.avatar : useDefault} className='object cover rounded-full h-full' />
                  </button>
                  <span className='badge-online' />
                </div>
              </>
            ) : (
              <button onClick={() => navigate('/signin')} className='btn btn-primary w-36'>
                {t('signin_btn')}
              </button>
            )}
          </div>
        </div>
      </Headroom>
      {width < 768 && (
        <ModalBase open={searchModalOpen} onClose={() => setSearchModalOpen(false)}>
          <div className='card max-w-[360px] w-full'>
            <h3 className='mb-3'>Search</h3>
            <Search placeholder='What are you looking for?' />
          </div>
        </ModalBase>
      )}
      <NotificationsPanel
        open={notificationsPanelOpen}
        onOpen={() => setNotificationsPanelOpen(true)}
        onClose={() => setNotificationsPanelOpen(false)}
      />
      <MessagesPanel
        open={messagesPanelOpen}
        onOpen={() => setMessagesPanelOpen(true)}
        onClose={() => setMessagesPanelOpen(false)}
      />
    </>
  )
}

export const AppBar = withTranslation('common')(TranslatedAppBar)
