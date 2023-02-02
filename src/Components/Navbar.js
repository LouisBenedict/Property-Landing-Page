import React, { useState } from 'react';
import logo from '../Assets/Asset1@3x.png'
import '../Styles/Navbar.css'
import { MdClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'


const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }

    const closeMenu = () => {
        setNavbarOpen(false);
    }

  return (
    <div>
        <div className='navbar-container'>

            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>

            <nav className='navBar'>
                <button onClick={handleToggle}>
                {navbarOpen ? (
                    <MdClose style={{ color: "#fff", width: "25px", height: "30px" }} />
                ) : (
                    <FiMenu style={{ color: "#7b7b7b", width: "25px", height: "30px" }} />
                )}
                </button>
                <ul className={`menuNav ${navbarOpen ? " showMenu" : "noShow"}`}>
                    <li><a className='nav-a' href='/'>FEATURES</a></li>
                    <li><a className='nav-a' href='/'>FACILITIES & AMENITIES</a></li>
                    <li><a className='nav-a' href='/'>LOCATION</a></li>
                    <li><a className='nav-a' href='/'>UNITS PLAN</a></li>
                </ul>
            </nav>    
        </div>
    </div>
  )
}

export default Navbar