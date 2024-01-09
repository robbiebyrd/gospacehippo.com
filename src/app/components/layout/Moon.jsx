"use client";

import React, { useEffect, useState } from "react";
import CrossfadeImage from "react-crossfade-image";
import "./Moon.scss";

export default function Moon(props) {
    const [currentImage, currentImageSet] = useState(1);
    const [currentPosition, currentPositionSet] = useState(0);
    const defaultSpeed = 1000;
    const totalShadows = 3;

    function countDigits(imgs) {
        var c = 0;
        while (imgs > 0) {
            imgs = Math.floor(imgs / 10);
            c++;
        }
        return c;
    }

    const handleScroll = () => {
        const scrollPosition = window.scrollY; // => scroll position
        const height = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
        );
        currentPositionSet(scrollPosition / height);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        if (props.imageTotal > 5 && currentImage + 5 < props.imageTotal) {
            const newImg = new Image();
            newImg.src =
                "img/" +
                props.imageDirectory +
                "/" +
                (currentImage + 5)
                    .toString()
                    .padStart(countDigits(props.imageTotal), "0") +
                ".png";
        }
        setTimeout(() => {
            if (currentImage > props.imageTotal - 1) {
                currentImageSet(1);
            } else {
                currentImageSet(currentImage + 1);
            }
        }, props.speed || defaultSpeed);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [currentImage, props]);

    return (
        <div className="moon">
            <div
                className={"moon-holder"}
                style={{ opacity: 1 - Math.sin(currentPosition) }}
            >
                <CrossfadeImage
                    src={
                        "img/" +
                        props.imageDirectory +
                        "/" +
                        currentImage
                            .toString()
                            .padStart(countDigits(props.imageTotal), "0") +
                        ".png"
                    }
                    duration={props.speed || defaultSpeed}
                    containerClass={
                        "holder shadow-" +
                        (Math.floor(Math.random() * totalShadows) + 1)
                    }
                    timingFunction={"linear"}
                />
            </div>
        </div>
    );
}
