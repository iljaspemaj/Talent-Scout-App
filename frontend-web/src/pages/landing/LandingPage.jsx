import React from 'react'
import Hero from '../../components/landing/Hero'
import Stats from '../../components/landing/Stats'
import Navbar from '../../components/landing/Navbar'

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