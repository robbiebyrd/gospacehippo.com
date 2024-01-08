import React from "react";
import Marquee from "react-fast-marquee";
import * as classNames from "classnames";
import {getColorColor as gcc} from "../common/Colors";
import "./FlyingWordCloud.scss";

export default function FlyingWordCloud(props) {
    function shuffleArray(array) {
        let currentIndex = array.length,
            randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex > 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }

        return array;
    }

    const itemsShuffled = shuffleArray(props.items);
    const classSizeMaps = [
        "smaller",
        "small",
        "big",
        "bigger",
        "headline"
    ];
    return (
        <>
            {itemsShuffled.map((word, i) => (
                <Marquee
                    key={i}
                    speed={Math.floor(Math.random() * 40) + 40}
                    style={{
                        width: "100%",
                        position: "absolute",
                    }}
                    delay={Math.floor(Math.random() * 10)}
                    direction={i % 2 ? "left" : "right"}
                >
                    <h2
                        style={{
                            animationName: "faded",
                            animationDirection: "alternate",
                            animationIterationCount: "infinite",
                            animationDuration: Math.floor(Math.random() * 100) * (i % 4) + "s",
                            marginTop: "" + (Math.floor(Math.random() * 80)) + "vh",
                            marginLeft: "" + (Math.floor(Math.random() * 100)) + "vw",
                        }}
                        className={classNames(
                            String(classSizeMaps[i % 4]),
                            gcc(props.color, props.shade),
                        )}
                    >
                        {word}
                    </h2>
                </Marquee>
            ))}
        </>
    );
}
