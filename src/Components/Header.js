import React from 'react'
import '../Styles/Header.css'
import heromobile from '../Assets/hero_mobile.png'
import herodesktop from '../Assets/Hero_desktop.png'

const Header = () => {

  const conditionalRender = () => {
    if (window.innerWidth > 768) {
      return (
        <div className='header-image'>
          <img src={herodesktop} alt='header' />
        </div>
      )
    } else {
      return (
        <div className='header-image'>
          <img src={heromobile} alt='header' />
        </div>
      )
    }
  }

  return (
    <div className='header-container'>

        {conditionalRender()}

        {/* <div className='header-image'>
          <img src={conditionalRender()} alt='header' />
        </div> */}
            
        <div className='header-text'>
          <h1>NEW <br/> <span>Launch</span></h1>
          <h2 className='chronical-r-tag'>Resort-styled Apartments <br /> Puncak Jalil</h2>
          <h2 className='arial-b-tag'>2 - 4 Bedrooms from <br /> <span>RM 3XXK*</span></h2>
        </div>
    </div>
  )
}

export default Header