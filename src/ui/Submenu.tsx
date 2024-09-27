//components
import Menu from '@mui/material/Menu'

//utils
import { ReactElement } from 'react'

interface Props {
  children?: ReactElement
  open: boolean
  onClose: () => void
  anchorEl: any
}
const Submenu = (props: Props) => {
  const { children, open, onClose, anchorEl } = props

  return (
    <Menu
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      elevation={0}
      classes={{
        paper: '!shadow !min-w-[210px] rounded-md !bg-widget'
      }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      sx={{
        transform: 'translateX(-16px) translateY(-10px)',
        '& .MuiMenu-list': {
          padding: 0,
          color: 'var(--text)'
        }
      }}
    >
      {children}
    </Menu>
  )
}

export default Submenu
