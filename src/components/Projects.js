import React, { useEffect } from 'react';
import { message } from 'antd';

import WeatherAppImage from '../images/WeatherAppImage.png';
import MoviesApp from '../images/ExploreMoviesImage.png';
import CarImage from '../images/AutoMaintenanceImage.png';
import TaskManager from '../images/taskManagerApp.png';
import Golang from '../images/golang.svg';
import Javascript from '../images/javascript.svg';
import Mongo from '../images/mongodb.svg';
import Html from '../images/html.svg';
import Css from '../images/css.svg';
import Docker from '../images/docker.svg';
import iconReact from '../images/react.svg';
import PostgreSQL from '../images/postgres.svg';
import ReactIcon from '../images/react.svg';
import swagger from '../images/swagger.svg';

function Projects() {
  const handleViewLive = () => {
    const successMessage = `Work in progress, will deploy soon!`;
    message.warning(successMessage);
  };

  return (
    <div className='projects' id='projects'>
      <div className='projects-content'>
        <h1 className='title'>Projects</h1>
        <div className='project-container'>
          <div className='project'>
            <div className='project-image'>
              <img src={CarImage} alt='Car Maintenance App' />
              <div className='project-powered-by'>
                <h3 className='project-headline'>Car Maintenance Logger</h3>
                <p>
                  Car Maintenance Logger, a handy tool to help you effortlessly
                  manage and organize your vehicle maintenance records. A
                  Solution for keeping your vehicle in the best condition
                  possible! Get started by signing up or logging in. Easily
                  manage your car fleet by adding or removing vehicles, and
                  effortlessly log any maintenance records specific to each car
                  in your collection.
                </p>
                <div className='tech-stack'>
                  <h4> Powered by:</h4>
                  <img src={Golang} alt='Golang' />
                  <img src={PostgreSQL} alt='PostgreSQL' />
                  <img src={iconReact} alt='React' />
                  <img src={Javascript} alt='JavaScript' />
                  <img src={Html} alt='html' />
                  <img src={Css} alt='docker' />
                </div>
                <div className='project-source-live-buttons'>
                  <a>
                    <button
                      className='view-live-button'
                      onClick={handleViewLive}
                    >
                      View Live
                    </button>
                  </a>
                  <a href='https://github.com/IvanRoussev/AutoCare'>
                    <button className='view-sourcecode-button'>
                      Source Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='project'>
            <div className='project-image'>
              <img src={TaskManager} alt='Task Manager App' />
              <div className='project-powered-by'>
                <h3 className='project-headline'>Task Manager App</h3>
                <p>
                  This app allows users to add, edit, and delete tasks with
                  ease. Task manager App. allows you to take control of your
                  to-do list, ensuring that your daily tasks align with your
                  goals and priorities. This app utilizes a NoSQL MongoDB
                  database to store your tasks securely, connected to a
                  efficient Go backend to produce CRUD operations.
                </p>
                <div className='tech-stack'>
                  <h4> Powered by:</h4>
                  <img src={Golang} alt='Golang' />
                  <img src={Mongo} alt='Mongo' />
                  <img src={Docker} alt='docker' />
                  <img src={swagger} alt='Swagger' />
                </div>
                <div className='project-source-live-buttons'>
                  <a>
                    <button
                      className='view-live-button'
                      onClick={handleViewLive}
                    >
                      View Live
                    </button>
                  </a>
                  <a href='https://github.com/IvanRoussev/Task-Tracker-Management-System'>
                    <button className='view-sourcecode-button'>
                      Source Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='project'>
            <div className='project-image'>
              <img src={MoviesApp} alt='Explore Movies App' />
              <div className='project-powered-by'>
                <h3 className='project-headline'>Explore Movies App</h3>
                <p>
                  This app uses a movie API for usere to able to explore movies.
                  Users can sort favorite movies they want to watch later, sort
                  movies by category aswell as search for specific movies.
                </p>
                <div className='tech-stack'>
                  <h4> Powered by:</h4>
                  <img src={Javascript} alt='Golang' />
                  <img src={ReactIcon} alt='Mongo' />
                  <img src={Html} alt='html' />
                  <img src={Css} alt='docker' />
                </div>
                <div className='project-source-live-buttons'>
                  <a>
                    <button
                      className='view-live-button'
                      onClick={handleViewLive}
                    >
                      View Live
                    </button>
                  </a>
                  <a href='https://github.com/IvanRoussev/ExploreMoviesApp'>
                    <button className='view-sourcecode-button'>
                      {' '}
                      Source Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='project'>
            <div className='project-image'>
              <img src={WeatherAppImage} alt='Weather App' />
              <div className='project-powered-by'>
                <h3 className='project-headline'>Weather App</h3>
                <p>
                  This app uses a weather API to view weather reports of all
                  around the world. Users can view weather by inputing a City,
                  Country or Region in the search bar to view precise weather as
                  in the temperature, precipitation, UV, and much more weather
                  information.
                </p>
                <div className='tech-stack'>
                  <h4> Powered by:</h4>
                  <img src={Javascript} alt='golang' />
                  <img src={ReactIcon} alt='react' />
                  <img src={Html} alt='html' />
                  <img src={Css} alt='docker' />
                </div>
                <div className='project-source-live-buttons'>
                  <a>
                    <button
                      className='view-live-button'
                      onClick={handleViewLive}
                    >
                      View Live
                    </button>
                  </a>
                  <a href='https://github.com/IvanRoussev/weatherApp'>
                    <button className='view-sourcecode-button'>
                      Source Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
