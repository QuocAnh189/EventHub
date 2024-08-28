//hook
import {
  ReactNode,
  useState,
  createContext,
  useContext,
  useEffect
} from 'react'
import { useScrollLock } from '@hooks/index'
import { useLocation } from 'react-router-dom'

const SidebarContext = createContext<any>(undefined)

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const setIsLocked = useScrollLock()

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    if (open) {
      setIsLocked(true)
    } else {
      setIsLocked(false)
    }

    return () => {
      setIsLocked(false)
    }
  }, [open])

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => useContext(SidebarContext)
