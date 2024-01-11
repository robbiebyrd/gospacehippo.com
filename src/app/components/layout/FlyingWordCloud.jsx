import * as classNames from "classnames";
import React from "react";
import Marquee from "react-fast-marquee";
import { getColorColor as gcc } from "../common/Colors";
import "./FlyingWordCloud.scss";

export default function FlyingWordCloud(props) {
    function shuffleItems(a) {
        let c = a.length,
            r;

        while (c > 0) {
            r = Math.floor(Math.random() * c);
            c--;

            [a[c], a[r]] = [a[r], a[c]];
        }

        return a;
    }

    const itemsShuffled = shuffleItems(props.items);
    const classSizeMaps = ["smaller", "small", "big", "bigger", "headline"];

    return (
        <div id={props.id} className={props.className} style={props.style}>
            {itemsShuffled.map((word, i) => (
                <Marquee
                    key={i}
                    speed={Math.floor(Math.random() * 100) + (i % 4)}
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
                            animationDuration:
                                Math.floor(Math.random() * 100) * (i % 8) + "s",
                            marginTop:
                                "" + Math.floor(Math.random() * 80) + "vh",
                            marginLeft:
                                "" + Math.floor(Math.random() * 100) + "vw",
                        }}
                        className={classNames(
                            String(classSizeMaps[i % 5]),
                            gcc(props.color, props.shade),
                        )}
                    >
                        {word}
                    </h2>
                </Marquee>
            ))}
        </div>
    );
}
