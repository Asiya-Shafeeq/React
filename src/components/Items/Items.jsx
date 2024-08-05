import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'
import products from '../Assets/products_data'

const Items = (props)=> {
  return (
        <div className="categories">
            <span className="img one">
                <Link to={`/products/${props.id}`}><img onClick={window.scrollTo(0,0)}src={props.image} alt=""/></Link>
            </span>
            <span className="content">
              <span className="names">
              <li>
                <h5 className="name">{props.name}</h5>
                <h6 className="title">{props.title}</h6>
              </li>
              </span>
              <span className="boxes">
              <li>
                <a href="" className='price'>{props.price}</a>
              </li>
              <li>
                <a href="#" className="arrow"><img src={props.arrow} alt=""/></a>
              </li>
              <li>
                <a href="" className='wishlist'><img src={props.like} alt="" /></a>
              </li>
              <li>
                <a href="" className='side_img'><img src={props.images} alt="" /></a>
              </li>
              </span>
            </span>
          </div>
    )
    }

export default Items

