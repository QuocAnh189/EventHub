interface Props {
  onClick?: any
}

const InfoBtn = (props: Props) => {
  const { onClick } = props

  return (
    <button className='info-btn flex' onClick={onClick} aria-label='More info'>
      <i className='icon-circle-info-solid' />
    </button>
  )
}

export default InfoBtn
