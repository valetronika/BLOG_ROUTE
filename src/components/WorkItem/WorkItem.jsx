import { Link } from 'react-router-dom';
import s from './WorkItem.module.css';
import React from 'react'

export default function WorkItem(props) {

const {id,title,main_img,tags,text,year}=props

const tagsString= tags.join(', ')

  return (
    <div className={s.work__item} >
      
        <img src={main_img} alt="work" className={s.image}/>
        <div className={s.description__container}>
            <Link key={id} to={`/works/${id}`} className={s.link}>
              <h3>{title}</h3>
            </Link>
            <div className={s.info}>
                <div className={s.year}><p>{year}</p></div>
                <div className={s.tags}>{tagsString}</div>
            </div>
            <p>{text}</p>
        </div>
    </div>
  )
}
