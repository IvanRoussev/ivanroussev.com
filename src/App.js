import './App.css';
import About from './components/About';
import Home from './components/Home';

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
        </div>
      </div>
    </div>
  );
}

export default App;
