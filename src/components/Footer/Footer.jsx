import s from './Footer.module.css';
import React from 'react'

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.images}>
          <img src="/images/icon_fb.svg" alt="fb" />
          <img src="/images/icon_linkedin.svg" alt="linkedin" />
          <img src="/images/icon_twitter.svg" alt="twitter" />
          <img src="/images/icon_instagram.svg" alt="instagram" />
      </div>
      <p>Copyright ©2020 All rights reserved </p>
    </div>
  )
}
