import s from './Button.module.css';
import React from 'react'

export default function Button({btnName}) {
  return (
    <div >
        <button className={s.button_orange}>{btnName ?? 'button'}</button>
    </div>
  )
}
