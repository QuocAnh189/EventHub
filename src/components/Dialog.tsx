//hook
import React from 'react'

//component
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import CircularProgress from '@mui/material/CircularProgress'

interface Props {
  title: string
  description: string
  open: boolean
  setOpen: (value: boolean) => void
  action: string
  onHandle?: () => void
  disabled?: boolean
}

const ConfirmDialog = (props: Props) => {
  const { title, description, open, setOpen, action, onHandle, disabled } = props

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={onHandle}>{disabled ? <CircularProgress size='20px' /> : action}</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default ConfirmDialog
