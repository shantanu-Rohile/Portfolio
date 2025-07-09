import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
export default function navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar-portfolio'>
        <nav className="navbar navbar-expand-lg fixed-top">

      <a className="navbar-brand" href="#home">Portfolio</a>
      <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isOpen ? 'show' : 'white'}`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#summary">Summary</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#timeline">Experience and Progress</a>
          </li>
           <li className="nav-item">
            <a className="nav-link" href="#skills">Skills</a>
          </li>
           <li className="nav-item">
            <a className="nav-link" href="#projects">Project</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}
