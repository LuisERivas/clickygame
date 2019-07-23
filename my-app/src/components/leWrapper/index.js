import React from 'react'
import './style.css';

function leWrapper (props) {
  return <div className='container'>{props.children}</div>
}

export default leWrapper
