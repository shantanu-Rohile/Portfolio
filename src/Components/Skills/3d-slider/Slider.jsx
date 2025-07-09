import React, { use } from 'react'
import './Slider.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Boot from '../assets/boot.png'
import CSS from '../assets/css.webp'
import Express from '../assets/express.png'
import Js from '../assets/js.png'
import Mongo from '../assets/mongo.png'
import Node from '../assets/node.png'
import Rreact from '../assets/react.png'
export default function Slider() {
  useGSAP(() => {
    gsap.to('.slider', {
      rotationY: 360,
      repeat: -1,
      duration: 20,
    });
  }, []);
  return (
  <div>
    <div className="container">
      <div className="row">
          <div className='banner'>
            <div className='slider' style={{'--quantity':6}}>
              <div className='item' style={{'--position':1}}>
                <img src={Boot} alt="bootstrap"/>
              </div>
              <div className='item' style={{'--position':2}}>
                <img src={CSS} alt="bootstrap"/>
              </div>
              <div className='item' style={{'--position':3}}>
                <img src={Js} alt="bootstrap"/>
              </div>
              <div className='item' style={{'--position':4}}>
                <img src={Express} alt="bootstrap"/>
              </div>
              <div className='item' style={{'--position':5}}>
                <img src={Mongo} alt="bootstrap"/>
              </div>
              <div className='item' style={{'--position':6}}>
                <img src={Node} alt="bootstrap"/>
              </div>
            </div> 
          </div>
      </div>
    </div>
  </div>
  )
}
