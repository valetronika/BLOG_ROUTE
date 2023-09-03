import s from "./BlogItem.module.css";
import React from "react";

export default function BlogItem(props) {
    let { title, date, tags, text } = props;
    let tags_string = tags.join(",");

    function formatDate(dateString) {
        const options = { year: "numeric", month: "short", day: "numeric" };
        return new Date(dateString).toLocaleDateString("en-US", options);
    }
    const formattedDate = formatDate(date);

    return (
        <div className={s.blog_item}>
            <h3>{title}</h3>
            <div className={s.blog__item_info}>
                <div className={s.blog_item_date}>{formattedDate}</div>
                <p className={s.blog__item_tags}>{tags_string}</p>
            </div>
            <p className={s.blog_text}>{text}</p>
        </div>
    );
}
