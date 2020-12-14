import React from 'react';
import logo from '../src/assets/vmaxtacular-logo.png';
import Image from '../src/assets/me-pixelated.jpg';
import Image2 from '../src/assets/me-elevator.jpg';
import Portfolio from '../src/assets/portfolio.jpg';
import Portfolio1 from '../src/assets/portfolio1.jpg';
import Portfolio2 from '../src/assets/portfolio2.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <button className='nav-toggle' aria-label='toggle-navigation'>
          <span className='hamburger'></span>
        </button>
        <nav className='nav'>
          <ul className='nav-list'>
            <li className='nav-item nav-link'><a href='#'>Home</a></li>
            <li className='nav-item nav-link'><a href='#'>My Services</a></li>
            <li className='nav-item nav-link'><a href='#'>My Work</a></li>
            <li className='nav-item nav-link'><a href='#'>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Introduction section */}
      <section className='intro' id='home'>
        <h1 className='section-title title-intro'>Hi, I am <strong>Veronica Maxwell</strong></h1>
        <p className='section-subtitle subtitle-intro'>Full Stack Web Developer</p>
        <img src={Image} alt='profile-pic' className='profile-pic' />
      </section>

      {/* My Services section */}
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

      {/* About Me section */}
      <section className='about-me' id='about'>
        <h2 className='section-title title-about'>Who I am</h2>
        <p className='section-subtitle subtitle-about'>Full Stack Web Developer || Former Chef</p>
        <div className='about-body'>
          <p>Shaman pickled glossier 8-bit 90's microdosing snackwave copper mug
           schlitz pork belly mumblecore lo-fi bitters kickstarter. Man braid 
           mlkshk lomo farm-to-table. Typewriter deep v pug chillwave biodiesel 
           poke godard mixtape pork belly slow-carb cray.</p>
        </div>
        <img src={Image2} alt='me in an elevator' className='about-img' />
      </section>

      {/* My Work section */}
      <section className='my-work' id='work'>
        <h2 className='section-title title-work'>My Work</h2>
        <p className='section-subtitle subtitle-work'></p>
        <div className='portfolio'>
          <a href='' className='portfolio-item'>
            <img src={Portfolio} alt='' className='portfolio-img' />
          </a>
        </div>
        <div className='portfolio'>
          <a href='' className='portfolio-item'>
            <img src={Portfolio1} alt='' className='portfolio-img' />
          </a>
        </div>
        <div className='portfolio'>
          <a href='' className='portfolio-item'>
            <img src={Portfolio2} alt='' className='portfolio-img' />
          </a>
        </div>
      </section>

      {/* Footer section */}
      <footer>
        <a href='mailto:veronicamaxwell152@gmail.com' className='email-link'>Email Me: veronicamaxwell152@gmail.com</a>
        <ul className='social-list'>
          <li className='social-list-item'><a href=''>Facebook</a></li>
          <li className='social-list-item'><a href=''>Twitter</a></li>
          <li className='social-list-item'><a href=''>Github</a></li>
        </ul>
      </footer>

    </div>
  );
}

export default App;
