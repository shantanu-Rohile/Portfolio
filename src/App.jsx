import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Bannner from './Components/Home/banner.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Components/Navbar/navbar.jsx'
import MobileView from './Components/Home/Mobile.jsx'
function App() {
 

  return(
   <>
     <>
      <div className="desktop-view">
        <Bannner/>
      </div>
      <div className="mobile-view">
        <MobileView />
      </div>
    </>
   </>
  )
}

export default App
