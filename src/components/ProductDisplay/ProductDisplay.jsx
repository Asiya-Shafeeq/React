import React from 'react'
import './ProductDisplay.css'
import star from '../Assets/Frame 260.png'
import comment from '../Assets/message.svg'
import cart from '../Assets/cart.svg'
import arrow_icon from '../Assets/right-arrow-light.svg'
import arrow from '../Assets/arrow-right.svg'
import cure from '../Assets/credit card.svg'
import shipping from '../Assets/truck.svg'
import free from '../Assets/Free-Shipping&Returns.svg'
import fit from '../Assets/Size&Fit.svg'

const ProductDisplay = (props) => {
    const {products} = props;
  return (
    <div className='product-display'>
        <div className="top">
        <div className="product-left">
        <div className="product-img-list">
            <li><img src={products.image} alt="" /></li>
            <li><img src={products.image} alt="" /></li>
            <li><img src={products.image} alt="" /></li>
        </div>
        <div className="product-img">
            <img className='product-mainimg' src={products.image} alt="" />
        </div>
      </div>
      <div className="product-right">
            <div className='breadcrums'>
                Shop <a href="#"><img src={arrow_icon} alt="" /></a>{products.category} <a href="#"><img src={arrow_icon} alt="" /></a> Top
            </div>
            <h1>{products.name}</h1>
            <div className="right-star">
                <a href="" className="star"><img src={star} alt="" /></a>
                <p>(3.5)</p>
                <div className="comment">
                    <a href="" className='commnet'><img src={comment} alt="" /></a>
                    <p>120 comment</p>
                </div>
            </div>
            <div className="size">
                <div className="size-text">
                    <h3>Select Size <span>Size Guide</span></h3>
                    <a href="" className="arrow"><img src={arrow} alt="" /></a>
                </div>
                <div className="size-box">
                    <li><a className='active' href="">XL</a></li>
                    <li><a href="">S</a></li>
                    <li><a href="">M</a></li>
                    <li><a href="">L</a></li>
                    <li><a href="">XX</a></li>
                </div>
                <div className="color_box">
                    <h5>Colours Available</h5>
                </div>
                <div className="buttons">
                    <span className='cart'>
                        <a href=""><img src={cart} alt="" /></a>
                        <a href="" className='text'>Add to cart</a>
                    </span>
                    <span className="price">$63.00</span>
                </div>
                <hr className='line'/>
            </div>
            <div className="shoping">
                <li>
                    <a href="" className="shop_img"><img src={cure} alt="" /></a>
                    <a href="" className='text'>Secure Payment</a>
                </li>
                <li>
                    <a href="" className="shop_img"><img src={fit} alt="" /></a>
                    <a href=""  className='text'>Size & Fit</a>
                </li>
                <li>
                    <a href="" className="shop_img"><img src={shipping} alt="" /></a>
                    <a href=""  className='text'>Free Shipping</a>
                </li>
                <li>
                    <a href="" className="shop_img"><img src={free} alt="" /></a>
                    <a href=""  className='text'>Free Shiping & Returns</a>
                </li>
            </div>
        </div>
        </div>
    </div>    
  )
}

export default ProductDisplay
