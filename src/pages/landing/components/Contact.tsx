//images
import threePeopleImg from '@assets/images/landing/three_people.webp'
import likeHandImg from '@assets/images/landing/hand_like.webp'

export const Contact = () => {
  return (
    <section id='contact'>
      <div className='relative flex mx-auto px-6 pt-10 font-sans mdl:block'>
        <div className='relative z-[5] mx-auto max-w-[70em] rounded-[2.5em] bg-gradient-blue px-2'>
          <div className='relative z-[1] flex flex-col items-center mdl:items-end justify-center rounded-[2.5em] py-[1rem] mdl:py-[5rem] text-white'>
            <div className='absolute left-[-4em] w-[14em] mdl:left-[-23em] mdl:mt-[2.5rem] mdl:w-[50em]'>
              <img
                loading='lazy'
                src={likeHandImg}
                alt=''
                className='relative hidden mdl:inline-block h-full w-full max-w-full object-cover'
              />
              <div></div>
            </div>
            <div className='relative z-[1] flex w-full max-w-[44em] flex-col gap-y-[1rem] mdl:gap-y-[2rem] px-1'>
              <div>
                <h2 className='mx-0 text-[1em] mdl:text-[4em] font-extrabold leading-[1.3] tracking-[-0.025em] text-white'>
                  Invite friends
                </h2>
              </div>
              <div className='relative flex items-end'>
                <img
                  loading='lazy'
                  src={threePeopleImg}
                  alt=''
                  className='h-[30] w-10 mdl:w-[140px] items-center justify-center'
                />
                <h2 className='mx-0 text-[1em] mdl:text-[4em] font-extrabold leading-[1.3] tracking-[-0.025em] text-white'>
                  with EvenHub
                </h2>
              </div>
              <p className='my-0 inline-block text-[1em] mdl:text-[1.38em] leading-[1.4]'>
                <strong className='font-bold'>Try it 14 days for free</strong> - no credit card required.
              </p>
              <div className='max-w-[620px]'>
                <div className='relative flex min-w-[10em] mdl:min-w-[22em] max-w-full flex-1 flex-row items-center overflow-hidden rounded-[1rem] border-purple bg-white py-1  pl-1'>
                  <input
                    className='focus:shadow-outline w-full appearance-none rounded px-3 py-2 leading-tight text-black focus:outline-none'
                    id='email'
                    type='text'
                    placeholder='Enter your email'
                  />
                  <a
                    className='relative right-2 z-[1] flex min-h-[3.13em] min-w-[8em] cursor-pointer items-center justify-center gap-x-[0.5rem] overflow-hidden rounded-2xl bg-primary mdl:px-4 font-bold text-white'
                    href='mailto:binbin18092003@gmail.com'
                  >
                    <p>Try now</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute bottom-[1px] left-[1px] right-[1px] top-[1px] z-[-1] rounded-[40px] bg-gradient-contact'></div>
        </div>
      </div>
    </section>
  )
}
