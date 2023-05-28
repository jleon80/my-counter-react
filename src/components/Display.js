import React from 'react'
import '../css/Display.css'

function Display({counterValue}) {
  return (
    <div className='display'>{counterValue}</div>
  )
}

export default Display