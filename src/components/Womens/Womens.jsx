import React from 'react'
import './Womens.css'
import womenproduct from '../Assets/womens_data'
import Items from '../Items/Items'
import mark from '../Assets/Rectangle 21.png'

function Womens() {
  return (
    <div className='womens top'>
    <div className="box">
      <div className="mark">
        <img src={mark}alt="" />
      </div>
      <h1>Categories For Women</h1>
    </div>
      <div className='womens-grid'>
          {womenproduct.map((item,i) => {
              return <Items key ={i} id={item.id} name={item.name} image={item.image} title={item.title} arrow={item.arrow}/>
          })}
      </div>
  </div>
  )
}

export default Womens
