import React, { useState } from 'react';
import './header.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdDesignServices} from 'react-icons/md'

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src='./images/logo.png' alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        {['Home', 'About', 'Blog', 'Contact'].map((item) =>(
          <li key={`link-${item}`}>
            <a href={`${item}`} className = 'app__navbar-tags'>{item}</a>
          </li>
        ) )}
      </ul>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#808080' fontSize={27} onClick={() => setToggle(true)}/>

          {toggle && (
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
              <MdDesignServices fontSize={27} className='overlay__close' onClick={() => setToggle(false)}/>
              <ul className='app__navbar-smallscreen_links'>

                {['Home', 'About', 'Blog', 'Contact'].map((item) =>(
                  <li key={`link-${item}`}>
                    <a href={`${item}`} className = 'app__navbar-tags'  onClick={()=> setToggle(false)}>{item}</a>
                  </li>
                ) )}
              </ul>
            </div>)}
      </div>
    </nav>
  )
}
