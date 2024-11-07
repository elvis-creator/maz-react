import React from 'react'
import hero_img from '../../assets/image1.jpeg'
import './Hero.css'

function Hero() {
  return (
    <div>

        <div className="hero">
            <div className="hero_content">
                <div className="hero_left">
                    <h1>Masiza Africa Wears</h1>
                    <p className="text">We are more than just a shop we are a community. Our friendly and knowledgeable team is always on hand to offer personalized styling advice, ensuring you leave feeling your best.</p>
                    <p className="price">$ 75.99</p>
                    <buttton className="cta">BUY NOW</buttton>
                </div>
                <div className="hero_right">
                    <img src={hero_img} alt="image" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero