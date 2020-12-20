import React from 'react';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import './footer.style.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <h1 className='footer-title'>Contact Me</h1>
                <ul className='social-list'>
                <li><a href='mailto:veronicamaxwell152@gmail.com'><BsFillEnvelopeFill className='social-item' /></a></li>
                <li><a href=''><FaFacebook className='social-item' /></a></li>
                <li><a href=''><FaTwitter className='social-item' /></a></li>
                <li><a href=''><FaGithub className='social-item' /></a></li>
                </ul>
                <div className='copywrite'>
                <p>© 2020 Made with ❤ by Vmaxtacular</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
