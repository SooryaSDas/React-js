import React from 'react'
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>

      <div className='banner'>
        <div className=''>
            <div className="fade_begin">
                <img className='netflix-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="logo" />
                <button type="button" class="btn btn-dark english">🌐 English </button>
                <button type="button" className="btn btn-danger sign-in">Sign In</button>
            <div>
            </div>
            <h2 className='body-head1'>Unlimited movies, TV shows and more</h2>
            <h4 className='body-head2'>Watch anywhere. Cancel anytime.</h4>
            <h4 className='body-head2'>Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className='body-input'>
                 <input className='body-input-text' type="text" placeholder='Email address'/> &nbsp;
                 <button  type="button" class="btn btn-danger btn-lg body-input-btn">Get Started > </button>


                 <div className="fade_bottom"></div>

            </div>

            

            </div>

        </div>
      </div>
      <div className='div_end'></div>


    </div>
   
  );
};

export default HomePage