import React from 'react';
import './project.css';
import Movie from './assets/Movie-app.png';
import Simon from './assets/simon-says.png';
import Todo from './assets/todo.png';
import Tic from './assets/tic-tac-toe.png';

export default function Project() {
  return (
    <div id='projects'>
      <h1 className='project-title'>Project</h1>
      <div className="cards">
        <div className='card'>
          <div className="card-header">
            <span className="project-name">To Do List</span>
            <span className="project-date">2023–2024</span>
          </div>
          <div className='project-image'>
            <img src={Todo} alt="To-do list" />
          </div>
        </div>

        <div className='card'>
          <div className="card-header">
            <span className="project-name">Penalty Collection</span>
            <span className="project-date">2023–2024</span>
          </div>
        </div>

        <div className='card'>
          <div className="card-header">
            <span className="project-name">Tic-Tac-Toe App</span>
            <span className="project-date">2023–2024</span>
          </div>
          <div className='project-image'>
            <img src={Tic} alt="Tic Tac Toe" />
          </div>
        </div>

        <div className='card'>
          <div className="card-header">
            <span className="project-name">Simon Says</span>
            <span className="project-date">2023–2024</span>
          </div>
          <div className='project-image'>
            <img src={Simon} alt="Simon Says" />
          </div>
        </div>

        <div className='card'>
          <div className="card-header">
            <span className="project-name">Movie App</span>
            <span className="project-date">2023–2024</span>
          </div>
          <div className='project-image'>
            <img src={Movie} alt="Movie App" />
          </div>
        </div>
      </div>
    </div>
  );
}
