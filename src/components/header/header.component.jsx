import React from 'react';
import logo from '../../assets/vmaxtacular-logo.png';
import './header.style.css';

const Header = () => {
    return (
        <div>
            <header>
                <img src={logo} alt='logo' className='logo' />
                <nav className='navigation'></nav>
            </header>
        </div>
    )
}

export default Header;
