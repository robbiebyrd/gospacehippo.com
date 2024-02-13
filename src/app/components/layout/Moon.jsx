"use client";

import React, {useEffect, useState} from "react";
import CrossfadeImage from "react-crossfade-image";
import "./Moon.scss";

export default function Moon(props) {
    const [currentImage, currentImageSet] = useState(1);
    const [currentPosition, currentPositionSet] = useState(0);
    const defaultSpeed = 500;
    const totalShadows = 3;
    const preloadImageBlock = 50;
    const fileExtension = "png";

    function countDigits(imgs) {
        var c = 0;
        while (imgs > 0) {
            imgs = Math.floor(imgs / 10);
            c++;
        }
        return c;
    }

    function preloadImage(img) {
        const newImg = new Image();
        newImg.src = createImageURL(img);
    }

    function createImageURL(img) {
        return props.imageDirectory +
            "/" +
            (img)
                .toString()
                .padStart(countDigits(props.imageTotal), "0") +
            "." + fileExtension;
    }

    const handleScroll = () => {
        const scrollPosition = window.scrollY; // => scroll position
        const height = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight
        );
        currentPositionSet(scrollPosition / height);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        if (props.imageTotal > preloadImageBlock && currentImage + preloadImageBlock < props.imageTotal) {
            if (currentImage === 1) {
                for (let i = 0; i < (preloadImageBlock * 2); i++) {
                    preloadImage(currentImage + i);
                }
            } else if ((currentImage % preloadImageBlock) === 0) {
                for (let i = 0; i < preloadImageBlock; i++) {
                    preloadImage(currentImage + i + preloadImageBlock);
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
                    src={createImageURL(currentImage)}
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
