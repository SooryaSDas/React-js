import React from 'react'
import "./SignIn.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import {FirebaseContext} from "../../store/Context"

const SignIn = () => {
  const navigator = useNavigate();
  const [email, SetEmail] = useState();
  const [password, SetPass] = useState();
  const {firebase} = useContext(FirebaseContext)

  const handlesignin = (e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then((result)=>{
      // alert("loged in")
      console.log(result)
    }).catch((error)=>{
      // alert(error.message)
    })
    navigator("/body")
  }

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
                  <form onSubmit={handlesignin}>
                    <input type="email"
                      required
                      value={email} 
                      onChange={(e)=>SetEmail(e.target.value)}
                      class="form-control input-data-email" 
                      id="inputPassword2" 
                      placeholder="Email" 
                    />
                      {/* {email} {password} */}
                    <input type="password" 
                        required
                        value={password} 
                        onChange={(e)=>SetPass(e.target.value)}
                        class="form-control input-data-pwd" 
                        id="inputPassword2" 
                        placeholder="Password" 
                    />

                    <button type="submit" class="btn btn-danger btn-lg signin-btn">Sign In</button>
                  </form>
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