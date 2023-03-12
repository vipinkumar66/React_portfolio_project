import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar__container'>
        <div className='navbar__container-links'>
            <div className='navbar__container-links_logo'>
                <img src="/images/logo.png" alt="logo" />
            </div>
            <div className='navbar__container-links_content'>
                <Link to='/'><p>Home</p></Link>
                <Link to='/about'><p>About</p></Link>
                <Link to='/projects'><p>Projects</p></Link>
            </div>
        </div>
        <div className="navbar__menu">
            {toggleMenu
                ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
            <div className="navbar__menu_container scale-up-center">
                <div className="navbar__menu_container-links">
                <Link to='/'><p>Home</p></Link>
                <Link to='/about'><p>About</p></Link>
                <Link to='/projects'><p>Projects</p></Link>
                </div>
            </div>
            )}
        </div>
    </div>
  )
}

export default Navbar
