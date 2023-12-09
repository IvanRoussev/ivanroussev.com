import Skills from './Skills';
import Timeline from './Timeline';

function About() {
  return (
    <div id='about' className='about'>
      <div className='about-content'>
        <h1 className='title'>About</h1>
        <div className='about-paragraph-container'>
          <p className='about-paragraph'>
            Passionate programmer with a knack for turning ideas into practical
            code. My curiosity is my driving force, constantly pushing me
            towards new challenges and learning opportunities. I have always had
            a love for building things from lego as a kid to constructing highly
            scalable software solutions today. Also a Avid Dark mode user, light
            mode attracts bugs!
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
