import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
// import DirectorLogin from '../DirectorLogin/DirectorLogin'
import Slider from '../../Components/HomeCarousel/Slider'

function Homepage() {
  return (
    <div>
      <Navbar/>
        {/* <DirectorLogin/> */}
        <Slider/>
        <Footer/>
    </div>
  )
}

export default Homepage