import React from 'react'
import locationicon from '../Assets/location@1x.png'
import tollicon from '../Assets/icon2.png'
import securityicon from '../Assets/icon3.png'
import lifestyleicon from '../Assets/icon4.png'
import '../Styles/Body-2.css'

const Body2 = () => {

  return (
    <div className='body-2-container'>
        <div className='body-2-box-containers'>
            <div className='body-2-box' id='body-box1'>
                <span>01</span>
                <img src={locationicon} alt='location icon' id='location-icon' />
                <p>Strategic location <br /> next to Bukit Jalil</p>
            </div>
            <div className='body-2-box' id='body-box2'>
                <span>02</span>
                <img src={tollicon} alt='toll icon' />
                <p>Toll-free access to <br/> 6 major highways</p>
            </div> 
            <div className='body-2-box' id='body-box3'>
                <span>03</span>
                <img src={securityicon} alt='security icon' />
                <p>Advance security <br/> features</p>
            </div>
            <div className='body-2-box' id='body-box4'>
                <span>04</span>
                <img src={lifestyleicon} alt='lifestyle icon' />
                <p>Convenient access to <br /> lifestyles amenities</p>
            </div>
        </div>
    </div>
  )
}

export default Body2