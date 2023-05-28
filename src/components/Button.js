import React from 'react'
import '../css/Button.css'

function Button({ text, styleBtn, clickHandler }) {
  return (
    <div>
      <button className={styleBtn} onClick={clickHandler}>{text}</button>
    </div>
  )
}

export default Button;