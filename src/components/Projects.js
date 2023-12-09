import WeatherAppImage from '../images/WeatherAppImage.png';
import MoviesApp from '../images/ExploreMoviesImage.png';
import CarImage from '../images/AutoMaintenanceImage.png';

function Projects() {
  return (
    <div className='projects' id='projects'>
      <div className='projects-content'>
        <h1 className='title'>Projects</h1>
        <div className='project-container'>
          <div className='project'>
            <h3 className='project-headline'>Car Maintenance Logger</h3>
            <div className='project-image'>
              <img src={CarImage} alt='car-maintenance-app-image' />
            </div>
            <a href='https://github.com/IvanRoussev/AutoCare'>
              <button className='view-sourcecode-button'> Source Code</button>
            </a>
          </div>
          <div className='project'>
            <h3 className='project-headline'>Explore Movies App</h3>
            <div className='project-image'>
              <img src={MoviesApp} alt='movies-app-image' />
            </div>
            <a href='https://github.com/IvanRoussev/ExploreMoviesApp'>
              <button className='view-sourcecode-button'> Source Code</button>
            </a>
          </div>
          <div className='project'>
            <h3 className='project-headline'>Weather App</h3>
            <div className='project-image'>
              <img src={WeatherAppImage} alt='weather-app-image' />
            </div>

            <a href='https://github.com/IvanRoussev/weatherApp'>
              <button className='view-sourcecode-button'> Source Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
