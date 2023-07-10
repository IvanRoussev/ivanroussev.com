import aws_icon from '../images/aws.svg';
import css_icon from '../images/css.svg';
import docker_icon from '../images/docker.svg';
import git_icon from '../images/git-original.svg';
import html_icon from '../images/html5.svg';
import mysql_icon from '../images/mysql-logo.svg';
import jenkins_icon from '../images/jenkins.svg';
import python_icon from '../images/python.svg';
import react_icon from '../images/react-original.svg';
import terraform_icon from '../images/terraform.svg';
import golang_icon from '../images/golang-icon.svg';

function About() {
  return (
    <div className='about-class' id='about'>
      <div className='about-content'>
        <h1>About</h1>
        <p>
          I recently graduated from the British Columbia Institute of Technology
          and am excited to begin my career. Throughout my studies, I developed
          a passion for programming and am constantly seeking new challenges to
          enhance my skills. I thrive in collaborative environments where I can
          work with other developers to solve complex problems and create
          innovative solutions. I recently graduated from the British Institute
          of Technology and am excited to begin my career. Throughout my
          studies, I developed a passion for programming and am constantly
          seeking new challenges to enhance my skills. I thrive in collaborative
          environments where I can work with other developers to solve complex
          problems and create innovative solutions.
        </p>
        <div>
          <h2 className='technical-skills-title'>My Technical Skills</h2>
          <div className='skills-icons'>
            <img src={aws_icon} alt='aws' />
            <img src={css_icon} alt='css' />
            <img src={html_icon} alt='html' />
            <img src={mysql_icon} alt='mysql' />
            <img src={python_icon} alt='python' />
            <img src={golang_icon} alt='golang' />
            <img src={react_icon} alt='react' />
            <img src={terraform_icon} alt='terraform' />
            <img src={jenkins_icon} alt='jenkins' />
            <img src={docker_icon} alt='docker' />
            <img src={git_icon} alt='docker' />
          </div>
        </div>
        <h2>Timeline</h2>
      </div>
    </div>
  );
}

export default About;
