import Button from "../Button/Button";
import MainImageComponent from "../MainImageComponent/MainImageComponent";
import s from "./HelloComponent.module.css";
import React from "react";

export default function HelloComponent() {
    return (
        <div className={`${s.hello_container} wrapper_page_home`}>
            <div className={s.left_side}>
                <h1>Hi, I am John, Creative Technologist</h1>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <Button btnName='Download Resume'/>
            </div>
            <MainImageComponent/>
        </div>
    );
}
