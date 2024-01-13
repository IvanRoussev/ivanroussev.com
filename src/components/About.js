import Skills from './Skills';
import bcit from '../images/bcit.jpg';
import aws from '../images/amazon.svg';
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
        </div>
        <div className='education'>
          <h3>Education</h3>
          <div className='education-container'>
            <img className='bcit-logo' src={bcit} />
            <div className='bcit-info'>
              <h4 className='bcit-title'>
                British Columbia Institute of Technology
              </h4>
            </div>
          </div>
        </div>
        <div className='certificates'>
          <h3>Certificates</h3>
          <div className='certificates-container'>
            <img className='aws-logo' src={aws} />
            <div className='bcit-info'>
              <h4 className='bcit-title'>Certified Cloud Practitioner</h4>
              <button>
                <a src='https://www.credly.com/badges/6144fc56-ef0e-4da1-af6d-7025732199f7/linked_in_profile'>
                  View Certificate
                </a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h3 className='technical-skills-title'>My Technical Skills</h3>
          <div className='blob'>
            <Skills />
          </div>
        </div>
        <div>
          <h3>Timeline</h3>
        </div>
      </div>
    </div>
  );
}

export default About;
