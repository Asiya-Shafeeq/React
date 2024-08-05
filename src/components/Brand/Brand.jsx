import React from 'react'
import './Brand.css'
import imag from '../Assets/nike.jpg'
import hm from '../Assets/H&M.jpg'
import levis from '../Assets/levis.jpg'
import uspa from '../Assets/USPA.jpg'
import puma from '../Assets/puma.jpg'


function Brand() {
  return (
    <div className='brand'>
      <h1>Top Brands Deal</h1>
      <h5>Up To <b>60%</b> Off On Brands</h5>
      <div className="brands-icon">
        <li><a href=""><img src={imag} alt="" /></a></li>
        <li><a href=""><img src={hm} alt="" /></a></li>
        <li><a href=""><img src={levis} alt="" /></a></li>
        <li><a href=""><img src={uspa} alt="" /></a></li>
        <li><a href=""><img src={puma} alt="" /></a></li>
      </div>
    </div>
  )
}

export default Brand

