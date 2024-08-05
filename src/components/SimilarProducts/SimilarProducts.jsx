import React from 'react'
import './SimilarProducts.css'
import line from '../Assets/Rectangle 21.png'
import products from '../Assets/products_data'
import Items from '../Items/Items'

function SimilarProducts() {
  return (
    <div className='similarproducts'>
      <div className="box">
        <a href="#" className="img"><img src={line} alt="" /></a>
        <h1>Similar Products</h1>
        </div>
        <div className="similar-grid">
            {products.map((item,i) => {
                return <Items key ={i} id={item.id} name={item.name} image={item.image} title={item.title} arrow={item.arrow}/>
            })}
        </div>
    </div>
  )
}

export default SimilarProducts
