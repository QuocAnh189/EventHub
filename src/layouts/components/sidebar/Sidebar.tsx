//hooks
import { useSidebar } from '@contexts/sidebar.context'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWindowSize } from 'react-use'

//styled components
import Drawer from './styles'

//components
import Collapse from '@mui/material/Collapse'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

//constants
import ROUTES from '@constants/routes.constant'

//image
import logoText_Img from '@assets/images/common/logo_text.png'

//interface
import { useAppSelector } from '@hooks/useRedux'
import { Route } from '@interfaces/common.interface'
import { AiFillSliders } from 'react-icons/ai'

//i18n
import { withTranslation } from 'react-i18next'

const Sidebar = ({ t }: any) => {
  const navigate = useNavigate()
  const { width } = useWindowSize()
  const { open, setOpen } = useSidebar()
  const [active, setActive] = useState<string>('')
  const isPermanent = width >= 1920

  const user = useAppSelector((state) => state.persistedReducer.user.user)
  useLayoutEffect(() => {
    if (user?.roles.includes('ADMIN'))
      ROUTES.push({
        name: 'Permissions',
        icon: <AiFillSliders size={20} />,
        path: '/organization/permissions'
      })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => {
      setActive('')
    })

    return () => {
      window.removeEventListener('resize', () => {
        setActive('')
      })
    }
  }, [])

  return (
    <Drawer
      id='appMenu'
      anchor='left'
      transitionDuration={350}
      open={open}
      variant={isPermanent ? 'permanent' : 'temporary'}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      className='overflow-y-hidden'
      sx={{
        '& .MuiDrawer-paper': {
          overflowY: 'hidden'
        }
      }}
    >
      <button
        onClick={() => {
          navigate('/')
        }}
      >
        <img src={logoText_Img} alt='' className='h-[40px] w-full object-contain' />
      </button>
      <nav className='menu'>
        {ROUTES.map((route: Route, index: number) => {
          return (
            <Fragment key={route.name}>
              {route.links && (
                <>
                  <div>
                    <div
                      className={`menu_item ${active === route.name ? 'active' : ''}`}
                      onClick={() => setActive(active === route.name ? '' : route.name)}
                    >
                      <div className='flex items-center gap-2.5'>
                        {route.icon}
                        <span className='text'>{t(`routes.${route.name}.parent`)}</span>
                      </div>
                      <button className='xl:hidden 4xl:block' aria-label='Toggle submenu'>
                        <i className='icon icon-caret-right-solid' />
                      </button>
                    </div>
                    <Collapse in={active === route.name} timeout='auto' unmountOnExit>
                      <div className='submenu flex flex-col gap-2.5'>
                        {route.links.map((link: any) => {
                          return (
                            <NavLink className='submenu_item menu_item' to={link.path} key={link.name}>
                              <span className='flex items-center gap-2.5'>
                                <i className='icon icon-circle-solid' />
                                <span>{t(`routes.${route.name}.${link.name}`)}</span>
                              </span>
                            </NavLink>
                          )
                        })}
                      </div>
                    </Collapse>
                  </div>
                  {index === ROUTES.length - 2 && <span className='menu_divider' />}
                </>
              )}
              {!route.links && (
                <>
                  <NavLink className='menu_item' to={route.path!}>
                    <div className='flex items-center gap-2.5'>
                      {route.icon}
                      <span className='text'>{t(`routes.${route.name}`)}</span>
                    </div>
                  </NavLink>
                  {index === ROUTES.length - 2 && <span className='menu_divider' />}
                </>
              )}
            </Fragment>
          )
        })}
      </nav>
    </Drawer>
  )
}

export default withTranslation('common')(Sidebar)
