import React from 'react'
import FlowImg from "../images/illustration-flowing-conversation.svg"
import "./Flow.css"

const Flow = () => {
  return (
    <div className='flow'>
        <div className='img'>
            <img src={FlowImg} alt="" />
        </div>
        <div className='detail'>
            <h1>Flowing Conversations</h1>
            <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads 
                have just-in-time loading for a more natural flow.
            </p>
        </div>
    </div>
  )
}

export default Flow