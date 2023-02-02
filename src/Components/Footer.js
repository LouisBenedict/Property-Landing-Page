import React from 'react'
import '../Styles/Footer.css'
import unionlogo from '../Assets/Union_Development_logo.PNG'
import kimrealtylogo from '../Assets/kimrealty.png'
import mapiconGoogle from '../Assets/MapIcon_Google.png'
import mapiconWaze from '../Assets/MapIcon_Waze.png'

const Footer = () => {

    const copyright_year = () => {
        const date = new Date().getFullYear();
        return date;
    }

  return (
    <div className='footer-container'>

        <div id='flex-row'>
            <div className='footer-container-row'>
                <div className='footer-developer'>
                    <h5>Developer</h5>
                    <img src={unionlogo} alt='union-united-logo' />
                </div>

                <div className='footer-marketing-agent'>
                    <h5>Exclusive Marketing Agent</h5>
                    <img src={kimrealtylogo} alt='kim-realty-logo' />
                </div>

                <div className='footer-sales-gallery'>
                    <h5>The JALIL Sales Gallery & Show Unit</h5>
                    <h5>
                        A-01-21 & A-01-21A Aurora Place, Plaza Bukit Jalil, 1, Persiaran Jalil 1, 
                        Bandar Bukit Jalil, 57000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur
                    </h5>
                    <h5>T: 016-333 1199 / 03 - 9764 2395</h5>
                    <img src={mapiconWaze} alt='waze' />
                    <img src={mapiconGoogle} alt='google' />
                </div>

                <div className='footer-disclaimer'>
                    <h5>Disclaimer</h5>
                    <h6 className='disclaimer-text'>
                        The visual herein is used for the purposes of registration, 
                        preview and gauging of maket response 
                        only and shall not be treated as an offer for sale as the 
                        development is pending approval by the relevant authorities.

                        The perspective and information herein are subject to change 
                        without any notification as may be required by the relevant 
                        authorities and/or the Developer's consultants and shall not form
                        part of any offer or contract. The rendering, illustration and picture
                        herein are artist's impression and all measurements are approximately only.
                        While every reasonable care has been taken in preparing this visual, the 
                        Developer and/or its agent shall not be held liable for any errors, 
                        misrepresentations and charges made thereto. 
                    </h6>
                </div>
            </div>
            

            
        </div>

        
        <div className='copyright'>
            <h6>© {copyright_year()} The Jalil. All Rights Reserved</h6>
        </div>
    </div>
  )
}

export default Footer