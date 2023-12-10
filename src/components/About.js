import Skills from './Skills';
function About() {
  return (
    <div id='about' className='about'>
      <div className='about-content'>
        <h1 className='title'>About Me</h1>
        <div className='about-paragraph-container'>
          <p className='about-paragraph'>
            I am a Passionate programmer based in <strong>Canada</strong> and{' '}
            <strong>Bulgaria</strong> with a knack for turning ideas into
            practical code. My curiosity is my driving force, constantly pushing
            me towards new challenges and learning opportunities. I have always
            had a love for building things from Legos as a kid to constructing
            software solutions today. I have a constantly growing knowledge of
            cloud technologies and full-stack development and hope to have a
            real impact in the tech world. Also an Avid Dark mode user, light
            mode attracts bugs!
          </p>
        </div>
        <div>
          <h3 className='technical-skills-title'>My Technical Skills</h3>
          <div className='blob'>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
