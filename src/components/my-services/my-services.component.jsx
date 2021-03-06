import React from 'react';
import { DiMongodb } from 'react-icons/di';
import './my-services.style.css';

const MyServices = () => {
    return (
        <div>
            <section className='my-services' id='services'>
                <h2 className='section-title title-services'>What I do</h2>
                <div className='services'>
                <div className='service'>
                    <h3 className='service-title'>Design & Development</h3>
                    <p>I'm baby brooklyn pour-over gastropub hell of cardigan, cliche 
                    freegan whatever swag XOXO craft beer pabst lomo chartreuse jean 
                    shorts. Neutra poke schlitz vinyl put a bird on it locavore. Portland 
                    before they sold out enamel pin letterpress.</p>
                </div>
                <div className='service'>
                    <h3>E-Commerce</h3>
                    <p>I'm baby brooklyn pour-over gastropub hell of cardigan, cliche 
                    freegan whatever swag XOXO craft beer pabst lomo chartreuse jean 
                    shorts. Neutra poke schlitz vinyl put a bird on it locavore. Portland 
                    before they sold out enamel pin letterpress.</p>
                </div>
                <div className='service'>
                    <h3>Wordpress</h3>
                    <p>I'm baby brooklyn pour-over gastropub hell of cardigan, cliche 
                    freegan whatever swag XOXO craft beer pabst lomo chartreuse jean 
                    shorts. Neutra poke schlitz vinyl put a bird on it locavore. Portland 
                    before they sold out enamel pin letterpress.</p>
                </div>
                </div>
                <div className='my-stack'>
                    
                    <ul className='my-stack-list'>
                        <li className='fab fa-html5'></li>
                        <li className='fab fa-sass'></li>
                        <li className='fab fa-react'></li>
                        <li className='fab fa-node'></li>
                        <li className='mongo'><DiMongodb /></li>
                        <li className='fab fa-wordpress-simple'></li>
                        <li className='fab fa-github'></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default MyServices;
