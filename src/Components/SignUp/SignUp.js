import React from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'

const SignUp = () => {
  const [user, SetUser] = useState();
  const [phone, SetPhone] = useState();
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
            <div className='sign-up-contents'>
                  <h2 >Sign Up</h2>
                  <input type="text"
                        onChange={(e)=>SetUser(e.target.value)} 
                        value={user}
                        class="form-control signup-pwd" 
                        id="inputPassword2" 
                        placeholder="Username" />
                      {/* {user} {phone} {email} {pass} */}
                  <input type="tel"
                        onChange={(e)=>SetPhone(e.target.value)}
                        value={phone} 
                        pattern="[0-9]{10}" 
                        class="form-control signup-pwd" 
                        id="inputPassword2" 
                        placeholder="Phone number" />

                   <input type="email"
                          onChange={(e)=>SetEmail(e.target.value)}
                          value={email} 
                          class="form-control signup-pwd" 
                          id="inputPassword2" 
                          placeholder="Email" />

                  <input type="password"
                        onChange={(e)=>SetPass(e.target.value)}
                        value={pass} 
                        class="form-control signup-pwd" 
                        id="inputPassword2" 
                        placeholder="Password" />

                  <button type="button" class="btn btn-danger btn-lg signup-btn">Sign In</button>
                  <span className='span-need'>Need help?</span>
                  <br /><br />
                 <span className='span-new'>Already have account?</span>
                 <Link to="/signin"> <span className='span-signinnow'>  Sign In Now.</span></Link>
              </div> 
            </div>
            <div className='fade_bottom-planebody'></div>
          </div>
        </div>
      </div>
  )
}

export default SignUp