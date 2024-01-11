import classNames from "classnames";
import React from "react";
import "../css/style.scss";
import "./Head.scss";
import { getColorColor as gcc } from "../common/Colors";
import "./HeadlineList.scss";

const HeadlineList = (props) => {
    const { color, shade, columns, items, limitBig, invertSmaller, tag } =
        props;

    function invertShade(shade) {
        if (shade === "light") {
            return "dark";
        } else if (shade === "dark") {
            return "light";
        } else {
            return shade;
        }
    }

    return (
        <ul className={"item-list col-" + columns}>
            {items.map((item, index) => (
                <>
                    <li
                        key={props.id + "-" + item + "-" + index}
                        className={classNames(
                            gcc(
                                color,
                                invertSmaller && index >= limitBig
                                    ? shade
                                    : invertShade(shade),
                            ),
                            index >= limitBig ? "smaller" : "",
                            tag ? "tag" : "",
                        )}
                    >
                        <h4>{item}</h4>
                    </li>
                    {limitBig === index + 1 && (
                        <li
                            key={props.id + "-" + item + "-spacer-" + index}
                            className={
                                limitBig === index + 1 ? "break" : "none"
                            }
                        ></li>
                    )}
                </>
            ))}
        </ul>
    );
};

export default HeadlineList;
