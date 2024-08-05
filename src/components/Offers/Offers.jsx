import React from 'react'
import './Offers.css'

function Offers() {
  return (
    <div className='Offers'>
        <div className="left-offer">
                <h5>Low Price</h5>
                <h1>High Coziness</h1>
                <h4 className='offer'>UPTO 50% OFF</h4>
                <h4>Explore Items</h4>
        </div>
        <div className="right-offer">
            <h5>Beyoung Presents</h5>
            <h1>Breezy Summer<br/>Style</h1>
            <h4 className='offer'>UPTO 50% OFF</h4>
            <h4>Explore Items</h4>
        </div>
    </div>
  )
}

export default Offers
