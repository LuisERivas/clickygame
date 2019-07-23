import React from 'react'
import './style.css'

function navBar (props) {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <h1 className='title'>{props.children}</h1>
    </nav>
  )
}
export default navBar