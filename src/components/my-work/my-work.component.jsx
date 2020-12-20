import React from 'react';
import Portfolio from '../../assets/portfolio.jpg';
import Portfolio1 from '../../assets/portfolio1.jpg';
import Portfolio2 from '../../assets/portfolio2.jpg';
import './my-work.style.css';


const MyWork = () => {
    return (
        <div>
            <section className='my-work' id='work'>
                <h2 className='section-title title-work'>My Work</h2>
                <p className='section-subtitle subtitle-work'>A selection of my range of work</p>
                <div className='portfolio'>
                <a href='' className='portfolio-item'>
                    <img src={Portfolio} alt='' className='portfolio-img' />
                </a>
                <a href='' className='portfolio-item'>
                    <img src={Portfolio1} alt='' className='portfolio-img' />
                </a>
                <a href='' className='portfolio-item'>
                    <img src={Portfolio2} alt='' className='portfolio-img' />
                </a>
                <a href='' className='portfolio-item'>
                    <img src={Portfolio} alt='' className='portfolio-img' />
                </a>
                <a href='' className='portfolio-item'>
                    <img src={Portfolio1} alt='' className='portfolio-img' />
                </a>
                <a href='' className='portfolio-item'>
                    <img src={Portfolio2} alt='' className='portfolio-img' />
                </a>
                <a href='' className='portfolio-item'>
                    <img src={Portfolio} alt='' className='portfolio-img' />
                </a>
                <a href='' className='portfolio-item'>
                    <img src={Portfolio2} alt='' className='portfolio-img' />
                </a>
                </div>
            </section>
        </div>
    )
}

export default MyWork;
