import React from 'react'
import "./SignUp.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import {FirebaseContext} from "../../store/Context"


const SignUp = () => {
  const navigate = useNavigate();
  const [username, SetUser] = useState('');
  const [phone, SetPhone] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPass] = useState('');
  const {firebase} = useContext(FirebaseContext);


  const handleSubmit = (e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
          navigate('/signin');
        })
      })
    })
    // console.log(firebase)
  }

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
                <form onSubmit={handleSubmit}>
                  {/* {username} {phone} {email} {password} */}
                  <input type="text"
                        value={username}
                        onChange={(e)=>SetUser(e.target.value)} 
                        name= "username"
                        class="form-control signup-pwd" 
                        id="inputPassword2" 
                        placeholder="Username"
                        required 
                  />
                  <input type="tel"
                        value={phone} 
                        onChange={(e)=>SetPhone(e.target.value)}
                        name='phone'
                        pattern="[0-9]{10}" 
                        class="form-control signup-pwd" 
                        id="inputPassword2" 
                        placeholder="Phone number"
                        required 
                  />

                  <input type="email"
                          value={email} 
                          onChange={(e)=>SetEmail(e.target.value)}
                          name='email'
                          class="form-control signup-pwd" 
                          id="inputPassword2" 
                          placeholder="Email" 
                          required
                  />

                  <input type="password"
                        value={password} 
                        onChange={(e)=>SetPass(e.target.value)}
                        name='password'
                        class="form-control signup-pwd" 
                        id="inputPassword2" 
                        placeholder="Password" 
                        required
                  />

                  <button type='submit' class="btn btn-danger btn-lg signup-btn">Sign In</button>
                </form>
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
  );
};

export default SignUp