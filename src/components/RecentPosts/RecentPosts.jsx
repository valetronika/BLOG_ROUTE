import s from './RecentPosts.module.css';
import React from 'react'
import { recent_posts_data } from '../data';
import RecentPostsItem from '../RecentPostsItem/RecentPostsItem';
import { Link } from 'react-router-dom';

export default function RecentPosts() {
    let data = recent_posts_data
    console.log(data);
  return (
    <div className={` wrapper_page_home`}>
        <div className={s.posts_view}>
          <p>Recent posts</p>
          <Link to='/blog'>View all</Link>
        </div>
        <div className={s.recent_container}>{data.map(el=> <RecentPostsItem key={el.id} dataItem={el}/> )}</div>
       
    </div>
  )
}
