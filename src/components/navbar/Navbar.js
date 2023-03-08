import React from 'react'
import './navbar.css'

function Navbar() {
  return (
      <nav className='navbar'>
        <ul className='navbar-nav'>
            <li className='logo'>
                    <a className='nav-link' href=''>
                        <span className='link-text'>FOCUS</span>
                        <i class="bi bi-chevron-double-left"></i>
                        
                    </a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href=''>
                    <i className="bi bi-code-slash"></i>
                    <span className='link-text'>Home</span>
                </a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href=''>
                    <i className="bi bi-file-person"></i>
                    <span className='link-text'>About</span>
                </a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href=''>
                    <i className="bi bi-book-fill"></i>
                    <span className='link-text'>Blogs</span>
                </a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href=''>
                    <i className="bi bi-balloon-heart"></i>
                    <span className='link-text'>Interest</span>
                </a>
            </li>
        </ul>
      </nav>
  )
}

export default Navbar
