import React from 'react';
import Header from '../src/components/header/header.component';
import Intro from '../src/components/intro/intro.component';
import MyServices from './components/my-services/my-services.component';
import AboutMe from './components/about-me/about-me.component';
import MyWork from './components/my-work/my-work.component';
import Footer from './components/footer/footer.component';
import './App.css';


function App() {
  return (
    <div className="container">
      <Header />
      <Intro />
      <MyServices />
      <AboutMe />
      <MyWork />
      <Footer />
    </div>
  );
}

export default App;
