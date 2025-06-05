import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Navbar from '../components/Navbar'

const LandingPage = () => {
    return (
    <div className='bg-[#F8F8F8] min-h-screen'>
      <Navbar/>
    <Hero/>
    <Stats/>
    </div>
  )
}

export default LandingPage