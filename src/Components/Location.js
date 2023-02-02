import React from 'react'
import mobilelocationvideo from '../Assets/MobileLocation.mp4'
import mobilemap from '../Assets/TheJalil_Mobile_Map_R3-01.png'
import mobilecar from '../Assets/img2_mobile.png'
import '../Styles/Location.css'
import jalilaerial from '../Assets/Jalil_Aerial-01_1920.png'
import desktopmap from '../Assets/The_Jalil_Desktop_Map_V5-01.png'
import desktopcar from '../Assets/img2.png'

const Location = () => {

    const conditionalRender = () => {
        if (window.innerWidth > 768) {
            return (
                <div className='location-map-container'>
                    <img id='map' src={jalilaerial} alt='map' />
                </div>
            )
        }
    }

    const conditionalMapRender = () => {
        if (window.innerWidth > 768) {
            return (
                <div className='location-map2-container'>
                    <img id='desktop-map' src={desktopmap} alt='map' />
                </div>
            )
        } else {
            return (
                <div className='location-map2-container' id='mobile-map-container'>
                    <img id='mobile-map' src={mobilemap} alt='mobile map' />
                </div>
            )
        }
    }

    const conditionalCarRender = () => {
        if(window.innerWidth > 768) {
            return (
                <div id='car-img-container'>
                    <img src={desktopcar} alt='car' />
                </div>
            );
        } else {
            return (
                <div id='car-img-container'>
                    <img src={mobilecar} alt='car' />
                </div>
            );
        }
    }

  return (
    <div className='location-container'>
        <div className='location-map-container'>
            {conditionalRender()}
            <video autoPlay loop muted id='mobile-location-video'>
                <source src={mobilelocationvideo} type='video/mp4' />
            </video>

            <div className='location-text'>
                <h2>LOCATION</h2>
                <p>
                    Situated in the mature neighbourhood of Puncak Jalil and just next to 
                    Bukit Jalil, the Jalil is easily accessible via the KESAS, MEX AND NSE 
                    highways. Strategically located near Pavilion Bukit Jalil, Technology 
                    Park Malaysia, National Stadium and the vibrant Bandar Kinrara township.
                </p>
            </div>

            {conditionalMapRender()}

        </div>        

        <div className='car-container'>
            
            {conditionalCarRender()}

            {/* <div id='car-img-container'>
                <img src={mobilecar} alt='car' />
            </div> */}
            
            <h2>AN EXCLUSIVE <br /><span>CITY RESORT <br /> ESCAPE</span></h2>
        </div>
    </div>

  )
}

export default Location