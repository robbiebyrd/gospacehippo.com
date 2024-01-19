"use client";

import React, {useEffect, useState} from "react";
import CrossfadeImage from "react-crossfade-image";
import "./Moon.scss";

export default function Moon(props) {
    const [currentImage, currentImageSet] = useState(1);
    const [currentPosition, currentPositionSet] = useState(0);
    const defaultSpeed = 800;
    const totalShadows = 3;
    const preloadImageBlock = 50;

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
        if (props.imageTotal > preloadImageBlock && currentImage + preloadImageBlock < props.imageTotal) {

            if ((currentImage % preloadImageBlock) == 0 || currentImage == 1) {
                for (let i = 0; i < preloadImageBlock; i++) {
                    console.log("getting image " + (currentImage + i));
                    const newImg = new Image();
                    newImg.src =
                        "img/" +
                        props.imageDirectory +
                        "/" +
                        (currentImage + i)
                            .toString()
                            .padStart(countDigits(props.imageTotal), "0") +
                        ".png";
                }
            }
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
                style={{opacity: 1 - Math.sin(currentPosition)}}
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
