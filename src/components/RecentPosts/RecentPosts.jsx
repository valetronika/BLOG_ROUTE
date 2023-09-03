import s from './RecentPosts.module.css';
import React from 'react'
import { recent_posts_data } from '../data';
import RecentPostsItem from '../RecentPostsItem/RecentPostsItem';

export default function RecentPosts() {
    let data = recent_posts_data
    console.log(data);
  return (
    <div className={` wrapper_page_home`}>
        <div className={s.posts_view}>
          <p>Recent posts</p>
          <a href="#">View all</a>
        </div>
        <div className={s.recent_container}>{data.map(el=> <RecentPostsItem key={el.id} dataItem={el}/> )}</div>
       
    </div>
  )
}
