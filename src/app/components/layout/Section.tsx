"use client";

import React from "react";
import {processColorArgs} from "../common/Colors";
import classNames from "classnames";
import "./Section.scss";

export default function Section(props: any) {
    return (
        <section
            id={props.id}
            className={classNames(
                "layout",
                "grid-" + (props.grid || "main"),
                ...processColorArgs(props.color, props.gradient),
                props.className
            )}
        >
            {props.children}
        </section>
    );
}
