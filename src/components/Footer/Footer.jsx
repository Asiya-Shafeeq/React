import React from 'react'
import './Footer.css'
import facebook from '../Assets/Group 10.png'
import instagram from '../Assets/Group 11.png'
import twitter from '../Assets/Group 12.png'
import ine from '../Assets/Group 13.png'
import phone from '../Assets/phone.svg'
import play from '../Assets/playstore.svg'
import arrow from '../Assets/ChevronRight.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <ul>
                <li>
                    <h5>Need Help</h5>
                </li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Track Order</a></li>
                <li><a href="">Returns & Refunds</a></li>
                <li><a href="">FAQ's</a></li>
                <li><a href="">Career</a></li>
            </ul>
            <ul>
                <li><h5>Company</h5></li>
                <li><a href="">About</a></li>
                <li><a href="">Euphoria Blog</a></li>
                <li><a href="">Euphoriastan</a></li>
                <li><a href="">Collaboration</a></li>
                <li><a href="">Media</a></li>
            </ul>
            <ul>
                <li><h5>More Info</h5></li>
                <li><a href="">Tern and Conditions</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Shipping Policy</a></li>
                <li><a href="">Sitemap</a></li>
            </ul>
            <ul>
                <li><h5>Location</h5></li>
                <li><a href="">support@euphoria.in</a></li>
                <li><a href="">EKlingpura Chouraha,Ahmedabad Main Road</a></li>
                <li><a href="">(NH 8-Near Mahadev Hotel)Udaipur,India-313002</a></li>
            </ul>
        </div>
        <div className="social">
            <div className="icons">
                <ul>
                    <li><a href=""><img src={facebook} alt="" /></a></li>
                    <li><a href=""><img src={instagram} alt="" /></a></li>
                    <li><a href=""><img src={twitter} alt="" /></a></li>
                    <li><a href=""><img src={ine} alt="" /></a></li>
                </ul>
            </div>
            <div className="store">
                <h1>Download The App</h1>
                <div className="socail_box">
                <span className='play'>
                    <a href="" className="playstore"><img src={play} alt="" /></a>
                    <li className='heading'>
                        <a href="">android app on</a>
                        <a href=""><h3>Google Play</h3></a>
                    </li>
                </span>
                <span className='phone'>
                    <a href="" className="phone"><img src={phone} alt="" /></a>
                    <li className='heading'>
                        <a href="">Available on the</a>
                        <a href=""><h3>App Store</h3></a>
                    </li>
                </span>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="bottom_box">
                <h3>Popular Categories</h3>
                <a href="" className='down_arrow'><img src={arrow} alt="" /></a>
            </div>
            <p>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
