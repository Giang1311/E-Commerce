import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>Các Sản Phẩm</h1>
                <h1>Đáng Mua Dành Cho Bạn</h1>
                <p>CHỈ NHỮNG SẢN PHẨM BÁN CHẠY</p>
                <button>Xem Ngay</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers