"use client";

import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import { getColorColor as gcc } from "../../components/common/Colors";
import React from "react";
import * as classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBrainCircuit,
    faBrowser,
    faCubes,
    faMobile,
    faPalette,
    faStars,
} from "@fortawesome/pro-solid-svg-icons";
import "./WhatWeDo.scss";

const cn = classNames;

export default function WhatWeDo(props) {
    return (
        <Section
            id="WhatWeDo"
            color={{ color: props.color, shade: props.shade }}
            gradient={props.gradient}
        >
            <SectionLayout layout={1}>
                <h1 className={cn("no-margin", gcc("light", "light"))}>
                    We do
                </h1>
                <h1
                    className={
                        "color-color-gradient-animated-sol-venere-light headline no-margin"
                    }
                >
                    amazing
                </h1>
                <h1
                    className={cn("no-margin", gcc("light", "light"))}
                    style={{ marginBottom: ".5em" }}
                >
                    {" "}
                    work in
                </h1>
                <ul className={"item-list col-1"} id={"work-segments"}>
                    <li className={cn(gcc("light", "light"))}>
                        <h2
                            className={"no-margin-no-padding small"}
                            style={{ marginBottom: ".5em" }}
                        >
                            <FontAwesomeIcon icon={faPalette} /> Design &
                            Branding
                        </h2>
                    </li>
                    <li className={cn(gcc("light", "light"))}>
                        <h2
                            className={"no-margin-no-padding small"}
                            style={{ marginBottom: ".5em" }}
                        >
                            <FontAwesomeIcon icon={faBrowser} /> Websites
                        </h2>
                    </li>
                    <li className={cn(gcc("light", "light"))}>
                        <h2
                            className={"no-margin-no-padding small"}
                            style={{ marginBottom: ".5em" }}
                        >
                            <FontAwesomeIcon icon={faBrainCircuit} /> Machine
                            Learning
                        </h2>
                    </li>
                    <li className={cn(gcc("light", "light"))}>
                        <h2
                            className={"no-margin-no-padding small"}
                            style={{ marginBottom: ".5em" }}
                        >
                            <FontAwesomeIcon icon={faMobile} /> Mobile Apps
                        </h2>
                    </li>
                    <li className={cn(gcc("light", "light"))}>
                        <h2
                            className={"no-margin-no-padding small"}
                            style={{ marginBottom: ".5em" }}
                        >
                            <FontAwesomeIcon icon={faCubes} /> Digital Products
                        </h2>
                    </li>
                    <li className={cn(gcc("light", "light"))}>
                        <h2
                            className={"no-margin-no-padding small"}
                            style={{ marginBottom: ".5em" }}
                        >
                            <FontAwesomeIcon icon={faStars} /> LLMs and Machine
                            Learning
                        </h2>
                    </li>
                </ul>
            </SectionLayout>
        </Section>
    );
}
