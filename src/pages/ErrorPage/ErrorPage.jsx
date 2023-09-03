import { useNavigate } from 'react-router-dom';
import s  from './ErrorPage.module.css';
import React from 'react'

export default function ErrorPage() {
  let navigate = useNavigate()
  return (
    <div className={s.error__container}>
      <img src="https://i.pinimg.com/736x/b8/fb/70/b8fb705699100d965d1ede440f63bd35.jpg" alt="404" />
      <button className={s.btn_bk} onClick={()=> navigate(-1)}>{`<<Back`}</button>
      <button className={s.btn_home} onClick={()=> navigate('/')}>HOME</button>
    </div>
  )
}
