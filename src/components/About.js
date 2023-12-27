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
            had a love for building things, from Legos as a kid to constructing
            software solutions today. I'm continually expanding my knowledge in
            software development as technology shifts every day. I recently
            graduated from a accelerated computer technology program from{' '}
            <strong>British Columbia Institute of Technology</strong> where I am
            now ready to join the workforce to provide an impact in the tech
            field.
          </p>
          <p className='about-paragraph'></p>
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
