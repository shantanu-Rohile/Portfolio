import React, { useState } from 'react';
import './Skills.css';
import Boot from '../assets/boot.png';
import CSS from '../assets/css.webp';
import Express from '../assets/express.png';
import Js from '../assets/js.png';
import Mongo from '../assets/mongod.svg';
import Node from '../assets/node.png';
import Rreact from '../assets/react.svg';
import Git from '../assets/git.webp';
import Java from '../assets/java.png';
import Leet from '../assets/leetcode.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
export default function Skills() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (type) => {
    setOpenDropdown(prev => (prev === type ? null : type));
  };

  return (
    <div>
      <div className="outer">
        <button className="dropdown" onClick={() => toggleDropdown('frontend')}>
          <h2>
            <i className={openDropdown === 'frontend'
              ? 'bi bi-arrow-down-circle-fill'
              : 'bi bi-arrow-right-circle-fill'}></i> Frontend
          </h2>
        </button>
        {openDropdown === 'frontend' && (
          <div className="dropdown-content">
            <img src={Rreact} alt="React" />
            <img src={CSS} alt="CSS" />
            <img src={Boot} alt="bootstrap" />
          </div>
        )}

        <button className="dropdown" onClick={() => toggleDropdown('backend')}>
          <h2>
            <i className={openDropdown === 'backend'
              ? 'bi bi-arrow-down-circle-fill'
              : 'bi bi-arrow-right-circle-fill'}></i> Backend
          </h2>
        </button>
        {openDropdown === 'backend' && (
          <div className="dropdown-content">
            <img src={Node} alt="Node" />
            <img src={Express} alt="Express" />
            <img src={Js} alt="Js" />
            <img src={Mongo} alt="MongoDb" />
          </div>
        )}

        <button className="dropdown" onClick={() => toggleDropdown('leetcode')}>
          <h2>
            <i className={openDropdown === 'leetcode'
              ? 'bi bi-arrow-down-circle-fill'
              : 'bi bi-arrow-right-circle-fill'}></i> Problem Solving and Other
          </h2>
        </button>
        {openDropdown === 'leetcode' && (
          <div className="dropdown-content">
            <img src={Leet} alt="Leet code" />
            <img src={Java} alt="Java" />
            <img src={Git} alt="Git hub" className='Git' />
          </div>
        )}
      </div>
    </div>
  );
}
