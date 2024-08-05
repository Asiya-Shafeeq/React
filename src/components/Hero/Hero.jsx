import React from 'react'
import './Hero.css'
import bottom_dot from '../Assets/carousel-indicators.png'

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-contants">
        <h5>T-shirt / Tops</h5>
        <h1>Summer <br/>Value Pack</h1>
        <h5>cool / colorful / comfy</h5>
        <button>Shop Now</button>
      </div>
      <div className="hero-bottom">
          <span className='dot-img'>
              <img src={bottom_dot} alt="" />
          </span>
      </div>
    </div>
  )
}

export default Hero
