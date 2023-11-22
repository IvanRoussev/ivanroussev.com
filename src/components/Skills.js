import Golang from '../images/icons8-golang.svg';
import Python from '../images/icons8-python.svg';
import Javascript from '../images/icons8-javascript.svg';
import Mongo from '../images/icons8-mongodb.svg';
import Mysql from '../images/icons8-mysql.svg';
import Aws from '../images/icons8-amazon-web-services.svg';
import Azure from '../images/icons8-azure.svg';
import Gitlab from '../images/icons8-gitlab.svg';
import Jenkins from '../images/icons8-jenkins.svg';
import Html from '../images/icons8-html.svg';
import Css from '../images/icons8-css.svg';
import Git from '../images/icons8-git.svg';
import Docker from '../images/icons8-docker.svg';
import Kube from '../images/icons8-kubernetes.svg';
import iconReact from '../images/icons8-react.svg';
import terraform from '../images/icons8-terraform.svg';
import linux from '../images/icons8-linux-48.png';
import '../BlobComponent.css';

const Skills = () => {
  return (
    <div className='blob-container'>
      <div className='skills'>
        <div className='Cloud'>
          <h3>Cloud</h3>
          <img src={Aws} />
          <img src={Azure} />
          <img src={terraform} />
        </div>
        <div className='languages'>
          <h3>Languages</h3>
          <img src={Golang} />
          <img src={Javascript} />
          <img src={Python} />
        </div>
        <div className='web'>
          <h3>Web</h3>
          <img src={iconReact} />
          <img src={Html} />
          <img src={Css} />
        </div>
        <div className='databases'>
          <h3>Databases</h3>
          <img src={Mysql} />
          <img src={Mongo} />
        </div>
        <div className='containerization'>
          <h3>Containerization</h3>
          <img src={Docker} />
          <img src={Kube} />
        </div>
        <div className='Ci'>
          <h3>CI/CD</h3>
          <img src={Jenkins} />
          <img src={Gitlab} />
        </div>
        <div className='os'>
          <h3>OS</h3>
          <img src={linux} alt='linux' className='linux-image' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
