import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
  
  const [currState,SetCurrState] = useState("Login")
  return (
    <div className='login_popup'>
      <form className="login_popup_container">
        <div className='login_popup_title'>
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""/>
        </div>
        <div className='login_popup_inputs'>
          {currState==="Login"?<></>:<input type='text' placeholder='Enter Your Name' required />}
          <input type='email' placeholder='Enter Your Emil' required />
          <input type='password' placeholder='Password' required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login_popup_condition">
          <input type='checkbox' required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account?  <span onClick={()=>SetCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have an account?  <span onClick={()=>SetCurrState("Login")}>Login here</span></p>
         }
      </form>
    </div>
  )
}

export default LoginPopup
