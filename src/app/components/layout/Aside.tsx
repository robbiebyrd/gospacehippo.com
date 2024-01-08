'use client'

import classNames from "classnames";
import {getColorColor as gcc} from "../common/Colors";
import React from "react";
import "./Aside.scss";

const cn = classNames;

export default function Aside(props: {
    name: string,
    color: string,
    shade: string,
    noMargin: boolean,
    noPadding: boolean,
    width: number,
    hover: boolean,
    style: any,
    className: string,
    children: any
}) {

    const cns = [
        gcc(props.color || "dark", props.shade || "dark"),
        (props.noMargin ? "no-margin" : ""),
        (props.noPadding ? "no-padding" : ""),
        (props.width > 0 ? "pct-" + props.width : ""),
        (props.hover ? "hover" : ""),
        props.className
    ]

    return (
        <aside className={cn(cns)} style={props.style}>
            {props.children}
        </aside>
    )
};
