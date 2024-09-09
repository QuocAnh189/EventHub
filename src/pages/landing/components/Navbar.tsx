import React from 'react'

//navigate
import { useNavigate } from 'react-router-dom'

//icons
import { WiDirectionRight } from 'react-icons/wi'
import { RxDividerVertical } from 'react-icons/rx'
import { AiOutlineMenu } from 'react-icons/ai'
import { FcHome, FcManager, FcViewDetails, FcContacts, FcFeedback } from 'react-icons/fc'

//image
import logoText_Img from '@assets/images/common/logo_text.png'

//animation
import { motion } from 'framer-motion'

export const Navbar = () => {
  const navigate = useNavigate()

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.href

    const targetId = href.replace(/.*\#/, '')
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className='fixed left-[0] right-[0] top-[0] z-[999] py-6'
    >
      <div className='mx-auto block w-full max-w-container rounded-md bg-transparent px-12'>
        <div className='mx-auto flex max-w-contentContainer items-center justify-between gap-[2em]'>
          <div className='h-12 w-[10em] cursor-pointer rounded-xl bg-white shadow-white'>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='flex h-full w-full items-center justify-center rounded-xl px-2'
            >
              <img loading='lazy' src={logoText_Img} alt='' className='h-[40px] w-full object-contain' />
            </motion.a>
          </div>
          <nav className='relative float-right hidden flex-1 flex-row items-center justify-end gap-[1em] xl:flex'>
            <ul className='relative z-[1] flex flex-row items-center justify-between gap-1 rounded-[1em] bg-white px-3 shadow-white'>
              <a href={'#intro'} onClick={handleScroll}>
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.1 }}
                  className='font-bold'
                >
                  <div className='relative z-[900] mx-auto text-center'>
                    <div className='min-w-auto mt-1 flex w-auto gap-2 cursor-pointer flex-row items-center justify-center rounded-xl px-1 py-1 tracking-wide hover:underline'>
                      <div className='flex h-full w-full items-center justify-center'>
                        <span className='text-4xl text-black'>
                          <FcHome className='w-[20px]' />
                        </span>
                      </div>
                      <div className='text-[1em] leading-snug'>Intro</div>
                    </div>
                  </div>
                </motion.li>
              </a>
              <a href={'#manager'} onClick={handleScroll}>
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.2 }}
                  className='font-bold'
                >
                  <div className='relative z-[900] mx-auto text-center'>
                    <div className='min-w-auto mt-1 flex w-auto gap-2 cursor-pointer flex-row items-center rounded-xl px-1 py-1 tracking-wide hover:underline'>
                      <div className='flex h-full w-full items-center justify-center'>
                        <span className='text-4xl text-black'>
                          <FcManager className='w-[20px]' />
                        </span>
                      </div>
                      <div className='inline-block leading-snug'>Manage</div>
                    </div>
                  </div>
                </motion.li>
              </a>
              <a href={'#overview'} onClick={handleScroll}>
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.3 }}
                  className='font-bold'
                >
                  <div className='relative z-[900] mx-auto text-center'>
                    <div className='min-w-auto mt-1 flex w-auto gap-2 cursor-pointer flex-row items-center rounded-xl px-1 py-1 tracking-wide hover:underline'>
                      <div className='flex h-full w-full items-center justify-center'>
                        <span className='text-4xl text-black'>
                          <FcViewDetails className='w-[20px]' />
                        </span>
                      </div>
                      <div className='text-[1em] leading-snug'>Overview</div>
                    </div>
                  </div>
                </motion.li>
              </a>
              <a href={'#feedback'} onClick={handleScroll}>
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.4 }}
                  className='font-bold'
                >
                  <div className='relative z-[900] mx-auto text-center'>
                    <div className='min-w-auto mt-1 flex gap-2 w-auto cursor-pointer flex-row items-center rounded-xl px-1 py-1  tracking-wide hover:underline'>
                      <div className='flex h-full w-full items-center justify-center'>
                        <span className='text-4xl text-black'>
                          <FcFeedback className='w-[20px]' />
                        </span>
                      </div>
                      <span className='text-[1em] leading-snug'>Feedback</span>
                    </div>
                  </div>
                </motion.li>
              </a>
              <a href={'#contact'} onClick={handleScroll}>
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.5 }}
                  className='font-bold'
                >
                  <div className='relative z-[900] mx-auto text-center'>
                    <div className='min-w-auto mt-1 flex gap-2 w-auto cursor-pointer flex-row items-center rounded-xl px-1 py-1  tracking-wide hover:underline'>
                      <div className='flex h-full w-full items-center justify-center'>
                        <span className='text-4xl text-black'>
                          <FcContacts className='w-[20px]' />
                        </span>
                      </div>
                      <span className='text-[1em] leading-snug'>Contact</span>
                    </div>
                  </div>
                </motion.li>
              </a>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
                className='cursor-pointer font-bold'
              >
                <span>
                  <RxDividerVertical height={10} />
                </span>
              </motion.li>
              <button
                onClick={() => {
                  navigate('signin')
                }}
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.6 }}
                  className='font-bold'
                >
                  <div className='relative z-[900] mx-auto inline-block cursor-pointer rounded-xl hover:underline'>
                    <div className='min-w-auto flex w-auto flex-row items-center gap-1 px-2 py-2 tracking-wide'>
                      <div className='text-[1em] leading-snug'>Login</div>
                    </div>
                  </div>
                </motion.li>
              </button>
              <button
                onClick={() => {
                  navigate('signup')
                }}
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.7 }}
                  className='font-bold'
                >
                  <div className='relative z-[900] mx-auto inline-block cursor-pointer rounded-xl hover:underline'>
                    <div className='min-w-auto flex w-auto flex-row items-center gap-1 px-2 py-2 tracking-wide'>
                      <div className='text-[1em] leading-snug'>Register</div>
                    </div>
                  </div>
                </motion.li>
              </button>
            </ul>

            <button
              onClick={() => {
                navigate('organization')
              }}
              className='alight-center relative z-[1] flex max-w-full flex-row items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-6 py-1 font-black text-white shadow-purple hover:bg-primary-500 hover:delay-[0s] hover:duration-[0.3s] hover:ease-ease'
            >
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.8 }}
                className='relative -ml-3 h-10 w-10'
              >
                <div className='absolute z-[-1] h-10 w-10 rounded-full bg-primary-500' />
                <div className='flex h-full w-full items-center justify-center  text-4xl text-white hover:text-[70px]'>
                  <WiDirectionRight />
                </div>
              </motion.div>
              <motion.div
                className='font-sans'
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.9 }}
              >
                Get Started
              </motion.div>
            </button>
          </nav>
          <button className='xl:hidden'>
            <div className='relative z-[5] rounded-[50%] bg-white p-5 font-extrabold'>
              <AiOutlineMenu />
            </div>
          </button>
        </div>
        <div className='hidden'></div>
      </div>
    </motion.div>
  )
}
