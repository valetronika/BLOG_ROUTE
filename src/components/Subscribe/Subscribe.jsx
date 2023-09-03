import s from "./Subscribe.module.css";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaGooglePlay, FaApple } from "react-icons/fa6";

export default function Subscribe() {


    let url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.590467792552!2d6.783754299999999!3d51.2266195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ca24801ca8ab%3A0xe3dfa25ab1039332!2zU2NoYWRvd3N0cmHDn2UsIETDvHNzZWxkb3Jm!5e0!3m2!1sru!2sde!4v1693741672337!5m2!1sru!2sde'
    return (
        <div className={s.subscribe_container}>
            <div className={s.map_container}>
                <p>Our address :  <span>GALERIA Düsseldorf Schadowstraße</span></p>
                <div>
                    {
                        <iframe
                            title="Map"
                            src={url}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    }

                </div>
            </div>
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
                    our <a className={s.privacy} href="#">Privacy Policy</a>
                </p>
            </form>
            <div className={s.follow_box}>
                {/* <h3>Follow us</h3> */}
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
