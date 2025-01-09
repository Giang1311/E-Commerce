import React, { useContext } from 'react';
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/remove_icon.png'

const CartItems = () => {
    const { getTotalCartAmount, products, cartItems, removeFromCart } = useContext(ShopContext);
    const formatPrice = (price) => {
        return price.toLocaleString('de-DE'); // This formats the number with dots every three digits
    }
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Sản Phẩm</p>
                <p>Tên Sản Phẩm</p>
                <p>Giá Sản Phẩm</p>
                <p>Số lượng</p>
                <p>Tổng Tiền</p>
                <p>Xóa sản phẩm</p>
            </div>
            <hr />
            {products.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (<div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>{e.new_price}đ</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>{formatPrice(e.price * cartItems[e.id])}đ</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>)
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Tổng tiền giỏ hàng</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Tổng</p>
                            <p>{formatPrice(getTotalCartAmount())}đ</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Phí Ship</p>
                            <p>Miễn Phí</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Tổng thanh toán</h3>
                            <h3>{formatPrice(getTotalCartAmount())}đ</h3>
                        </div>
                    </div>
                    <button>TIẾN HÀNH THANH TOÁN</button>
                </div>
                <div className="cartitems-promocode">
                    <p>Nếu bạn có mã khuyến mãi, Nhập tại đây</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Mã khuyến mãi' />
                        <button>Nhập</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems