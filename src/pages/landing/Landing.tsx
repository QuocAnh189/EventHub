//components
import {
  Navbar,
  Intro,
  Manage,
  AutomaticRun,
  Feedback,
  Contact
} from './components'
import { Footer } from '@layouts/components'

const Landing = () => {
  return (
    <main className='overflow-hidden bg-bgGray'>
      <Navbar />
      <Intro />
      <Manage />
      <AutomaticRun />
      <div className='w-screen rounded-t-[32px] bg-bgBlack px-8'>
        <Feedback />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

export default Landing
