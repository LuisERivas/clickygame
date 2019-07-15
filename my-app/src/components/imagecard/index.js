import React from 'react'
import './style.css'

function ImageCard (props) {
  return (
    <div className='card float-left'>
      <div className='img-container '>
        <img alt={props.name} src={props.image} className='cardSize' />
      </div>
    </div>
  )
}

export default ImageCard
