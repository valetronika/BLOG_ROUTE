import Subscribe from "../../components/Subscribe/Subscribe";
import s from "./Contacts.module.css";
import React from "react";

export default function Contacts() {
    let url =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.590467792552!2d6.783754299999999!3d51.2266195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ca24801ca8ab%3A0xe3dfa25ab1039332!2zU2NoYWRvd3N0cmHDn2UsIETDvHNzZWxkb3Jm!5e0!3m2!1sru!2sde!4v1693741672337!5m2!1sru!2sde";

    return (
        <div>
            <div className={s.map_container}>
                <p>
                    Our address : <span>GALERIA Düsseldorf Schadowstraße</span>
                </p>
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
            <Subscribe />
        </div>
    );
}
