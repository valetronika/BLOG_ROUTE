import s from'./MainImageComponent.module.css';
import React from 'react'

export default function MainImageComponent() {
  return (
    <div className={s.image_container}>
      <img className={s.first_img} src="/images/mainImg1.svg" alt="white round" />
      <img className={s.main_img} src="/images/mainImg2.svg" alt="фото автора" />
    </div>
  )
}
