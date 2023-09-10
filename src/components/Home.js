import Navbar from './Navbar';
import ivanPic from '../images/ivan1.jpg';
import githubIcon from '../images/github.svg';
import linkedinIcon from '../images/linkedin.svg';

function Home() {
  return (
    <>
      <Navbar />
      <div className='home-page' id='home'>
        <div className='main-home'>
          <div className='ivan-picture'>
            <img
              className='homepage-img'
              src={ivanPic}
              alt='ivan-pic-homepage'
            />
          </div>
          <div className='titles'>
            <h1 className='title-name'>Ivan Roussev</h1>
            <h1 className='software-engineer-title'>
              {'<Software Engineer />'}
            </h1>
            <div className='social-icons'>
              <a href='https://github.com/IvanRoussev' target='_blank'>
                <img src={githubIcon} alt='github-icons' />
              </a>
              <a
                href='https://www.linkedin.com/in/ivan-roussev/'
                target='_blank'
              >
                <img src={linkedinIcon} alt='linkedin-icons' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
