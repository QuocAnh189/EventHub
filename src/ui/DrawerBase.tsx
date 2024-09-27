import { ReactNode } from 'react'

//components
import SwipeableDrawer from '@mui/material/SwipeableDrawer'

//utils
import PropTypes from 'prop-types'

interface Props {
  open: boolean
  onOpen: () => void
  onClose: () => void
  anchor: 'left' | 'right' | 'top' | 'bottom'
  children: ReactNode
}

const DrawerBase = (props: Props) => {
  const { open, onOpen, onClose, anchor = 'left', children } = props
  return (
    <SwipeableDrawer
      anchor={anchor}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          boxShadow: 'var(--shadow)',
          background: 'var(--widget)',
          color: 'var(--text)',
          height: 'var(--app-height)',
          minHeight: '-webkit-fill-available'
        }
      }}
      classes={{
        paper: '!w-full sm:!w-[342px] flex flex-col'
      }}
    >
      {children}
    </SwipeableDrawer>
  )
}

DrawerBase.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  anchor: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  children: PropTypes.node.isRequired
}

export default DrawerBase
