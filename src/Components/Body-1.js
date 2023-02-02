import React from 'react'
import imagemobile from '../Assets/img1_mobile.png'
import '../Styles/Body-1.css'
import imagedesktop from '../Assets/img1.png'

const Body = () => {

  const conditionalRender = () => {
    if (window.innerWidth > 768) {
      return (
        <img src={imagedesktop} alt='resort with nature' />
      )
    } else {
      return (
        <img src={imagemobile} alt='resort with nature' />
      )
    }
  }

  return (
    <div className='body-container'>
        <div className='body'>
            {conditionalRender()}
            <h2>RESORT <span>LIVING WITHIN NATURE'S</span><span>EMBRACE</span></h2>
        </div>
    </div>
  )
}

export default Body