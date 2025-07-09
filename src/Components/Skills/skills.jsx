import React from 'react'
import './skills.css'
import Slider from './3d-slider/Slider'
import Skills from './Skill-Dropdown/skills'
function skills() {
  return (
    <div className='skills' id='skills'>
        <h1 className='skill-title'>Skills</h1>
       <div className="container">
        <div className="row">
             <div className='col-md-6'>
            <Slider/>
        </div>
        <div className='col-md-6'>
            
           <Skills/>
        </div>
        </div>
       </div>
    </div>
  )
}

export default skills