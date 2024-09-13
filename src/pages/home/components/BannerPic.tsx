interface Props {
  img: string
}

const BannerPic = (props: Props) => {
  const { img } = props
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px'
  }
  return <div data-aos='zoom-in' className='h-[400px] w-4/5' style={bgImage}></div>
}

export default BannerPic
