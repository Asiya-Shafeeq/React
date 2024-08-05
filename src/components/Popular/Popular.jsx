import React from 'react'
import './Popular.css'
import menproduct from '../Assets/data'
import Items from '../Items/Items'
import line from '../Assets/Rectangle 21.png'

function Popular() {
  return (
    <div className='popular top'>
      <div className="box">
        <div className="line">
          <img src={line}alt="" />
        </div>
        <h1>Categories For Men</h1>
      </div>
        <div className='popular-grid'>
            {menproduct.map((item,i) => {
                return <Items key ={i} id={item.id} name={item.name} image={item.image} title={item.title} arrow={item.arrow} />
            })}
        </div>
    </div>
  )
}

export default Popular
