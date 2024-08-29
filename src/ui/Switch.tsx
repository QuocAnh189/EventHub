interface Props {
  defaultChecked?: boolean
  checked?: boolean
  onChange?: () => void
  id?: any
}

export const Switch = (props: Props) => {
  const { defaultChecked, checked, onChange, id } = props

  return (
    <div className='switch'>
      <input id={id} type='checkbox' checked={checked} onChange={onChange} defaultChecked={defaultChecked} />
      <label className='switch_slider' htmlFor={id} />
    </div>
  )
}
