import React from 'react';
import CrownImage from '../../assets/crown-clothing.png';
import CincyImage from '../../assets/cincy-hospitality.png';
import KeeperImage from '../../assets/keeper-app.png';
import CommerceImage from '../../assets/e-commerce.png';
import WebsiteImage from '../../assets/website-design.png';
import './portfolio.style.css';

const Portfolio = () => {
    return (
        <div className='portfolio-grid'>
            <a className='portfolio-item' href='https://google.com'>
                <img
                    className='portfolio-img'
                    src={CrownImage}
                />
            </a>
            <a className='portfolio-item' href='#'>
                <img
                    className='portfolio-img'
                    src={CincyImage}
                    href='#'
                />
            </a>
            <a className='portfolio-item' href=''>
                <img
                    className='portfolio-img'
                    src={KeeperImage}
                />
            </a>
            <a className='portfolio-item' href=''>
                <img
                    className='portfolio-img'
                    src={CincyImage}
                />
            </a>
            <a className='portfolio-item' href=''>
                <img
                    className='portfolio-img'
                    src={CommerceImage}
                />
            </a>
            <a className='portfolio-item' href=''>
                <img
                    className='portfolio-img'
                    src={WebsiteImage}
                />
            </a>
        </div>
        
        
    )
}

export default Portfolio;
