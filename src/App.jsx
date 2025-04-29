import React from 'react'
import Navbar from '../components/Navbar'
import Landingpage from '../components/Landingpage'
import Marquee from '../components/Marquee'
import About from '../components/About'
import Skills from '../components/Skills'
import Eyes from '../components/Eyes'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className='min-h-screen w-full text-white bg-zinc-900'>
        <Navbar/>
        <Landingpage/>
        <Marquee/>
        <About/>
        <Skills/>
        <Eyes/>
        <Featured/>
        <Footer/>
      </div>
    </>
  )
}

export default App