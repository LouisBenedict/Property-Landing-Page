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

        <div className='footer-div-container'>
            <div id='developer'>
                <p>Developer</p>
                <img src={unionlogo} alt='union-united-logo' id='union-logo' />
            </div>

            <div id='marketing-agent'>
                <p>Exclusive Marketing Agent</p>
                <img src={kimrealtylogo} alt='kim-realty-logo' id='kim-logo' />
            </div>

            <div id='sales-gallery-container'>
                <h3>The JALIL Sales Gallery & Show Unit</h3>
                <p>
                    A-01-21 & A-01-21A Aurora Place, Plaza Bukit Jalil, 1, Persiaran Jalil 1, 
                    Bandar Bukit Jalil, 57000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur
                    <p>T: 016-333 1199 / 03 - 9764 2395</p>
                    <div id='icon-container'>
                        <img src={mapiconWaze} alt='waze' />
                        <img src={mapiconGoogle} alt='google' />
                    </div>
                </p>

                
                
                
            </div>

            <div id='disclaimer-container'>
                <p>Disclaimer</p>
                <p className='disclaimer-text'>
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
                </p>
            </div>
        </div>

        
        <div className='copyright'>
            <h6>© {copyright_year()} The Jalil. All Rights Reserved</h6>
        </div>
    </div>
  )
}

export default Footer