import s from './Work.module.css';
import React from 'react'
import {work_data} from '../../components/data'
import WorkItem from '../../components/WorkItem/WorkItem';


export default function Work() {
  return (
    <div className={`${s.work__container} `}>
      <h2>Work</h2>
      {work_data.map(el=>{
        return <WorkItem 
          key={el.id}
          id={el.id}
          title={el.title}
          full_title={el.full_title}
          main_img={el.main_img}
          tags={el.tags}
          text={el.text}
          year={el.year}
          content={el.content}
        />

      })}
    </div>
  )
}
