import s from './Footer.module.css';
import React from 'react'
import fb_img from '../../images/icon_fb.svg'
import linkedin_img from '../../images/icon_linkedin.svg'
import twitter_img from '../../images/icon_twitter.svg'
import instagram_img from '../../images/icon_instagram.svg'

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.images}>
          <img src={fb_img} alt="fb" />
          <img src={linkedin_img} alt="linkedin" />
          <img src={twitter_img} alt="twitter" />
          <img src={instagram_img} alt="instagram" />
      </div>
      <p>Copyright ©2020 All rights reserved </p>
    </div>
  )
}
