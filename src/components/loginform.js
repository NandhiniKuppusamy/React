import React, { useState } from 'react';
import './loginform.css'
const LoginForm = ()=>{
    const [popupStyle, showPopup] = useState("hide");
    const popup = ()=>{
        showPopup("login-popup")
        setTimeout(()=> showPopup("hide"), 3000);
    }
    return(
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="USERNAME"/>
            <input type="password" placeholder="PASSWORD"/>
            <div className="login-btn" onClick={popup}>Login</div>
            <p className="text">OR LOGIN USING</p>
            <div className="alt-login">
                <div className="facebook" style={{backgroundColor:"green", padding:"15px", textAlign:"center"}}>facebook</div>
                <div className="google" style={{backgroundColor:"green", padding:"15px", textAlign:"center"}}>google</div>
            </div>
            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Incorrect username or password</p>
            </div>
            
        </div>
    )
}
export default LoginForm;