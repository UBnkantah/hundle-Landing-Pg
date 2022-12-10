import React from 'react'
import HdImg from "../images/illustration-mockups.svg"
import "./Header.css"


const Header = () => {
  return (
    <div className='huddle'>
        <div className='huddle-details'>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
                Create connections with your users as you engage in genuine discussion.
            </p>
            <div className="button">
                <button>Get Started For Free</button>
            </div>
            
        </div>
        <div className='img'>
            <img src={HdImg} alt="" />
        </div>
    </div>
  )
}

export default Header