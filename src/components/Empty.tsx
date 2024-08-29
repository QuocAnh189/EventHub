// components
import { Spring } from './Spring'

interface Props {
  text?: string
}

export const Empty = (props: Props) => {
  const { text = props.text || 'Nothing found' } = props

  return (
    <Spring className='flex flex-1 flex-col items-center justify-center gap-3' type='slideUp'>
      <p className='text-sm font-body text-gray'>{text}</p>
    </Spring>
  )
}
