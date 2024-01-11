"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as classNames from "classnames";
import React from "react";
import { getColorColor as gcc } from "../../components/common/Colors";
import Aside from "../../components/layout/Aside";
import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";

const cn = classNames;

export default function HippoLabs(props) {
    return (
        <Section
            id="HippoLabs"
            color={{ color: props.color, shade: props.shade }}
            gradient={props.gradient}
            className={"translucent"}
        >
            <SectionLayout layout={1}>
                <h1
                    className={cn(
                        "no-padding",
                        "color-color-gradient-animated-light-sol-light",
                    )}
                >
                    HippoLabs
                </h1>
                <p className={cn(gcc("light", "light"))}>
                    We believe Open Source Software is crucial to proper
                    exploration. Whenever possible, we try and give back to the
                    OSS community.
                </p>
                <p className={cn(gcc("light", "light"))}>
                    Here&rsquo;s what we&rsquo;re working on in the lab.
                </p>
                <div style={{ display: "flex", flexFlow: "row wrap" }}>
                    <Aside
                        name={"hippolabs-stirling"}
                        color={"sol"}
                        shade={"light"}
                        hover={true}
                        width={40}
                        style={{ float: "left" }}
                        noMargin={true}
                        className={"translucent"}
                    >
                        <a
                            href="https://github.com/keeping-history/stirling"
                            className={"HippoLabsExperimentLink"}
                            target={"_blank"}
                        >
                            <h3>Stirling Engine</h3>
                            <p>
                                A tool to help archivists and historians easily
                                process large amounts of audio and video
                                content.
                            </p>
                            <FontAwesomeIcon icon="fa-brands fa-github" />
                        </a>
                    </Aside>
                    <Aside
                        name={"hippolabs-platinum"}
                        color={"sol"}
                        shade={"light"}
                        hover={true}
                        width={40}
                        style={{ float: "left" }}
                        noMargin={true}
                        className={"translucent"}
                    >
                        <a
                            href="https://github.com/robbiebyrd/platinum"
                            target={"_blank"}
                        >
                            <h3>Platinum</h3>
                            <p>A re-make of the MacOS Classic 8 interface.</p>
                            <FontAwesomeIcon icon="fa-brands fa-github" />
                        </a>
                    </Aside>
                    <Aside
                        name={"hippolabs-911rt"}
                        color={"sol"}
                        shade={"light"}
                        hover={true}
                        width={40}
                        style={{ float: "left" }}
                        noMargin={true}
                        className={"translucent"}
                    >
                        <a href="https://911realtime.org" target={"_blank"}>
                            <h3>9/11 Realtime</h3>
                            <p>
                                The popular 9/11 Realtime Experience was created
                                by Space Hippo Engineers.
                            </p>
                            <FontAwesomeIcon icon="fa-brands fa-github" />
                        </a>
                    </Aside>
                    <Aside
                        name={"hippolabs-orb"}
                        color={"sol"}
                        shade={"light"}
                        hover={true}
                        width={40}
                        style={{ float: "left" }}
                        noMargin={true}
                        className={"translucent"}
                    >
                        <h3>The Orb</h3>
                        <p>
                            A popular halloween decor piece is now proving to be
                            a successful year-round holiday show piece.
                        </p>
                        <p>
                            <b>Coming Soon</b>
                        </p>
                    </Aside>
                </div>
            </SectionLayout>
        </Section>
    );
}
