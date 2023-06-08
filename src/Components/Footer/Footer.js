import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <h6>Questions? Call 000-800-919-1694</h6>
        <div className='d-flex flex-row'>
            <div className='listing'>
                <ul>
                    <li>FAQ</li>
                    <li>Media Centre</li>
                    <li>Ways to Watch</li>
                    <li>Cookie Preferences</li>
                    <li>Speed Test</li>
                </ul>
            </div>
            <div className='listing'>
                <ul>
                    <li>Help Centre</li>
                    <li>Investor Relation</li>
                    <li>Terms of Use</li>
                    <li>Corporate Information</li>
                    <li>Legal Notices</li>
                </ul>
    
            </div>
            <div className='listing'>
                <ul>
                    <li>Account</li>
                    <li>Jobs</li>
                    <li>Privacy</li>
                    <li>Contact Us</li>
                    <li>Only on Netflix</li>
                </ul>
            </div>
        </div>
        <button type="button" class="btn btn-dark border border-white">🌐 English </button>
        <h6 className='netflix_india'>Netflix India</h6>
    </div>
  )
}

export default Footer