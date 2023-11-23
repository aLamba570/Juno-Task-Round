// SideMenu.js
import React from 'react';
import './sidemenu.css';
import logo from './image 1.png';
import elon from './Image.png';
const SideMenu = () => {
  return (
    <div className="side-menu">

      <div className="logo">
      <img src={logo} alt="logo"  />
      </div>
      
      <ul className='list'>
        <li><a href="#">OverView</a></li>
        <li><a href="#">Onboarding</a></li>
        <li><a href="#">Monitoring</a></li>
        <li><a href="#">Flagging</a></li>
        <li><a href="#">Source of Income</a></li>
        <li><a href="#">UAR</a></li>
        {/* Add more menu items as needed */}
      </ul>

      <div className="elon">
        <img src={elon} alt="elon" className='elon-img' />
        <div className='info'>
        <h4>ELon Musk</h4>
        <h5>elonmusk@gmail.com</h5>
        </div>
        
      </div>
    </div>
  );
}

export default SideMenu;
