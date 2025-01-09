import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {

    const [state, setState] = useState("Đăng Nhập");
    const [formData, setFormData] = useState({
        username:"",
        password:"",
        email:"",
    })

    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const login = async () => {
        console.log("Login",formData)
        let responseData;
        await fetch('http://localhost:4000/login',{
            method: 'POST',
            headers: {
                Accept:'application/form-data',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((response) => response.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.error)
        }
    }

    const signup = async () => {
        console.log("Signup",formData)
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method: 'POST',
            headers: {
                Accept:'application/form-data',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((response) => response.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.error)
        }
    }

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state==="Đăng Ký"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Tên của Bạn' />:<></>}
                    <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Địa chỉ Email' />
                    <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Mật Khẩu' />
                </div>
                <button onClick={()=>{state==="Đăng Nhập"?login():signup()}}>Tiếp tục</button>
                {state === "Đăng Ký"
                ?<p className="loginsignup-login">Đã có tài khoản? <span onClick={()=>{setState("Đăng Nhập")}}>Đăng nhập tại đây</span></p>
                :<p className="loginsignup-login">Đăng ký tài khoản? <span onClick={()=>{setState("Đăng Ký")}}>Đăng ký tại đây</span></p>}
                <div className='loginsignup-agree'>
                    <input type="checkbox" name='' id='' />
                    <p>Tôi đồng ý với các Điều Khoản Sử Dụng & Bảo Mật</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup