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
import PostgreSQL from '../images/icons8-postgres.svg';
import '../BlobComponent.css';

const Skills = () => {
  return (
    <div className='blob-container'>
      <div className='skills'>
        <div className='Cloud'>
          <h3>Cloud</h3>
          <img src={Aws} alt='aws' />
          <img src={Azure} alt='azure' />
          <img src={terraform} alt='terraform' />
        </div>
        <div className='languages'>
          <h3>Languages</h3>
          <img src={Golang} alt='golang' />
          <img src={Javascript} alt='javascipt' />
          <img src={Python} alt='python' />
        </div>
        <div className='web'>
          <h3>Web</h3>
          <img src={iconReact} alt='react' />
          <img src={Html} alt='html' />
          <img src={Css} alt='css' />
        </div>
        <div className='databases'>
          <h3>Databases</h3>
          <img src={Mysql} alt='mysql' />
          <img src={Mongo} alt='mongodb' />
          <img src={PostgreSQL} alt='postgres' />
        </div>
        <div className='containerization'>
          <h3>Containerization</h3>
          <img src={Docker} alt='docker' />
          <img src={Kube} alt='kube' />
        </div>
        <div className='Ci'>
          <h3>CI/CD</h3>
          <img src={Jenkins} alt='jenkins' />
          <img src={Gitlab} alt='github' />
          <img src={Git} alt='git' />
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
