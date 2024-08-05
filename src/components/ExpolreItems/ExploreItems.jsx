import React from 'react'
import './ExploreItems.css'
import ExploreItems from '../Assets/explore_data'

function ExploreItems() {
  return (
    <div className='explore'>
      {ExploreItems.map((item,i) => {
        return <item key={i} id={item.i} h3={item.h3} h1={item.h1} h4={item.h4} title={item.title}/>
          
        })}
    </div>
  )
}

export default ExploreItems



