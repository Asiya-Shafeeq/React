import React from 'react'
import './NewArrival.css'
import new_Aarrival from '../Assets/new_arrival'
import Items from '../Items/Items'
import line from '../Assets/Rectangle 21.png'
import arrow_left from '../Assets/arrow-left.svg'
import arrow_right from '../Assets/arrow-right.svg'


const NewArrival = () => {
    return(
        <div className='new-arrival'>
            <div className="box">
                <a href="#" className="img"><img src={line} alt="" /></a>
                <h1>New Arrival</h1>
            </div>
            <div className="arrival">
            <div className="arrow_left">
                <img src={arrow_left} alt="" />
            </div>
            <div className="collections">
                {new_Aarrival.map((item,i)=>{
                    return <Items key={i} id={item.id} name={item.name} image={item.image}/>
                })}
            </div>
            <div className="arrow_right">
                <img src={arrow_right} alt="" />
            </div>
            </div>
        </div>
    )
}

export default NewArrival
