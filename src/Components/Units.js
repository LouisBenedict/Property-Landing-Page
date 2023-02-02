import React from 'react'
import '../Styles/Units.css'
import typeAdetailsmobile from '../Assets/Units_plan/Asset_12@3x.png'
import typeAunitimage from '../Assets/Units_plan/Type_A@5x-01.png'
import { Carousel } from 'antd';
import typeBdetailsmobile from '../Assets/Units_plan/Asset_13@3x.png'
import typeBunitimage from '../Assets/Units_plan/Type_B@5x-01.png'
import typeCdetailsmobile from '../Assets/Units_plan/Asset_9@3x.png'
import typeCunitimage from '../Assets/Units_plan/Type_C@5x-01.png'

const Units = () => {

  const conditionalUnitsRender = () => {
    if (window.innerWidth > 768) {
      return (
        <div className='carousel-units-desktop'>

          <Carousel autoplay> 
            <div className='carousel-units-container'>
              <img src={typeAdetailsmobile} alt='unit details' className='mobile-units-details' />
              <img src={typeAunitimage} alt='unit image' id='units-layout' />
            </div>
            <div className='carousel-units-container'>
              <img src={typeBdetailsmobile} alt='unit details' className='mobile-units-details' />
              <img src={typeBunitimage} alt='unit image' id='units-layout' />
            </div>
            <div className='carousel-units-container'>
              <img src={typeCdetailsmobile} alt='unit details' className='mobile-units-details' />
              <img src={typeCunitimage} alt='unit image' id='units-layout' />
            </div>
          </Carousel>
        </div>
      )
    } else {
      return (
        <div className='carousel-units-mobile'>
          <Carousel autoplay> 
            <div className='carousel-units-container'>
              <img src={typeAdetailsmobile} alt='unit details' className='mobile-units-details' />
              <img src={typeAunitimage} alt='unit image' id='units-layout' />
              
            </div>
            <div className='carousel-units-container'>
              <img src={typeBdetailsmobile} alt='unit details' className='mobile-units-details' />
              <img src={typeBunitimage} alt='unit image' id='units-layout' />
            </div>
            <div className='carousel-units-container'>
              <img src={typeCdetailsmobile} alt='unit details' className='mobile-units-details' />
              <img src={typeCunitimage} alt='unit image' id='units-layout' />
            </div>
          </Carousel>
        </div>
      )
    }
  }

  return (
    <div className='units-container'>
        <h2>UNITS PLAN</h2>

        {conditionalUnitsRender()}

        <div className='units-box-seemore'>
          <button>See More</button>
        </div>

    </div>
  )
}

export default Units