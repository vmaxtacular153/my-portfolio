import React from 'react';
import logo from '../../assets/vmaxtacular-logo.png';
import './header.style.css';

const Header = () => {
    return (
        <div>
            <header>
                <div className='logo'>
                <img src={logo} alt='logo' />
                </div>
                <button className='nav-toggle' aria-label='toggle-navigation'>
                <span className='hamburger'></span>
                </button>
                <nav className='nav'>
                <ul className='nav-list'>
                    <li className='nav-item nav-link'><a href='#'>Home</a></li>
                    <li className='nav-item nav-link'><a href='#'>My Services</a></li>
                    <li className='nav-item nav-link'><a href='#'>My Work</a></li>
                    <li className='nav-item nav-link'><a href='#'>Contact</a></li>
                </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;
