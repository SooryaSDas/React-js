import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar_mainbody'>
           <Link to="/"> <img className='logo_navbar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="logo" /></Link>
          
            <img className='avatar_navbar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt="logo" />
        </div>
    )
}

export default Navbar
