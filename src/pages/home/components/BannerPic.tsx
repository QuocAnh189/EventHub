export const BannerPic = ({ img }: any) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px'
  }
  return <div data-aos='zoom-in' className='h-[400px] w-4/5' style={bgImage}></div>
}
