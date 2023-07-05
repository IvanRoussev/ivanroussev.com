import './App.css';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Home />
      </header>
      <div className='main'>
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
      </div>
    </div>
  );
}

export default App;
