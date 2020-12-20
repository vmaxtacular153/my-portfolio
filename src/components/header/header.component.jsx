import React from 'react';
import logo from '../../assets/vmaxtacular-logo.png';
import { Navbar, NavDropdown } from 'react-bootstrap';
import './header.style.css';
import { Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='navbar-container'>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="#home">
                    <img src={logo} className='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ml-auto'>
                            <Nav.Link className='px-3 text-dark' href="#">Home</Nav.Link>
                            <Nav.Link className='px-3 text-dark' href="#">My Work</Nav.Link>
                            <Nav.Link className='px-3 text-dark' eventKey={2} href="#">
                                Contact Me
                            </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;
