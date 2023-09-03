import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { FiChevronsUp } from "react-icons/fi";

export default function Header() {
    const menu = ["Home", "Blog", "Works", "Contact"];
    const [activeToggle, setActiveToggle] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleAction = () => {
        if (window.innerWidth <= 768) {
            setActiveToggle(!activeToggle);
            setIsMenuOpen(!isMenuOpen);
        }
    };

    const navClassName = activeToggle ? `${s.nav} ${s.activeToggleNav}` : s.nav;

    const setActiveLink = ({ isActive }) => {
        return !isActive ? s.nav__menu : `${s.nav__menu_active} ${s.nav__menu}`;
    };

    return (
        <div className={s.header_wrapper}>
            <nav className={navClassName}>
                <a href="https://github.com/valetronika/BLOG_ROUTE">{`github.com <<<`}</a>
                <ul
                    className={activeToggle ? s.activeToggle : s.inactiveToggle}
                >
                    {menu.map((elem, ind) => {
                        return (
                            <li key={ind}>
                                <NavLink
                                    to={
                                        ind === 0
                                            ? "/"
                                            : `/${elem}`.toLowerCase()
                                    }
                                    className={setActiveLink}
                                    onClick={toggleAction}
                                >
                                    {elem}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                <div className={s.toggle} onClick={toggleAction}>
                    <Hamburger toggled={isMenuOpen} />
                </div>
                <FiChevronsUp className={s.goUp} />
            </nav>
        </div>
    );
}
