import React from 'react'
import  "./Screen.css"
import video from "../assets/Screen Recording 2025-12-24 165030.mp4"
const Screen = () => {
  return (
    <div className='screen-container'>
       <video
        src={video}
        autoPlay
        loop
        muted
        className="background-video"
      />
      <div className='overlay'> </div>
      {/*OverLay content*/}
      <div className='content'>
 <h1>
          DEFENDER OCTA
        </h1>
          <p >
          Feel the Power
        </p>
       
      </div>
      
     
    </div>
  )
}

export default Screen
