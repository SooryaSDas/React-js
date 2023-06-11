import React from 'react'
import "./SignIn.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'

const SignIn = () => {
  const [email, SetEmail] = useState();
  const [pass, SetPass] = useState();

  return ( 
        <div>
        <div className='planebody'>
          <div className="fade_begin-planebody"> 
            <Link to="/"> <img className='planebody-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="logo" /> </Link>
          </div>
          <div>
            <div className='div-sign-in'>
                <div className='sign-in-contents'>
                  <h2 >Sign In</h2>

                  <input type="email"
                        onChange={(e)=>SetEmail(e.target.value)}
                        value={email} 
                        class="form-control input-data-email" 
                        id="inputPassword2" 
                        placeholder="Email" />
                      {/* {email} {pass} */}
                  <input type="password" 
                        onChange={(e)=>SetPass(e.target.value)}
                        value={pass} 
                        class="form-control input-data-pwd" 
                        id="inputPassword2" 
                        placeholder="Password" />

                <Link to="/body">  <button type="button" class="btn btn-danger btn-lg signin-btn">Sign In</button></Link>
                  <input type="checkbox" /> <span className='span-me'>Remember Me</span> 
                  <span className='span-need'>Need help?</span>
                  <br /><br />
                  <span className='span-new'>New to Netflix?</span>
                 <Link to="/signup"> <span className='span-signupnow'>  Sign Up Now.</span></Link>
                  <p className='text-signin'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
                </div> 
            </div>
            <div className='fade_bottom-planebody'></div>
          </div>
        </div>
    </div>
  )
}

export default SignIn