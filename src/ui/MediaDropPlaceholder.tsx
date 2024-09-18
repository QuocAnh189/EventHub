interface Props {
  text: string
}

const MediaDropPlaceholder = (props: Props) => {
  const { text } = props

  return (
    <div className='flex flex-col items-center gap-2.5'>
      <i className='icon-image-regular text-[20px] text-[#AEAEAE]' />
      <p className='subheading-3'>{text}</p>
    </div>
  )
}

export default MediaDropPlaceholder
