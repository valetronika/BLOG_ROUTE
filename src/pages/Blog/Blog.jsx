
import React from "react";
import { blog_data } from "./../../components/data";
import BlogItem from "../../components/BlogItem/BlogItem";
import s from './Blog.module.css';


export default function Blog() {
    return (
        <div className={`wrapper_page ${s.blog_page}`}>
            <h2 className={s.title}>Blog</h2>
            {blog_data.map((el) => {
                return <BlogItem
                    key={el.id}
                    title={el.title}
                    date={el.date}
                    tags={el.tags}
                    text={el.text}
                />;
            })}
        </div>
    );
}
