import React from 'react'
import { FaRegCheckCircle, FaRegStar, FaShippingFast } from 'react-icons/fa';
import './Features.css'


function Features() {
  return (
    <div>
        <div className="features">
            <h2>Why Choose Our Brand</h2>
            <p className="description">Quality, Style, and Comfort  All in One <br/>
            we offer a curated collection of high-quality, fashion-forward clothing designed for every occasion</p>
            <div className="card_container">
                <div className="card">
                    <FaRegStar className='icon'/>
                    <h3>Best Quality</h3>
                    <p>100% Genuine Products</p>
                </div>
                <div className="card">
                    <FaShippingFast className='icon' />
                    <h3>Free Shipping</h3>
                    <p>100% Free Shipping Products</p>
                </div>
                <div className="card">
                    <FaRegCheckCircle className='icon' />
                    <h3>Warranty</h3>
                    <p>100% Return Guarantee</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features