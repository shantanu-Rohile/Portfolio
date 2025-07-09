import React, { useEffect, useRef } from 'react';
import './banner.css'; // make sure this exists
import Intro from '../Intro/intro.jsx'; // make sure this exists
import Summary from '../Summary/summary.jsx'; // make sure this exists
import Border from './border.jsx'; // make sure this exists
import Timeline from '../Timeline/timeline.jsx'; // make sure this exists
import Skills from '../Skills/skills.jsx'; // make sure this exists
import Project from '../Project/Project.jsx';
import Contact from '../Contact/contact.jsx';
import Navbar from '../Navbar/navbar.jsx';
const BannerDots = () => {
  const bannerRef = useRef(null);
  const canvasRef = useRef(null);
  const dots = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const banner = bannerRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;
    };

    const createDots = () => {
      dots.current = [];
      for (let i = 0; i < 50; i++) {
        dots.current.push({
          x: Math.floor(Math.random() * canvas.width),
          y: Math.floor(Math.random() * canvas.height),
          size: 2,
          color: '#00fff7',
        });
      }
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.current.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const handleMouseMove = (event) => {
      drawDots();
      const mouse = {
        x: event.pageX - banner.getBoundingClientRect().left,
        y: event.pageY - banner.getBoundingClientRect().top
      };
      dots.current.forEach(dot => {
        const distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if (distance < 300) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    const handleMouseOut = () => {
      drawDots();
    };

    const handleResize = () => {
      resizeCanvas();
      createDots();
      drawDots();
    };

    resizeCanvas();
    createDots();
    drawDots();

    banner.addEventListener('mousemove', handleMouseMove);
    banner.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('resize', handleResize);

    return () => {
      banner.removeEventListener('mousemove', handleMouseMove);
      banner.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <div ref={bannerRef} className="banner">
      <Intro/>
      <canvas ref={canvasRef} id="dotsCanvas" /> 
    </div>
  <Border/>

    <div>
      <Summary/>
    </div>
    <Border/>
    <div>
     <Timeline/>
    </div>
    <Border/>
    <div>
     <Skills/>
    </div>
     <Border/>
     <div>
      <Project/>
     </div>
      <Border/>
      <div>
      <Contact/>
     </div>
    </>
  );
};

export default BannerDots;
