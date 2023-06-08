import React from 'react'
import "./BodyImage.css"

const BodyImage = ({image, content, subtitle}) => {
  return (
    <div>
      <div className='body-image d-flex flex-row'>
        <div className='div_body_image'>
          <img className='body_image' src={image}
               alt="image"
          />

        </div>
        <div className='div_body_content'>
          <h2 className='div_body_head'> {content}</h2>
          <p className='div_body_subtitle'> {subtitle} </p>        
        </div>
    </div>
    <div className='div_end'></div>
    </div>
  )
}

export default BodyImage