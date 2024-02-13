import React from "react";
import "./Button.scss";
import classNames from "classnames";
import {getColorColor as gcc} from "../common/Colors";

export default function SHButton(props: any) {
    return (
        <button
            type={props.type || "button"}
            id={props.id}
            className={classNames(
                gcc(props.color, props.shade),
                props.shape,
                props.className,
                props.larger ? "larger" : "",
            )}
            key={props.name.toLowerCase().split(" ").join("_") + "-button"}
            onClick={props.onClick}
            style={props.style}
        >
            <p className={props.blink ? "blink" : ""}>{props.name}</p>
        </button>
    );
}
