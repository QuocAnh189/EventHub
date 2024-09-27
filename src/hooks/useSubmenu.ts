//hooks
import { useState, useEffect } from 'react'

export const useSubmenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    window.addEventListener('resize', handleClose)
  }, [])

  return { anchorEl, open, handleClick, handleClose }
}
