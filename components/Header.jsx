import React, { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
const Header=()=>{
    const [ButtonName,setButtonName]=useState('Login')
    
    return (
        <div className='header'>
            <div className='logo-container'>
                <img 
                className="logo"
                src={LOGO_URL}
                />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                      ButtonName==='Login'?setButtonName('Logout'):setButtonName('Login');
                    }}>{ButtonName}</button>
                </ul>

            </div>
        </div>
    );
};

export default Header;