import React from 'react'
import './timeline.css'
function timeline() {
  return (
   <>
   <div className='timeline-desktop'>
  <div id='timeline'>
      <h1 className='timeline-title'>Experience and Progress</h1>
        <div className='timeline'>
           {/* left */}
            <div className='timeline-item timeline-item-left info'>
              <p>
                Started my first internship at Elite Softwares as a Web Developer, working with the Python Django framework.
             </p>
            </div>
            <div className='timeline-item timeline-item-middle'>
              <div className='timeline-item-point'></div>
            </div>
            <div className='timeline-item timeline-item-right'>
              <h4>October 2023 - December 2023</h4>
            </div>
          {/* right */}
            <div className='timeline-item timeline-item-left'>
              <h4>October 2023 - December 2023</h4>
            </div>
            <div className='timeline-item timeline-item-middle'>
              <div className='timeline-item-point'></div>
            </div>
            <div className='timeline-item timeline-item-right info'>
             <p>
              Nike static landing page created using HTML, CSS, and JavaScript. The page is fully responsive and includes a navigation bar, hero section, product showcase, and footer. The project showcases my skills in front-end development and attention to detail.
             </p>
            </div>
            {/* left */}
            <div className='timeline-item timeline-item-left info'>
              <p>
                Created tic-tac toe and smion say's game using HTML, CSS, and JavaScript. The games are fully responsive and include a navigation bar, hero section, product showcase, and footer. The project showcases my skills in front-end development and attention to detail.
             </p>
            </div>
            <div className='timeline-item timeline-item-middle'>
              <div className='timeline-item-point'></div>
            </div>
            <div className='timeline-item timeline-item-right'>
              <h4>October 2023 - December 2023</h4>
            </div>
            {/* right */}
            <div className='timeline-item timeline-item-left'>
              <h4>December 2024 - January 2025</h4>
            </div>
            <div className='timeline-item timeline-item-middle'>
              <div className='timeline-item-point'></div>
            </div>
            <div className='timeline-item timeline-item-right info'>
             <p>
              Completed my second internship at Coding Savvy, where I gained hands-on experience with React.js and GitHub, enhancing my skills in front-end development and version control. As part of my learning, I created a fully responsive Weather App using HTML, CSS, React.js, and Material UI. The app features a navigation bar, hero section, product showcase, and footer, demonstrating both technical proficiency and attention to UI detail.
             </p>
            </div>
            {/* left */}
             <div className='timeline-item timeline-item-left info'>
              <p>
                Created movie app using HTML, CSS, React.js, and ODMB API. The app is fully responsive and includes a navigation bar, hero section, product showcase, and footer. The project showcases my skills in front-end development and attention to detail.
             </p>
            </div>
            <div className='timeline-item timeline-item-middle'>
              <div className='timeline-item-point'></div>
            </div>
            <div className='timeline-item timeline-item-right'>
              <h4>December 2024 - January 2025</h4>
            </div>

             {/* right */}
            <div className='timeline-item timeline-item-left'>
              <h4>March 2025</h4>
            </div>
            <div className='timeline-item timeline-item-middle'>
              <div className='timeline-item-point'></div>
            </div>
            <div className='timeline-item timeline-item-right info'>
             <p>
              Created Fine collection app using HTML, CSS, Javascrpt and MongoDB. The app is fully responsive and includes a navigation bar, hero section, product showcase, and footer. The project showcases my skills in front-end development and attention to detail.
             </p>
            </div>
        </div>
    </div> 
</div>

<div className='mobile-experience'>
  <h2 className='mobile-title'>Experience</h2>

  <div className='mobile-card'>
    <h4>October 2023 - December 2023</h4>
    <p>Started my first internship at Elite Softwares as a Web Developer, working with the Python Django framework.</p>
  </div>

  <div className='mobile-card'>
    <h4>October 2023 - December 2023</h4>
    <p>Nike static landing page using HTML, CSS, JavaScript. Fully responsive with navbar, hero, showcase, footer.</p>
  </div>

  <div className='mobile-card'>
    <h4>October 2023 - December 2023</h4>
    <p>Created Tic-Tac-Toe and Simon Says games with full responsiveness and UI consistency.</p>
  </div>

  <div className='mobile-card'>
    <h4>December 2024 - January 2025</h4>
    <p>Completed second internship at Coding Savvy, gaining hands-on experience in React.js and GitHub for enhanced front-end and version control skills.</p>
  </div>

  <div className='mobile-card'>
    <h4>December 2024 - January 2025</h4>
    <p>Built a Weather app using React.js and Material UI with strong UI responsiveness and component design.</p>
  </div>

  <div className='mobile-card'>
    <h4>December 2024 - January 2025</h4>
    <p>Created a Movie app using React.js and OMDB API showcasing API integration and reusable component structures.</p>
  </div>

  <div className='mobile-card'>
    <h4>March 2025</h4>
    <p>Developed a Fine Collection app using MongoDB and JavaScript for CRUD operations with responsive UI.</p>
  </div>
</div>


   </>
  )
}

export default timeline