//layout
import Footer from '@layouts/components/Footer'

//components
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Manage from './components/Manage'
import AutomaticRun from './components/AutomaticRun'
import Feedback from './components/Feedback'
import Contact from './components/Contact'

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
