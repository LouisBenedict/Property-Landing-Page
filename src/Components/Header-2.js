import React from 'react'
import '../Styles/Header-2.css'

const Header2 = () => {
  return (
    <div className='header-2-container'>

        <div className='header-2-box-containers'>
            <div className='header-2-box'>
                <h2 id='box1'>
                    Up to <br />
                    <span>1,070 sqft</span>
                </h2>
            </div>

            <div className='header-2-box'>
                <h2 id='box2'>
                    Lifestyle Facilities <br/>
                    <span>40+</span>
                </h2>
            </div> 
        </div>

        <div className='second-row'>
            <div className='header-2-box'>
                <h2 id='box3'>
                    Monthly Repayment <br/>
                    From <span> RM 1,5XX</span>
                </h2>
            </div>
        </div>
        
        
    </div>
  )
}

export default Header2