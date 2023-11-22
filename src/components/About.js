import Skills from './Skills';
import Timeline from './Timeline';

function About() {
  return (
    <div id='about' className='about'>
      <div className='about-content'>
        <h1 className='title'>About</h1>
        <div className='about-paragraph-container'>
          <p className='about-paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <h3 className='technical-skills-title'>My Technical Skills</h3>
          <div className='blob'>
            <Skills />
          </div>
        </div>
        {/* <h2>Timeline</h2>
        <div className='timeline'>
          <Timeline />
        </div> */}
      </div>
    </div>
  );
}

export default About;
