import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Nhận Khuyến Mãi Hấp Dẫn Qua Email Của Bạn</h1>
            <p>Đăng ký nhận tin và luôn được cập nhật</p>
            <div>
                <input type="email" placeholder='Email của bạn' />
                <button>Đăng Ký</button>
            </div>
        </div>
    )
}

export default NewsLetter