import React from 'react';
import Image from '../../assets/me-pixelated.jpg';
import './intro.style.css';

const Intro = () => {
    return (
        <div>
            <section className='intro' id='home'>
                <h1 className='section-title title-intro'>Hi, I am <strong>Veronica Maxwell</strong></h1>
                <p className='section-subtitle subtitle-intro'>Full Stack Web Developer</p>
                <img src={Image} alt='profile-pic' className='profile-pic' />
            </section> 
        </div>
    )
}

export default Intro;
