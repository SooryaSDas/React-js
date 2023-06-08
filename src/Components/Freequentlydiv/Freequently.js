import React from 'react'
import "./Freequently.css"
import { useState } from 'react';

const Section = ({title, description, isVisible, setIsVisible})=>{
  return(
    <div className='border border-white p-2 m-2'>
      <h3 className="font-bold text-xl"> {title} </h3>
      {/* <p> {description} </p> */}
      {isVisible ? (
        <div>
            {/* <button
              onClick={() => setIsVisible(false)}
              className="hide"
              >X
            </button> */}
            <p>{description}</p>
        </div>
        ) : 
        (
          <h1
            onClick={() => setIsVisible(true)}
            className="show"
            >
            +
          </h1>
        )
      }
    </div>
  );
};

const Freequently = ()=>{
  const [visibleSection, setVisibleSection] = useState();
    return(
     <div>
       <div className='freequently'>
        <h1 className='freequently_head'>Frequently Asked Questions</h1>
        <Section 
          title = {"What is Netflix?"}
          description = {"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"}
          isVisible = {visibleSection==='what'}
          setIsVisible = {()=>setVisibleSection("what")}
        />
        <Section 
          title = {"How much does Netflix cost?"}
          description = {"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 649 to ₹ 149 a month. No extra costs, no contracts."}
          isVisible={visibleSection === 'how much'}
          setIsVisible={()=>setVisibleSection("how much")}
        />
        <Section 
          title = {"Where can I watch?"}
          description = {"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."}
          isVisible={visibleSection==='where'}
          setIsVisible={()=>setVisibleSection("where")}
        />
        <Section 
          title = {"How do I cancel?"}
          description = {"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."}
          isVisible={visibleSection==='how do'}
          setIsVisible={()=>setVisibleSection("how do")}
        />
        <Section 
          title = {"What can I watch on Netflix?"}
          description = {"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."}
          isVisible={visibleSection==='what can'}
          setIsVisible={()=>setVisibleSection("what can")}
        />
        <Section 
          title = {"Is Netflix good for kids?"}
          description = {"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."}
          isVisible={visibleSection==='is netflix'}
          setIsVisible={()=>setVisibleSection("is netflix")}
        />
        <h3 className='readytowatch'>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className='input_box'>
          <input className='body-input-text' type="text" placeholder='Email address'/> &nbsp;
          <button  type="button" class="btn btn-danger btn-lg body-input-btn">Get Started > </button>
        </div>
      </div>
      <div className='div_end'></div>
     </div>

    )
}

export default Freequently