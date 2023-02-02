import React from 'react'
import '../Styles/Body-3.css'
import { Carousel } from 'antd';
import pool from '../Assets/Fac1_pool_mobile.png'
import pooldesktop from '../Assets/Fac1_pool_desktop.png'
import bananaslide from '../Assets/Fac1__bananaslide_mobile.png'
import bananaslidedesktop from '../Assets/Fac1_bananaslide_desktop.png'
import campsite from '../Assets/Fac3_campsite_mobile.png'
import moonbardesktop from '../Assets/Fac1_moon_bar_desktop.png'

const Body3 = () => {

  const conditionalRender = () => {
    if (window.innerWidth > 768) {
      return (
        <div className='carousel'>
          <Carousel autoplay> 
            <div className='carousel-container'>
              <img src={pooldesktop} alt='amenities' />
            </div>
            <div className='carousel-container'>
              <img src={bananaslidedesktop} alt='amenities' />
            </div>
            <div className='carousel-container'>
              <img src={moonbardesktop} alt='amenities' />
            </div>
          </Carousel>
        </div>
      )
    } else {
      return (
        <div className='carousel'>
          <Carousel autoplay> 
            <div className='carousel-container'>
              <img src={pool} alt='amenities' />
            </div>
            <div className='carousel-container'>
              <img src={bananaslide} alt='amenities' />
            </div>
            <div className='carousel-container'>
              <img src={campsite} alt='amenities' />
            </div>
          </Carousel>
        </div>
      )
    }
  }

  return (
    <div className='body-3-container'>
        <div className='body-3-box-containers' id='body-3-box1'>
            <h2>COMPLETE CONDO <br /> FACILITIES & <br /> AMENITIES</h2>
            {conditionalRender()}
        </div>

        <div className='body-3-box-containers' id='body-3-box2'>
          <p>Resort-style Living</p>
        </div>
    </div>
  )
}

export default Body3