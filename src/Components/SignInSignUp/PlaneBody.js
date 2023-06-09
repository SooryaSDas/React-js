import React from 'react'
import "./PlaneBody.css"
import { Link } from 'react-router-dom'


const PlaneBody = () => {
  return (
    <div>
        <div className='planebody'>
          <div className="fade_begin-planebody"> 
            <Link to="/"> <img className='planebody-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="logo" /> </Link>
          </div>
          <div>
            <div className='div-sign-in'>
              
            </div>
            <div className='fade_bottom-planebody'></div>
          </div>
        </div>
    </div>
  );
};

export default PlaneBody