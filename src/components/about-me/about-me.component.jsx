import React from 'react';
import Image2 from '../../assets/me-elevator.jpg';
import './about-me.style.css';

const AboutMe = () => {
    return (
        <div>
            <section className='about-me' id='about'>
                <h2 className='section-title title-about'>Who I am</h2>
                <p className='section-subtitle subtitle-about'>MERN Stack Pro || Professional Chef</p>
                <div className='about-body'>
                <p>I am a self taught developer who enjoys building React apps. I was a
                professional chef who has cooked all over the world. I recently moved back to the
                US from 10+ years in Hong Kong & Shanghai. My years of experience training diverse
                teams from around the world, would make me a good fit on a collaborative team.</p>
                </div>
                <img src={Image2} alt='me in an elevator' className='about-img' />
            </section>
        </div>
    )
}

export default AboutMe;
