import s from './RecentPostsItem.module.css';
import React from 'react'

export default function RecentPostsItem({dataItem}) {
  return (
    <div className={s.recent__item} >
        <h2>{dataItem.h2}</h2>
        <div className={s.info__item}>
            <p>{dataItem.date}</p>
            <p>{dataItem.tags.join(', ')}</p>
        </div>
        <p>{dataItem.content}</p>
    </div>
  )
}
