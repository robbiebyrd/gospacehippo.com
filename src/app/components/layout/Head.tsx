"use client";

import React, {useEffect} from "react";
import {ReactSVG} from "react-svg";
import "./ButtonPanel.scss";
import {getFillColor as gfc} from "../common/Colors";
import classNames from "classnames";
import "./Head.scss";

function Head() {
    const links = [
        {
            link: "/#WhatWeDo",
            title: "What we Do",
            newWindow: false,
        },
        {
            link: "/#Technologies",
            title: "Technologies",
            newWindow: false,
        },
        {
            link: "/#PastMissions",
            title: "Work",
            newWindow: false,
        },
        {
            link: "/#WhatsWithTheHippo",
            title: "About",
            newWindow: false,
        },
        {
            link: "/#Contact",
            title: "Contact",
            newWindow: false,
        },
        {
            link: "/#HippoLabs",
            title: "Labs",
            newWindow: false,
        },
    ];

    const [isOpen, setIsOpen] = React.useState(false);
    useEffect(() => {
        const handleEsc = (event: { key: string }) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };
        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);

    function openToggle() {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    return (
        <header>
            <div className="header-holder">
                <a href="/#">
                    <ReactSVG
                        src={"img/logo-small-white.svg"}
                        className={classNames(gfc("light", "light"), "shadow")}
                    ></ReactSVG>
                </a>
            </div>
            <div className="menu-holder">
                <ReactSVG
                    src={isOpen ? "img/bars.svg" : "img/globe.svg"}
                    onClick={openToggle}
                    className={classNames(gfc(isOpen ? "light" : "light", "light"))}
                ></ReactSVG>
                <div className={classNames("nav-holder", isOpen ? "" : "hidden-nav")}>
                    <nav className={classNames("color-color-dark-dark translucent")}>
                        <ul>
                            {links.map((link) => (
                                <li key={link.title}>
                                    <a href={link.link} onClick={openToggle}>
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Head;
