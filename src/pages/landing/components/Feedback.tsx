//images
import fourPeopleImg from '@assets/images/landing/four_people.webp'
import bgPurpleImg from '@assets/images/landing/bg_gradient.webp'
import uitLogoImg from '@assets/images/landing/logo_uit.webp'
import joyWorkImg from '@assets/images/landing/joy_work.webp'

export const Feedback = () => {
  return (
    <section id='feedback'>
      <div className='relative flex flex-col items-center text-center'>
        <div className='w-full'>
          <img
            loading='lazy'
            src={joyWorkImg}
            alt=''
            className='relative h-full w-full object-contain'
          />
        </div>
        <div className='relative flex flex-col items-center justify-center gap-y-10 text-center'>
          <h3 className='my-0 font-sans text-[2em] font-extrabold leading-[1px] tracking-[-0.025em] text-textWhite mdl:text-[4em]'>
            Trusted by more than
          </h3>
          <div className='flex flex-col items-center gap-4 mdl:flex-row'>
            <span className='relative bg-gradient-titleheaderfooter bg-clip-text text-center font-sans text-[3em] font-bold text-transparent'>
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
            <div className='min-w-[400px] mdl:max-w-[32%]'>
              <div className='relative flex flex-col gap-y-[1.5em] rounded-[2.5em] bg-bgDark p-[1.5em] text-left shadow-blue'>
                <div className='flex gap-x-[1em]'>
                  <img
                    loading='lazy'
                    src='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
                    alt=''
                    className='inline-block h-[3.75em] w-[3.75em] max-w-full rounded-full object-cover'
                  />
                  <div className='block text-left'>
                    <div className='my-0 inline-block text-[1.38em] font-bold leading-[1.45] text-textWhite'>
                      Trần Ngọc Nhật Vy
                    </div>
                    <div className=' my-0 font-sans leading-[1.45] text-[0.88] text-textWhite'>
                      University of Social Sciences and Humanities
                    </div>
                  </div>
                  <img
                    loading='lazy'
                    src={uitLogoImg}
                    alt=''
                    className='absolute right-[1.25em] top-[1em] h-[2.5em] w-auto object-contain text-white'
                  />
                </div>
                <p className='text-left text-white'>
                  Quiz offers an outstanding user experience, with its intuitive
                  interface and smooth navigation.
                </p>
              </div>
            </div>

            <div className='min-w-[400px] mdl:max-w-[32%]'>
              <div className='relative flex flex-col gap-y-[1.5em] rounded-[2.5em] bg-bgDark p-[1.5em] text-left shadow-blue'>
                <div className='flex gap-x-[1em]'>
                  <img
                    loading='lazy'
                    src='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
                    alt=''
                    className='inline-block h-[3.75em] w-[3.75em] max-w-full rounded-full object-cover    '
                  />
                  <div className='block text-left'>
                    <div className='my-0 inline-block text-[1.38em] font-bold leading-[1.45] text-textWhite'>
                      Trần Phước Anh Quốc
                    </div>
                    <div className=' my-0 font-sans leading-[1.45] text-[0.88] text-textWhite'>
                      University Of Information Technology
                    </div>
                  </div>
                  <img
                    loading='lazy'
                    src={uitLogoImg}
                    alt=''
                    className='absolute right-[1.25em] top-[1em] h-[2.5em] w-auto object-contain text-white'
                  />
                </div>
                <p className='text-left text-white'>
                  Quiz impresses with its robust feature set. From customizable
                  quizzes to detailed analytics, it covers everything needed for
                  effective learning and assessment. 💪
                </p>
              </div>
            </div>

            <div className='min-w-[400px] mdl:max-w-[32%]'>
              <div className='relative flex flex-col gap-y-[1.5em] rounded-[2.5em] bg-bgDark p-[1.5em] text-left shadow-blue'>
                <div className='flex gap-x-[1em]'>
                  <img
                    loading='lazy'
                    src='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
                    alt=''
                    className='inline-block h-[3.75em] w-[3.75em] max-w-full rounded-full'
                  />
                  <div className='block text-left'>
                    <div className='my-0 inline-block text-[1.38em] font-bold leading-[1.45] text-textWhite'>
                      Nguyễn Phước Trí
                    </div>
                    <div className='my-0 font-sans leading-[1.45] text-[0.88] text-textWhite'>
                      University Of Information Technology
                    </div>
                  </div>
                  <img
                    loading='lazy'
                    src={uitLogoImg}
                    alt=''
                    className='absolute right-[1.25em] top-[1em] h-[2.5em] w-auto object-contain text-white'
                  />
                </div>
                <p className='text-left text-white'>
                  This software is not only engaging but also highly
                  educational. It's a fantastic tool for learning and testing
                  one's knowledge.`
                </p>
              </div>
            </div>

            <div className='min-w-[400px] mdl:max-w-[32%]'>
              <div className='relative flex flex-col gap-y-[1.5em] rounded-[2.5em] bg-bgDark p-[1.5em] text-left shadow-blue'>
                <div className='flex gap-x-[1em]'>
                  <img
                    loading='lazy'
                    src='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
                    alt=''
                    className='inline-block h-[3.75em] w-[3.75em] max-w-full rounded-full'
                  />
                  <div className='block text-left'>
                    <div className='my-0 inline-block text-[1.38em] font-bold leading-[1.45] text-textWhite'>
                      Trần Vương Duy
                    </div>
                    <div className='my-0 font-sans leading-[1.45] text-[0.88] text-textWhite'>
                      University Of Information Technology
                    </div>
                  </div>
                  <img
                    loading='lazy'
                    src={uitLogoImg}
                    alt=''
                    className='absolute right-[1.25em] top-[1em] h-[2.5em] w-auto object-contain text-white'
                  />
                </div>
                <p className='text-left text-white'>
                  The ability to customize quizzes to align with specific
                  educational goals and branding is a standout feature.
                </p>
              </div>
            </div>

            <div className='min-w-[400px] mdl:max-w-[32%]'>
              <div className='relative flex flex-col gap-y-[1.5em] rounded-[2.5em] bg-bgDark p-[1.5em] text-left shadow-blue'>
                <div className='flex gap-x-[1em]'>
                  <img
                    loading='lazy'
                    src='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
                    alt=''
                    className='inline-block h-[3.75em] w-[3.75em] max-w-full rounded-full'
                  />
                  <div className='block text-left'>
                    <div className='my-0 inline-block text-[1.38em] font-bold leading-[1.45] text-textWhite'>
                      Lê Thị Thanh Thảo
                    </div>
                    <div className='my-0 font-sans leading-[1.45] text-[0.88] text-textWhite'>
                      University Of Information Technology
                    </div>
                  </div>
                  <img
                    loading='lazy'
                    src={uitLogoImg}
                    alt=''
                    className='absolute right-[1.25em] top-[1em] h-[2.5em] w-auto object-contain text-white'
                  />
                </div>
                <p className='text-left text-white'>
                  The support for various media types, such as imgs and videos,
                  adds a dynamic element to the quizzes, making learning more
                  engaging. 💪
                </p>
              </div>
            </div>
            <div className='min-w-[400px] mdl:max-w-[32%]'>
              <div className='relative flex flex-col gap-y-[1.5em] rounded-[2.5em] bg-bgDark p-[1.5em] text-left shadow-blue'>
                <div className='flex gap-x-[1em]'>
                  <img
                    loading='lazy'
                    src='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
                    alt=''
                    className='inline-block h-[3.75em] w-[3.75em] max-w-full rounded-full'
                  />
                  <div className='block text-left'>
                    <div className='my-0 inline-block text-[1.38em] font-bold leading-[1.45] text-textWhite'>
                      Mai Đình Khôi
                    </div>
                    <div className=' my-0 font-sans leading-[1.45] text-[0.88] text-textWhite'>
                      University Of Information Technology
                    </div>
                  </div>
                  <img
                    loading='lazy'
                    src={uitLogoImg}
                    alt=''
                    className='absolute right-[1.25em] top-[1em] h-[2.5em] w-auto object-contain text-white'
                  />
                </div>
                <p className='text-left text-white'>
                  Incorporating gamification elements in quizzes adds an element
                  of fun and motivation to the learning process.
                </p>
              </div>
            </div>
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
