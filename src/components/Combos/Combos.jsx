import React from 'react'
import './Combos.css'
import line from '../Assets/Rectangle 21.png'
import Limelight_Product from '../Assets/combos'
import Items from '../Items/Items'

const Combos = () => {
    return (
        <div className="combos">
            <div className="box">
                <a href="#" className="img"><img src={line} alt="" /></a>
                <h1>In The Limelight</h1>
            </div>
            <div className="combos-grid">
                {Limelight_Product.map((item,i)=> {
                    return ( <Items key ={i} id={item.id} name={item.name} image={item.image} title={item.title} price={item.price} like={item.like}/>)
                })}
            </div>
        </div>
    )
}

export default Combos
