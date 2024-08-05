import React from 'react'
import './DescriptionBox.css'
import mark from '../Assets/Rectangle 21.png'



const DescriptionBox = () => {
  return (
    <div className='discriptionbox'>
        <div className="box">
            <a href="#" className="img"><img src={mark} alt="" /></a>
            <h1>Product Description</h1>
        </div>
        <div className="description-box">
        <div className="left-description">
            <div className="descriptin_box">
                <ul>
                    <li>
                        <a href="">Description</a></li>
                    <li>
                        <a href="">User Comments</a>
                        <small>21</small>
                    </li>
                    <li>
                        <a href="">User Comments</a>
                        <small className='one'>4</small>
                    </li>
                </ul>
                <p>100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.</p>
            </div>
        </div>
        <div className="right-description">
            <ul className='top'>
            <li>
                <h3>Fabric</h3>
                <h6>Bio-washed Cotton</h6>
            </li>
            <li>
                <h3>Pattern</h3>
                <h6>Printed</h6>
            </li>
            <li>
                <h3>Fit</h3>
                <h6>Regular-fit</h6>
            </li>
            </ul>
            <ul className='bottom'>
            <li>
                <h3>Neck</h3>
                <h6>Round Neck</h6>
            </li>
            <li>
                <h3>Sleeve</h3>
                <h6>Half-sleeves</h6>
            </li>
            <li>
                <h3>Style</h3>
                <h6>Casual Wear</h6>
            </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default DescriptionBox
