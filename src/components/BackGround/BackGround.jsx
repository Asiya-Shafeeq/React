import React from 'react'
import './BackGround.css'
import right_bg from '../Assets/bg-5.jpg'

function BackGround() {
  return (
    <div className='background'>
      <div className="left_bg">
        <h1>WE MADE YOUR EVERYDAY<br/>FASHION BETTER!</h1>
        <p>In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</p>
        <button>Shop Now</button>
      </div>
      <div className="right_bg">
        <img src={right_bg} alt="" />
      </div>
    </div>
  )
}

export default BackGround
