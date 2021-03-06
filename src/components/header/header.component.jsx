import React from 'react';
import logo from '../../assets/vmaxtacular-logo.png';
import { MenuItems } from '../menu-items/menu-items.component';
import './header.style.css';
class Header extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked});
    }
    
    render () {

        return (
            <nav className='navbar-items'>
                <div>
                    <img src={logo} className='logo' />
                </div>
                <div 
                className='menu-icon' 
                onClick={this.handleClick}
                >
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}><a 
                            className={item.cName} 
                            href={item.url}
                            >
                            {item.title}
                            </a></li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
};

export default Header;

