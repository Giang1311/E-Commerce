import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow_icon.png'
import hero_img from '../Assets/hero_image.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>HÀNG MỚI CẬP BẾN</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>Hàng mới</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>hot nhất</p>
                    <p>trong năm</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>Các sản phẩm mới nhất</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_img} alt="" />
            </div>
        </div>
    )
}

export default Hero