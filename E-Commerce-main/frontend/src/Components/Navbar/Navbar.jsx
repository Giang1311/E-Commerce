import React, { useContext, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu,setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext);

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>ZEEN</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Cửa Hàng</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("phones")}}><Link style={{textDecoration: 'none'}} to='/phones'>Điện Thoại</Link>{menu==="phones"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("tablets")}}><Link style={{textDecoration: 'none'}} to='/tablets'>Máy Tính Bảng</Link>{menu==="tablets"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("laptops")}}><Link style={{textDecoration: 'none'}} to='/laptops'>Laptop</Link>{menu==="laptops"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Đăng Xuất</button>
                :<Link to='/login'><button>Đăng Nhập</button></Link>}
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar