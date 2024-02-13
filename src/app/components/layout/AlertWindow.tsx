"use client";

import classNames from "classnames";
import {getColorColor as gcc} from "../common/Colors";
import React, {useEffect} from "react";
import './ButtonPanel.scss';

export default function AlertWindow(props: {
    name: string;
    color: string;
    shade: string;
    alwaysOpen: boolean;
    children: any;
}) {
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

    // name, color, shade
    return (
        <div
            id={props.name.toLowerCase().split(" ").join("_") + "-window"}
            className={classNames(
                "popup",
                isOpen || props.alwaysOpen ? "is-open" : "is-closed"
            )}
        >
            <div className={classNames("alert", gcc(props.color, props.shade))}>
                <div className="corner"/>
                <div className="close x" onClick={() => setIsOpen(false)}/>
                <div className="content">{props.children}</div>
            </div>
        </div>
    );
}
