import {LOGO_URL} from '../utils/constants'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Header=()=>{
    const [loginBtnName,setLoginBtnName]=useState("Login")
    return (
       <div className="header">
          <div className="logo-container">
             <img src={LOGO_URL} alt=""/>
 
          </div>
          <div className="nav-container">
             <ul>
                <li>
                    <Link to='/'>Home</Link>
                    </li>
                <li>
                <Link to='/about'>About</Link>
                </li>
                <li>
                <Link to='/contact'>Contact</Link>
            </li>
                <li>
                <Link to='/cart'>Cart</Link>
                </li>
                <li onClick={()=>{
                     loginBtnName=="Login"? setLoginBtnName('Logout'):setLoginBtnName('Login')
                }}><button className='login-btn' >{loginBtnName}</button></li>
                
 
 
             </ul>
 
          </div>
 
       </div>
    )
 }

 export default Header