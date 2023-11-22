import Skills from './Skills';
import Timeline from './Timeline';

function About() {
  return (
    <div id='about' className='about'>
      <div className='about-content'>
        <h1 className='title'>About</h1>
        <div className='about-paragraph-container'>
          <p className='about-paragraph'>
            I recently graduated from the British Columbia Institute of
            Technology and am excited to begin my career. Throughout my studies,
            I developed a passion for programming and am constantly seeking new
            challenges to enhance my skills. I thrive in collaborative
            environments where I can work with other developers to solve complex
            problems and create innovative solutions. I recently graduated from
            the British Institute of Technology and am excited to begin my
            career. Throughout my studies, I developed a passion for programming
            and am constantly seeking new challenges to enhance my skills. I
            thrive in collaborative environments where I can work with other
            developers to solve complex problems and create innovative
            solutions.
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
