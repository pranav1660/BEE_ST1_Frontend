import React from 'react'
import nature from '../about/nature.mp4'

export const About = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={nature} autoPlay loop muted />
        <div className="text">
            <h1>PHOTO GALLERY</h1>
            
        </div>
    </div>
  )
}

export default About