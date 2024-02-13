"use client";

import React, {useEffect, useState} from "react";
import classNames from "classnames";
import {getColorColor as gcc} from "../common/Colors";
import typography from "../css/typography.scss";

import "./ArmedButton.scss";

function ArmedButton(props: {
    title: string;
    color: string;
    shade: string;
    children: any;
}) {
    const [isLaunched, setIsLaunched] = useState(false);
    const [tPlus, setTPlus] = useState(0);
    const [isOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        if (isLaunched) {
            setTimeout(() => {
                setTPlus(tPlus + 1);
            }, 1000);
        }
        const handleEsc = (event: { key: string }) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };
        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isLaunched, tPlus, isOpen]);

    function setLaunch() {
        if (isLaunched) {
            setIsLaunched(false);
        } else {
            setIsLaunched(true);
            setTimeout(() => {
                setIsOpen(true);
            }, 1000);
        }
    }

    function pad(val: number) {
        return val > 9 ? val : "0" + val;
    }

    return (
        <>
            <svg
                className="launch-button-armed"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 132 200"
                style={{zIndex: 90}}
                onClick={setLaunch}
            >
                <g transform="translate(-157-483)">
                    <path
                        id="button-outline"
                        d="M285,487v-4h-128v196h4v4h128v-196Z"
                        style={
                            isLaunched
                                ? {
                                    animation:
                                        ".75s animation-outline 100ms linear 1 normal forwards",
                                }
                                : {}
                        }
                    />
                    <path
                        id="button-fill"
                        d="M4,4h124v192h-124Z"
                        transform="translate(157 483)"
                        style={
                            isLaunched
                                ? {
                                    animation:
                                        ".75s animation-fill 100ms linear 1 normal forwards",
                                }
                                : {}
                        }
                    />
                    <g
                        id="toggler"
                        transform="translate(223,641.5)"
                        style={
                            isLaunched
                                ? {animation: "2s animation-toggle linear 1 normal forwards"}
                                : {}
                        }
                    >
                        <path
                            d="M161,604h124v75h-124Z"
                            transform="translate(-223,-641.5)"
                        />
                    </g>
                </g>
                <text
                    id="timer"
                    fontFamily={typography.monoFont}
                    fontSize="35.1"
                    x="50%"
                    y="25%"
                    textAnchor="middle"
                    opacity="0"
                    style={
                        isLaunched
                            ? {
                                animation:
                                    "1.5s animation_timer 500ms linear 1 normal forwards",
                            }
                            : {}
                    }
                >
                    <tspan id="timer-text">
                        T+{pad(parseInt(String(tPlus / 60))) + ":" + pad((tPlus + 1) % 60)}
                    </tspan>
                </text>
                <text
                    id="cta"
                    fontFamily={typography.monoFont}
                    fontSize="35.1"
                    x="50%"
                    y="85%"
                    opacity="1"
                    textAnchor="middle"
                    style={
                        isLaunched
                            ? {animation: ".25s animation_cta linear 1 normal forwards"}
                            : {}
                    }
                >
                    <tspan id="cta-text">{tPlus === 0 ? props.title : "RESUME"}</tspan>
                </text>
            </svg>
            <div
                id={props.title.toLowerCase().split(" ").join("_") + "-window"}
                className={classNames("shadowy", isOpen ? "is-open" : "is-closed")}
            >
                <div
                    className={classNames(
                        "popup",
                        "floating",
                        gcc(props.color, props.shade)
                    )}
                >
                    <div className="corner"/>
                    <div className="close x" onClick={() => setIsOpen(false)}/>
                    <div className="content">{props.children}</div>
                </div>
            </div>
        </>
    );
}

export default ArmedButton;
