import React from 'react'
import "./BodyVideo.css"

const BodyVideo = ({video,content,subtitle}) => {
  return (
    <div>
        <div className='body-image d-flex flex-row'>
            <div className='div_video_content'>
                <h2 className='div_video_title'> {content}</h2>
                <p className='div_video_subtitle'>{subtitle}</p>        
            </div>
            <div className='div_body_video'>
                <img className='body_video_image' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" 
                    alt="image"
                />
                
                    <iframe autoplay muted playsinline className='iframe' width={"410px"} height={"239px"} src={video}
                            // frameborder="0"
                            // allow='autoplay'
                            

                        ></iframe>
           
                

            </div>
        </div>
        <div className='div_end'></div>
    </div>
  )
}

export default BodyVideo