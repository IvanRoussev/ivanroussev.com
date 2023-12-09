import './App.css';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <div className='app' id='app'>
      <Navbar />
      <div className='main'>
        <div className='home'>
          <Home />
        </div>
        <div className='content'>
          <div className='about'>
            <About />
          </div>
          <div className='projects'>
            <Projects />
          </div>
          <div className='contact'>
            <Contact />
          </div>
        </div>
        <SpeedInsights />
      </div>
    </div>
  );
}

export default App;
