import React from 'react';
import './summary.css';
import Image from '../../assets/upprofile-1.jpg';

function Summary() {
  return (
    <div className="container my-5" id='summary'>
      <h1 className="summary-title mb-4 text-center">Summary</h1>
      <div className="row align-items-center">
        <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
          <img src={Image} alt="User Profile" className="img-circle img-fluid" />
        </div>
        <div className="col-12 col-md-7">
          <p className="summary-text">
            I am a dedicated Full Stack Developer with practical experience in building responsive web applications using technologies like React.js, Node.js, Express.js, MongoDB, and SQL. Currently pursuing a B.E. in Information Technology from Savitribai Phule Pune University, I’ve solved over 150 problems on LeetCode and secured 3rd place in my college's Techtonic CodeChef contest. Through internships at Elite Software’s and Coding Savvy, I gained hands-on experience in both frontend and backend development, collaborating on real-world projects and enhancing my skills in HTML, CSS, JavaScript, and GitHub. My projects include a dynamic Movie Search App and interactive games, reflecting my passion for clean UI, logical problem-solving, and modern web development practices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
