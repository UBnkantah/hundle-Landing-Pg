import React from 'react'
import ursImg from "../images/illustration-your-users.svg"
import "./YourUser.css"

const YourUsers = () => {
  return (
    <div className='yourUsers'>
        <div className='urs-details'>
            <h1>Your Users</h1>
            <p>It takes no time at all to integrate Huddle with your app's authentication solution. 
                This means, once signed in to your app, your users can start chatting immediately.
            </p>
        </div>
        <div className='img'>
            <img src={ursImg} alt="" />
        </div>
    </div>
  )
}

export default YourUsers