//assets
import notfoundImg from '@assets/images/common/404.png'

const NotFound = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center gap-[88px]'>
      <div className='relative w-1/2 h-full'>
        <img loading='lazy' src={notfoundImg} alt='404 images' className='object-contain' />
      </div>
      <div className='w-1/2 flex flex-col justify-center items-center'>
        <h3 className='text-primary-500 font-bold text-2xl'>Oh No..</h3>
        <h2 className='text-[44px] font-bold mb-1'>An error occurred</h2>
        <p className='text-neutral-600 mb-6'>It appears this page does not exist or has been deleted.</p>
      </div>
    </div>
  )
}

export default NotFound
