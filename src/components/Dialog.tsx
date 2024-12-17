//component
import Loading from './Loading'
import ModalBase from '@ui/ModalBase'

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
    <ModalBase open={open} onClose={() => setOpen(false)}>
      <div className='card relative no-hover flex flex-col w-full max-w-[400px] will-change-transform'>
        <button
          className='absolute top-5 right-5 icon text-[18px] transition hover:text-red'
          onClick={() => setOpen(false)}
          aria-label='Close'
        >
          <i className='icon-circle-xmark-regular' />
        </button>
        <p className='h5'>{title}</p>
        <p className='pt-4'>{description}</p>
        <div className='flex items-center justify-end gap-4 pt-6'>
          <button className='btn' onClick={() => setOpen(false)}>
            <span className='text-black'>Cancel</span>
          </button>
          <button className='btn bg-red' onClick={onHandle}>
            {disabled ? <Loading /> : <span className='text-white'>{action}</span>}
          </button>
        </div>
      </div>
    </ModalBase>
  )
}

export default ConfirmDialog
