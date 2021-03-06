import React from 'react';
import TetonMeatsImage from '../../assets/TetonValleyMeatsWebsite.png';
import CincyImage from '../../assets/cincy-hospitality.png';
import KeeperImage from '../../assets/keeper-app.png';
import CommerceImage from '../../assets/e-commerce.png';
import WebsiteImage from '../../assets/website-design.png';
import './portfolio.style.css';

const Portfolio = () => {
    return (
        <div className='portfolio-grid'>
            <a className='portfolio-item' href='https://www.tetonvalleymeats.com'>
                <img
                    className='portfolio-img'
                    src={TetonMeatsImage}
                />
            </a>
            <a className='portfolio-item' href='https://github.com/vmaxtacular153/crown-clothing'>
                <img
                    className='portfolio-img'
                    src={CincyImage}
                />
            </a>
            <a className='portfolio-item' href='https://github.com/vmaxtacular153/Note-Keeper'>
                <img
                    className='portfolio-img'
                    src={KeeperImage}
                />
            </a>
            <a className='portfolio-item' href='https://github.com/vmaxtacular153/cincy-hospitality-app'>
                <img
                    className='portfolio-img'
                    src={CincyImage}
                />
            </a>
            <a className='portfolio-item' href='https://github.com/vmaxtacular153/Dynamic-Restaurant-Menu'>
                <img
                    className='portfolio-img'
                    src={CommerceImage}
                />
            </a>
            <a className='portfolio-item' href='https://github.com/vmaxtacular153/Dynamic-Landing-Page'>
                <img
                    className='portfolio-img'
                    src={WebsiteImage}
                />
            </a>
        </div>
        
        
    )
}

export default Portfolio;
