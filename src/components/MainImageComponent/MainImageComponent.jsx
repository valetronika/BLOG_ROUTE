import s from'./MainImageComponent.module.css';
import React from 'react'
import mainImg_lower from '../../images/mainImg1.svg'
import mainImg_upper from '../../images/mainImg2.svg'

export default function MainImageComponent() {
  return (
    <div className={s.image_container}>
      <img className={s.first_img} src={mainImg_lower} alt="white round" />
      <img className={s.main_img} src={mainImg_upper} alt="фото автора" />
    </div>
  )
}
