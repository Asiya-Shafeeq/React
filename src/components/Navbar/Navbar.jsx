import React, { useState } from 'react'
import { useRef } from 'react'
import './Navbar.css'
import logo from '../Assets/Logo.svg'
import search from '../Assets/search.svg'
import wishlisht from '../Assets/wishlist.svg'
import account from '../Assets/account.svg'
import cart from '../Assets/cart.svg'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");

  }
  const [menu,setmenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu" ref={navRef}>
        <li onClick={()=>{setmenu("Shop")}}><Link to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("Mens")}}><Link to='/Mens'>Men</Link>{menu==="Mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("Womens")}}><Link to='/Womens'>Women</Link>{menu==="Womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("Combos")}}><Link to='/Combos'>Combos</Link>{menu==="Combos"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("Joggers")}}><Link to='/Joggers'>Joggers</Link>{menu==="Joggers"?<hr/>:<></>}</li>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes/>
        </button>
      </ul>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars/>
      </button>
      <form>
            <div class="input-box">
               <a class="icon btn-search">
                    <img src={search} alt="" />
                 </a>
                    <input type="text" placeholder="Search" class="from-control"/>
              </div>
      </form>
      <div class="right">
          <ul>
            <li><a href=""><img src={wishlisht} alt="" /></a></li>
            <li><a href=""><img src={account} alt="" /></a></li>
            <li><a href=""><img src={cart} alt="" /></a></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar

