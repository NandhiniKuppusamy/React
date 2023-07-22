import React from 'react';
import './Login.css';
const LoginForm = () =>{
    const shoot =()=>{
        alert('Logged In')
    }
    return(
        <div onClick={shoot} className="main">Login
        {/* <div className="main">Login */}

        </div>
        )   

}
export default LoginForm;
