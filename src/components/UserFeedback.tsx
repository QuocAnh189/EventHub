import uitLogoImg from '@assets/images/landing/logo_uit.webp'

interface Props {
  name: string
  university: string
  feedback: string
}

const UserFeedback = (props: Props) => {
  const { name, university, feedback } = props

  return (
    <div className='min-w-[400px] mdl:max-w-[32%]'>
      <div className='relative flex flex-col gap-y-[1.5em] rounded-[2.5em] bg-dark p-[1.5em] text-left shadow-blue'>
        <div className='flex gap-x-[1em]'>
          <img
            loading='lazy'
            src='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
            alt=''
            className='inline-block h-[3.75em] w-[3.75em] max-w-full rounded-full object-cover'
          />
          <div className='block text-left'>
            <div className='my-0 inline-block text-[1.38em] font-bold leading-[1.45] text-white'>{name}</div>
            <div className=' my-0 font-sans leading-[1.45] text-[0.88] text-white'>{university}</div>
          </div>
          <img
            loading='lazy'
            src={uitLogoImg}
            alt=''
            className='absolute right-[1.25em] top-[1em] h-[2.5em] w-auto object-contain text-white'
          />
        </div>
        <p className='text-left text-white line-clamp-2'>{feedback}</p>
      </div>
    </div>
  )
}

export default UserFeedback
