import React from 'react'
import GrImg from "../images/illustration-grow-together.svg"
import "./Grow.css"

const Grow = () => {
  return (
    <div className='grow'>
        <div className='detail'>
            <h1>Grow Together</h1>
            <p>
                Generate meaningful discussions with your audience and build a strong, loyal community. 
                Think of the insightful conversations you miss out on with a feedback form. 
            </p>
        </div>
        <div className='img'>
            <img src={GrImg} alt="" />
        </div>
    </div>
  )
}

export default Grow