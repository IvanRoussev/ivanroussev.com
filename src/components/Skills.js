import Golang from '../images/golang.svg';
import Python from '../images/python.svg';
import Javascript from '../images/javascript.svg';
import Mongo from '../images/mongodb.svg';
import Mysql from '../images/mysql.svg';
import Aws from '../images/amazon.svg';
import Azure from '../images/azure.svg';
import Gitlab from '../images/gitlab.svg';
import Jenkins from '../images/jenkins.svg';
import Html from '../images/html.svg';
import Css from '../images/css.svg';
import Git from '../images/git.svg';
import Docker from '../images/docker.svg';
import Kube from '../images/kubernetes.svg';
import iconReact from '../images/react.svg';
import terraform from '../images/terraform.svg';
import linux from '../images/linux.png';
import PostgreSQL from '../images/postgres.svg';
import helm from '../images/helm.svg'
import grafana from '../images/grafana.svg'
import prometheus from '../images/prometheus.svg'

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
          <img className='helm-svg' src={helm} alt='helm' />
        </div>
        <div className='Ci'>
          <h3>CI/CD</h3>
          <img src={Jenkins} alt='jenkins' />
          <img src={Gitlab} alt='github' />
          <img src={Git} alt='git' />
        </div>
        <div className='monitoring'>
          <h3>Monitoring</h3>
          <img src={grafana} alt='grafana' />
          <img src={prometheus} alt='promethues' />
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
