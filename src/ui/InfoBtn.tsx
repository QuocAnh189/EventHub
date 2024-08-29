interface IInfoBtnProps {
  onClick?: any
}

export const InfoBtn = (props: IInfoBtnProps) => {
  const { onClick } = props

  return (
    <button className='info-btn flex' onClick={onClick} aria-label='More info'>
      <i className='icon-circle-info-solid' />
    </button>
  )
}
