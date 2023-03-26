import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
    const [title,setTitle]=useState(false)
  return (
    <>
     <header>
        <nav className="navbar">
          <div className="logo">
            <Link className='nav-link' to="/">
              <img src="./logo.png" alt='img' />
            </Link>
          </div>
          <ul  className={`${title?"nav-menu active":"nav-menu"}`}>
            <li className="nav-item">
              <Link className='nav-link' to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/Pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/Faq">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
          <div  className="hamburger">
            <i onClick={()=>setTitle(!title)} className="fa-solid fa-bars"></i>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header