import git from '../images/code-fork.png';

function Projects() {
  return (
    <div className='projects' id='projects'>
      <div className='projects-content'>
        <h1 className='title'>Projects</h1>
        <div className='project-container'>
          <div className='project'>
            <h3 className='project-headline'>Weather App</h3>
            <a href='https://github.com/IvanRoussev/weatherApp.git'>
              <img src={git} alt='git' className='project-git-link' />
            </a>
            <button className='view-project-button'>
              <a>View Live</a>
            </button>
          </div>
          <div className='project'>
            <h3 className='project-headline'>Movies App</h3>
            <a href='https://github.com/IvanRoussev/MoviesApp'>
              <img src={git} alt='git' className='project-git-link' />
            </a>
            <button className='view-project-button'>
              <a>View Live</a>
            </button>
          </div>
          <div className='project'>
            <h3 className='project-headline'>Discord Bot</h3>
            <a href='https://github.com/IvanRoussev/Discord-bot'>
              <img src={git} alt='git' className='project-git-link' />
            </a>
            <button className='view-project-button'>
              <a>View Live</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
