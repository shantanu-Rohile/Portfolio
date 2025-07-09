import React from 'react'
import './contact.css'
import Git from './assets/git.png'
import LinkedIn from './assets/linkedin.webp'
import Mail from './assets/mail.png'
export default function contact() {
  return (
    <div id='contact'>
    <h1 className='contact-title'>Contact Me</h1>
    <div className='contact'>
        <a href="https://github.com/shantanu-Rohile">
            <div className='box'><img src={Git} alt="Github" /></div>
        </a>
        <a href="https://www.linkedin.com/in/shantanu-rohile-64302b299/">
            <div className='box'><img src={LinkedIn} alt="LinkedIn" /></div>
        </a>
        <a href="mailto:shantanurohile@gmail.com">
            <div className='box'><img src={Mail} alt="Mail"  /></div>
        </a>
    </div>
    </div>
  )
}
