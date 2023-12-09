import ivanPic from '../images/ivan.jpeg';
import githubIcon from '../images/github.svg';
import linkedinIcon from '../images/linkedin.svg';
import React, { useEffect, useState } from 'react';

function Home() {
  const [title, setTitle] = useState('');
  const originalTitle = `<Software Engineer />`;
  useEffect(() => {
    let index = 0;
    const titleInterval = setInterval(() => {
      setTitle(originalTitle.substring(0, index));
      index++;
      if (index > originalTitle.length) {
        clearInterval(titleInterval);
      }
    }, 100); // Adjust the interval time as needed
    return () => clearInterval(titleInterval); // Cleanup on component unmount
  }, []);
  return (
    <div className='home-container' id='home'>
      <div className='main-home'>
        <div className='ivan-picture'>
          <img className='homepage-img' src={ivanPic} alt='ivan-pic-homepage' />
        </div>
        <div className='titles'>
          <h1 className='title-name'>Ivan Roussev</h1>
          <h1 className='software-engineer-title'>{title}</h1>
          <div className='social-icons'>
            <a href='https://github.com/IvanRoussev' target='_blank' rel="noreferrer">
              <img
                className='homepage-icon'
                src={githubIcon}
                alt='github-icons'
              />
            </a>
            <a href='https://www.linkedin.com/in/ivan-roussev/' target='_blank'>
              <img
                className='homepage-icon'
                src={linkedinIcon}
                alt='linkedin-icons'
              />
            </a>
            <button className='cv-button'>
              <a className='download-cv-button'>Download CV</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
