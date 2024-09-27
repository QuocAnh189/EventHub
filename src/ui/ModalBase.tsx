//components
import Modal from '@mui/material/Modal'
import Grow from '@mui/material/Grow'

//utils
import PropTypes from 'prop-types'
import { ReactElement } from 'react'

interface Props {
  open: boolean
  onClose: () => void
  children: ReactElement
}
const ModalBase = (props: Props) => {
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

ModalBase.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default ModalBase
