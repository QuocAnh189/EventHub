interface Props {
  className?: string
  onClick?: any
}

export const SubmenuTrigger = (props: Props) => {
  const { className, onClick } = props

  return (
    <button className={className || ''} onClick={onClick} aria-label='Open submenu'>
      <i className='icon icon-ellipsis-vertical-solid text-[24px]' />
    </button>
  )
}
