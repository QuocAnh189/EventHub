// hooks
import { useAppSelector } from '@hooks/useRedux'
import { useLayoutEffect, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const user = useAppSelector((state) => state.persistedReducer.user.user)

  // useLayoutEffect(() => {
  //   if (user === null) {
  //     navigate('/signin')
  //   }
  // }, [user])

  return <div>{children}</div>
}

export default ProtectedLayout
