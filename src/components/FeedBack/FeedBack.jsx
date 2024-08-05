import React from 'react'
import './FeedBack.css'
import mark from '../Assets/Rectangle 21.png'
import span_1 from '../Assets/span-1.svg'
import span_2 from '../Assets/span-2.svg'
import span_3 from '../Assets/span-3.svg'
import star from '../Assets/Frame 260.png'
import bottom_dots from '../Assets/Frame 244.png'

function FeedBack() {
  return (
    <div className='feedback'>
        <div className="box">
            <a href="#" className="img"><img src={mark} alt="" /></a>
            <h1>Feedback</h1>
        </div>
        <div className="feedback_items">
            <ul>
                <li>
                    <div className="span_img">
                        <span className='img'>
                            <img src={span_1} alt="" />
                        </span>
                    <span className="star">
                        <img src={star} alt="" />
                    </span>
                </div>
                    <div className="span_box">
                        <h4>Floyd Miles</h4>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.<br/> Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>                        </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div className="span_img">
                        <span className='img'>
                            <img src={span_2} alt="" />
                        </span>
                        <span className="star">
                            <img src={star} alt="" />
                        </span>
                    </div>
                    <div className="span_box">
                        <h4>Ronald Richards</h4>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.<br/> Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div className="span_img">
                        <span className='img'>
                            <img src={span_3} alt="" />
                        </span>
                        <span className="star">
                            <img src={star} alt="" />
                        </span>
                    </div>
                    <div className="span_box">
                        <h4>Savannah Nguyen</h4>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.<br/> Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </li>
            </ul>
        </div>
        <div className="feedback-bottom">
            <span className='dot-img'>
                <img src={bottom_dots} alt="" />
            </span>
        </div>
    </div>
  )
}

export default FeedBack

