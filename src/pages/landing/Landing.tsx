//components
import { Navbar, Intro, Manage, AutomaticRun, Feedback, Contact } from './components'
import { Footer } from '@layouts/components'

const Landing = () => {
  return (
    <main className='overflow-hidden bg-gray-light3'>
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
