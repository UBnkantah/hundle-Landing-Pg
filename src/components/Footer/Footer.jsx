import React from 'react'
import logo from "../images/logo.svg"
import "./Footer.css"


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <img src={logo} alt="" />
        </div>
        <ul className='footer-content'>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
        </ul>
        <ul className='footer-content'>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
        </ul>
        <div className='footer-content'>
            <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
