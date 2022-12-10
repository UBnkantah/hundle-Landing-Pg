import React from 'react'
import logo from "../images/logo.svg"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <button>Try it Free</button>
    </div>
  )
}

export default Navbar
