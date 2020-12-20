import React from 'react';
import './my-services.style.css';

const MyServices = () => {
    return (
        <div>
            <section className='my-services' id='services'>
                <h2 className='section-title title-services'>What I do</h2>
                <div className='services'>
                <div className='service'>
                    <h3>Design & Development</h3>
                    <p>I'm baby brooklyn pour-over gastropub hell of cardigan, cliche 
                    freegan whatever swag XOXO craft beer pabst lomo chartreuse jean 
                    shorts. Neutra poke schlitz vinyl put a bird on it locavore. Portland 
                    before they sold out enamel pin letterpress.</p>
                </div>
                <div className='service'>
                    <h3>E-Commerce</h3>
                    <p>Shaman pickled glossier 8-bit 90's microdosing snackwave copper 
                    mug schlitz pork belly mumblecore lo-fi bitters kickstarter. Man 
                    braid mlkshk lomo farm-to-table. Typewriter deep v pug chillwave 
                    biodiesel poke godard mixtape pork belly slow-carb cray.</p>
                </div>
                <div className='service'>
                    <h3>Wordpress</h3>
                    <p>Shaman pickled glossier 8-bit 90's microdosing snackwave copper 
                    mug schlitz pork belly mumblecore lo-fi bitters kickstarter. Man 
                    braid mlkshk lomo farm-to-table. Typewriter deep v pug chillwave 
                    biodiesel poke godard mixtape pork belly slow-carb cray.</p>
                </div>
                </div>
                <a href='#mywork' className='btn'>My Work</a>
            </section>
        </div>
    )
}

export default MyServices;
