import React from 'react'
import logo from '../media/logo192.png'
function Header() {
    return <div className='div-header'>
        <img src={logo} className='logo' alt=""></img>
        <a className="div-header__item" href="/">Bookings</a>
        <a className="div-header__item" href="/">Settings</a>
    </div>
}

export default Header; 