import './App.css';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Layout from './components/Layout.js';

function App() {
  return (
    <div className='app'>
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
        <Layout />
      </div>
    </div>
  );
}

export default App;
