import s from "./Subscribe.module.css";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaGooglePlay, FaApple } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Subscribe() {
    return (
        <div className={s.subscribe_container}>
            <form className={s.form}>
                <div className={s.form__description}>
                    <CiMail className={s.icon} />
                    <p>Get the latest talks</p>
                </div>
                <p>
                    Get a daily email featuring the latest talk, plus a quick
                    mix of trending content.
                </p>
                <div className={s.subscribe_panel}>
                    <input type="text" placeholder="What's your email?" />
                    <button>Subscribe</button>
                </div>
                <p>
                    By subscribing, you understand and agree that we will store,
                    process and manage your personal information according to
                    our{" "}
                    <Link className={s.privacy} to="/contact">
                        Privacy Policy
                    </Link>
                </p>
            </form>
            <div className={s.follow_box}>
                <h3>Download the App</h3>
                <div>
                    <div className={s.download_button}>
                        <FaGooglePlay className={s.icon} />
                        <div>
                            <p>Get it on</p>
                            <h4>Google Play</h4>
                        </div>
                    </div>
                    <div className={s.download_button}>
                        <FaApple className={s.icon} />
                        <div>
                            <p>Download on the</p>
                            <h4>App Store</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
