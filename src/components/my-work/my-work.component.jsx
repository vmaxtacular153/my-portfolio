import React from 'react';
import Portfolio from '../portfolio/portfolio.component';
import './my-work.style.css';


const MyWork = () => {
    return (
            <section className='my-work' id='work'>
                <div>
                <h2 className='section-title title-work'>My Work</h2>
                <p className='section-subtitle subtitle-work'>A selection of my range of work</p>
                </div>
                <div className='portfolio-grid'>
                    <Portfolio />
                </div>
            </section>
    )
}

export default MyWork;
