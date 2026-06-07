import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Education from './components/Education';
import Expertise from './components/Expertise';
import Works from './components/Works';
import Certificates from './components/Certifications';
import Connect from './components/Connect';
import Footer from './components/Footer';
import Background from './components/Background';
import ComputerOutline from './components/ComputerOutline';
import './app.css';
import './components/ComputerOutline.css';

function App() {
  return (
    <div className="App" style={{overflowX: 'hidden', width: '100%'}}>
      <Background />
      <ComputerOutline>
        <div style={{width: '100%', maxWidth: '1200px', margin: '0 auto'}}>
          <Navbar />
          <Hero />
          <Profile />
          <Education />
          <Expertise />
          <Works />
          <Certificates />
          <Connect />
          <Footer />
        </div>
      </ComputerOutline>
    </div>
  );
}

export default App;