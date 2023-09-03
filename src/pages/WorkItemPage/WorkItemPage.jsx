import { useParams } from "react-router-dom";
import s from "./WorkItemPage.module.css";
import React, { useEffect, useState } from "react";
import { work_data } from "../../components/data";

export default function WorkItemPage() {
    const { id } = useParams();
    const [workData, setWorkData] = useState({});
    console.log(workData);
    useEffect(() => {
        const workItem = work_data.find((el) => el.id === parseInt(id));
        if (workItem) {
            setWorkData(workItem);
        }
    }, [id]);

    return (
        <div className={s.headContent}>
            <div >
                <h2>{workData.full_title}</h2>
                <div className={s.aditionalInfoContainer}>
                    <p className={s.year}>{workData.year}</p>
                    <p className={s.tags}>{workData.tags?.join(", ")}</p>
                </div>
                <p>{workData.text}</p>
                <img src={workData.main_img} alt="main" />
            </div>
            <div className={s.mainContent}>
                {workData.content?.map((el, ind) => {
                    //в массиве индекс 0 содержит тег или "текст" а индекс 1 содержит значение
                    if (el[0] === "img") {
                        return <img src={el[1]} alt="workimg" key={ind} />;
                    } else if (el[0] === "text") {
                        return <p key={ind}>{el[1]}</p>;
                    } else {
                        const Tag = el[0];
                        return React.createElement(
                            Tag,
                            { key: ind, className: s[`style_${el[0]}`] },
                            null,
                            el[1]
                        );
                    }
                })}
            </div>
        </div>
    );
}
