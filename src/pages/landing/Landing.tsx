//layout
import { Footer } from '@layouts/components'

//components
import { Navbar, Intro, Manage, AutomaticRun, Feedback, Contact } from './components'

const Landing = () => {
  return (
    <main className='bg-gray-light3'>
      <Navbar />
      <Intro />
      <Manage />
      <AutomaticRun />
      <div className='w-full rounded-t-[32px] bg-black px-8'>
        <Feedback />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

export default Landing
