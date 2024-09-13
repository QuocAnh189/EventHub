//components
import UserFeedback from '@components/UserFeedback'

//images
import fourPeopleImg from '@assets/images/landing/four_people.webp'
import bgPurpleImg from '@assets/images/landing/bg_gradient.webp'
import joyWorkImg from '@assets/images/landing/joy_work.webp'

const feedbacks = [
  {
    name: 'Trần Ngọc Nhật Vy',
    university: 'University Of Information Technology',
    feedback: 'Quiz offers an outstanding user experience, with its intuitive interface and smooth navigation.'
  },
  {
    name: 'Trần Phước Anh Quốc',
    university: 'University Of Information Technology',
    feedback:
      'Quiz impresses with its robust feature set. From customizable quizzes to detailed analytics, it covers everything needed for effective learning and assessment.'
  },
  {
    name: 'Mai Đình Khôi',
    university: 'University Of Information Technology',
    feedback: 'Quiz offers an outstanding user experience, with its intuitive interface and smooth navigation.'
  },
  {
    name: 'Hồ Thị Thanh Thảo',
    university: 'University Of Information Technology',
    feedback: 'Quiz offers an outstanding user experience, with its intuitive interface and smooth navigation.'
  },
  {
    name: 'Trần Vương Duy',
    university: 'University Of Information Technology',
    feedback:
      'Quiz impresses with its robust feature set. From customizable quizzes to detailed analytics, it covers everything needed for effective learning and assessment.'
  },
  {
    name: 'Trương Nguyễn Trí',
    university: 'University Of Information Technology',
    feedback: 'Quiz offers an outstanding user experience, with its intuitive interface and smooth navigation.'
  }
]

const Feedback = () => {
  return (
    <section id='feedback'>
      <div className='relative flex flex-col items-center text-center'>
        <div className='w-full'>
          <img loading='lazy' src={joyWorkImg} alt='' className='relative h-full w-full object-contain' />
        </div>
        <div className='relative flex flex-col items-center justify-center gap-y-10 text-center'>
          <h3 className='my-0 font-sans text-[2em] font-extrabold leading-[1px] tracking-[-0.025em] text-white mdl:text-[4em]'>
            Trusted by more than
          </h3>
          <div className='flex flex-col items-center gap-4 mdl:flex-row'>
            <span className='relative bg-gradient-feedback bg-clip-text text-center font-sans text-[3em] font-bold text-transparent'>
              2,500 membership
            </span>
            <span className=''>
              <img
                loading='lazy'
                src={fourPeopleImg}
                alt=''
                className='mb-[-0.25em] inline-block overflow-hidden rounded-[200px] bg-contain bg-no-repeat object-contain'
              />
            </span>
          </div>
        </div>
        <div className='relative z-[1] mt-[7em] flex justify-between gap-x-5 px-20 mdl:flex-row '>
          <div className='flex flex-col flex-wrap items-center justify-center gap-5 mdl:flex-row'>
            {feedbacks.map((feedback, index) => (
              <UserFeedback key={index} {...feedback} />
            ))}
          </div>
          <img
            loading='lazy'
            src={bgPurpleImg}
            alt=''
            className='absolute bottom-[-20%] inline-block h-auto w-[47em] max-w-full opacity-[0.65]'
          />
        </div>
      </div>
    </section>
  )
}

export default Feedback
