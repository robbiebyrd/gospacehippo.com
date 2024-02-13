"use client";

import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import {getColorGradient} from "../../components/common/Colors";
import React from "react";
import * as classNames from "classnames";
import Aside from "../../components/layout/Aside";
import "./MissionObjectives.scss";

const cn = classNames;

export default function MissionObjectives(props) {
    return (
        <Section
            id="MissionObjectives"
            color={{color: props.color, shade: props.shade}}
            gradient={props.gradient}
        >
            <SectionLayout layout={9}>
                <Aside
                    className={"objectives-aside transparent contrast"}
                    color={"venere"}
                    shade={"dark"}
                    width={100}
                >
                    <div className={"aside-text"}>
                        <h1
                            className={cn(
                                getColorGradient("light", "light", "light", "light", "text"),
                                "small",
                                "font-mono",
                            )}
                        >
                            Mission Objectives
                        </h1>
                        <h3>
                            We&rsquo;re a boutique digital design and marketing agency using
                            beautiful visuals and custom-built technology to help marketers and
                            technologists reach new heights.
                        </h3>

                        <p>
                            For over 20 years, our experts have been planning and engineering
                            successful digital product launches, for businesses from small to
                            large.
                        </p>
                        <p>
                            We merge the most engaging visuals with the most sophisticated
                            technology to create out-of-this-world products.
                        </p>
                    </div>
                    <div className={"aside-pic"}>
                        <img src={"img/hippo-fierce.png"} style={{}}/>
                    </div>
                </Aside>
            </SectionLayout>
        </Section>
    );
}
