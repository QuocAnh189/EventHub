import { ReactElement } from 'react'

// components
import Modal from '@mui/material/Modal'
import Grow from '@mui/material/Grow'

interface Props {
  open: boolean
  onClose: () => void
  children: ReactElement
}

export const ModalBase = (props: Props) => {
  const { open, onClose, children } = props

  return (
    <Modal
      open={open}
      onClose={onClose}
      classes={{
        root: 'flex justify-center items-center p-5'
      }}
      closeAfterTransition
    >
      <Grow in={open} timeout={300}>
        {children}
      </Grow>
    </Modal>
  )
}
