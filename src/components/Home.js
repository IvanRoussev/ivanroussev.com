import ivanPic from '../images/ivan-no-background.png';
import githubIcon from '../images/github.svg';
import linkedinIcon from '../images/linkedin.svg';
import ivanresume from '../ivan-resume-2024.pdf';
import React, { useEffect, useState } from 'react';

function Home() {
  const [title, setTitle] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const originalTitle = 'Building Things That Truly Matter';
  const cursorChar = '|';

  useEffect(() => {
    let index = 0;
    const titleInterval = setInterval(() => {
      setTitle(
        originalTitle.substring(0, index) + (cursorVisible ? cursorChar : '')
      );
      setCursorVisible((prev) => !prev);
      index++;

      if (index > originalTitle.length) {
        clearInterval(titleInterval);
        setCursorVisible(false);
      }
    }, 75);

    return () => {
      clearInterval(titleInterval);
      setTitle(originalTitle);
      setCursorVisible(false);
    };
  }, []);

  return (
    <div className='home-container' id='home'>
      <div className='main-home'>
        <div className='ivan-picture'>
          <img className='homepage-img' src={ivanPic} alt='ivan-pic-homepage' />
        </div>
        <div className='titles'>
          <h1 className='title-name'>Ivan Roussev</h1>
          <h1 className='catch-phrase'>{title}</h1>
          <div className='social-icons'>
            <a href='https://github.com/IvanRoussev' rel='noreferrer'>
              <img
                className='homepage-icon'
                src={githubIcon}
                alt='github-icons'
              />
            </a>
            <a href='https://www.linkedin.com/in/ivan-roussev/'>
              <img
                className='homepage-icon'
                src={linkedinIcon}
                alt='linkedin-icons'
              />
            </a>
            <button className='cv-button'>
              <a
                className='download-cv-button'
                href={ivanresume}
                download='IvanRoussev-Resume.pdf'
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
