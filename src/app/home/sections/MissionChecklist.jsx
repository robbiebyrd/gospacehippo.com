"use client";

import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import {getColorColor as gcc} from "../../components/common/Colors";
import React from "react";
import * as classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlaneCircleCheck} from "@fortawesome/sharp-light-svg-icons";
import {faWindowRestore} from "@fortawesome/sharp-solid-svg-icons";
import {faPlaneDeparture, faPlanetMoon,} from "@fortawesome/sharp-regular-svg-icons";

const cn = classNames;

export default function MissionChecklist(props) {
    return (
        <Section
            id="MissionChecklist"
            color={{color: props.color, shade: props.shade}}
            gradient={props.gradient}
        >
            <SectionLayout layout={1}>
                <h1
                    className={cn(
                        "no-margin-no-padding",
                        "",
                        gcc("terra", "dark"),
                        "small"
                    )}
                >
                    Mission Checklist
                </h1>
                <SectionLayout width={75}>
                    <p className={cn(gcc("dark", "dark"))}>
                        Each mission is iterative, explorative and quantitive. We develop a
                        long-range mission plan, and hone each milestone as we go.
                    </p>
                    <SectionLayout columns={2}>
                        <h3 className={cn(gcc("dark", "light"), "no-margin")}>
                            <FontAwesomeIcon icon={faPlaneCircleCheck}></FontAwesomeIcon>{" "}
                            Flight Plan
                        </h3>
                        <p className={cn("small", gcc("dark", "dark"))}>
                            Each launch starts with a flight plan: a set of maneuvers and
                            miletstones that equals a successful mission. We&rsquo;ll discuss
                            metrics, budget, resources and timelines and define key markers to
                            measure success from mission begin to end.{" "}
                        </p>
                        <h3 className={cn(gcc("dark", "light"), "no-margin")}>
                            <FontAwesomeIcon icon={faWindowRestore}></FontAwesomeIcon>{" "}
                            Development
                        </h3>
                        <p className={cn("small", gcc("dark", "dark"))}>
                            Using state-of-the-art technology, we engineer outstanding
                            infrastructure and design interstellar digital experiences.
                            Adhering to agile software practices, we brainstorm and test all
                            throughout the development process.
                        </p>
                        <h3 className={cn(gcc("dark", "light"), "no-margin")}>
                            <FontAwesomeIcon icon={faPlaneDeparture}></FontAwesomeIcon> Test
                            Flights
                        </h3>
                        <p className={cn("small", gcc("dark", "dark"))}>
                            Your work is mission-critical: a failed launch has massive impact.
                            We will test every component of your mission, using automation and
                            manual testing to maintain a 100% success rate.
                        </p>
                        <h3 className={cn(gcc("dark", "light"), "no-margin")}>
                            <FontAwesomeIcon icon={faPlanetMoon}></FontAwesomeIcon> Liftoff
                        </h3>
                        <p className={cn("small", gcc("dark", "dark"))}>
                            Not only do we make sure your launch is on-time and on-target, we
                            work with you to ensure the long-term effectiveness of any
                            mission. Our goal is to ensure your project is in-flight for as
                            long as possible.
                        </p>
                    </SectionLayout>
                </SectionLayout>
            </SectionLayout>
        </Section>
    );
}
