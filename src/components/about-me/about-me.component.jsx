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
                <p>Shaman pickled glossier 8-bit 90's microdosing snackwave copper mug
                schlitz pork belly mumblecore lo-fi bitters kickstarter. Man braid 
                mlkshk lomo farm-to-table. Typewriter deep v pug chillwave biodiesel 
                poke godard mixtape pork belly slow-carb cray.</p>
                </div>
                <img src={Image2} alt='me in an elevator' className='about-img' />
            </section>
        </div>
    )
}

export default AboutMe;
