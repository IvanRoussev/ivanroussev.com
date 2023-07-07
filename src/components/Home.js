import Navbar from './Navbar';
import ivanPic from '../images/ivan1.jpg';

function Home() {
  return (
    <>
      <Navbar />
      <div className='home-page'>
        <div className='main-home'>
          <div className=''>
            <img
              className='homepage-img'
              src={ivanPic}
              alt='ivan-pic-homepage'
            />
          </div>
          <div className='titles'>
            <h1 className='title-name'>Ivan Roussev</h1>
            <h1 className='software-engineer-title'>
              {'<Software Engineer />'}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
