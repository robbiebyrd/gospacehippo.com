"use client";

import React, {useEffect, useState} from "react";
import classNames from "classnames";
import {getColorColor as gcc} from "../common/Colors";
import "./Flip.scss";
import VisibilitySensor from "react-visibility-sensor";

function Flip(props) {
    const defaultSpeed = 0.5;
    const defaultDuration = 0.25;
    const defaultDelay = 5000;
    const startWord = 0;

    const [currentWord, currentWordSet] = useState(startWord);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let interval = setTimeout(() => {
            if (isVisible) {
                if (currentWord >= props.items.length - 1) {
                    currentWordSet(0);
                } else {
                    currentWordSet(currentWord + 1);
                }
            }
        }, props.delay || defaultDelay);

        return function () {
            clearTimeout(interval);
        };
    }, [currentWord, isVisible, props]);

    function onChange(isVisible) {
        if (currentWord >= props.items.length - 1) {
            currentWordSet(0);
        } else {
            currentWordSet(currentWord + 1);
        }
        setIsVisible(isVisible);
    }

    return (
        <VisibilitySensor onChange={onChange} id={props.id}>
            <div className="flipper" id={"holder-" + (props.id || "flip")}>
                {props.items.map((item, i) => (
                    <h1
                        key={i}
                        className={classNames(
                            "flipper-text",
                            gcc(props.color.color, props.color.shade),
                            "headline"
                        )}
                    >
                        {item.split("").map((letter, li) => (
                            <span
                                key={i + letter + li}
                                className={classNames(
                                    letter === " " ? "word-break" : "",
                                    currentWord === i ? "in" : "out"
                                )}
                                style={{
                                    transitionDelay:
                                        li *
                                        (currentWord === i ? 1 : defaultSpeed) *
                                        (props.speed || defaultSpeed) +
                                        "s",
                                    transitionDuration:
                                        (props.duration || defaultDuration) *
                                        (currentWord === i ? 2 : 1) +
                                        "s",
                                }}
                            >
                {letter === " " || letter === "_" ? "\u00a0" : letter}
              </span>
                        ))}
                    </h1>
                ))}
            </div>
        </VisibilitySensor>
    );
}

export default Flip;
