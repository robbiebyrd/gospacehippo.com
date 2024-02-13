import React from "react";
import classNames from "classnames";
import "./SectionLayout.scss";
import {processColorArgs} from "@/app/components/common/Colors";

function SectionLayout(props: any) {
    const classes = [
        props.layout !== undefined ? "grid-layout-" + props.layout : "",
        props.width !== undefined ? "pct-" + props.width : "",
        props.columns !== undefined ? "col-" + props.columns : "",
        props.flex !== undefined ? "flex" : "",
        props.className || "",
        ...processColorArgs(props.color, props.gradient),
    ];

    // @ts-ignore
    return (
        <div id={props.id} className={classNames(classes)} style={props.style}>
            {props.children}
        </div>
    );
}

export default SectionLayout;
