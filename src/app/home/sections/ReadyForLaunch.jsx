"use client";

import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import {getColorColor as gcc} from "../../components/common/Colors";
import React from "react";
import * as classNames from "classnames";
import "./ReadyForLaunch.scss";

const cn = classNames;

export default function ReadyForLaunch(props) {
    return (
        <Section
            id="ReadyForLaunch"
            color={{color: props.color, shade: props.shade}}
            gradient={props.gradient}
        >
            <SectionLayout layout={13}>
                <h1
                    className={cn(
                        "no-margin-no-padding",
                        "color-color-gradient-animated-terra-dark-dark"
                    )}
                >
                    Ready for launch
                </h1>
                <h2 className={cn(gcc("dark", "light"))}>
                    Our primary mission is your mission&rsquo;s success.
                </h2>
                <p className={gcc("dark", "dark")}>
                    Mission-critical means moving forward, sticking to the launch schedule
                    and working the plan from start to finish: looking upward and thinking
                    forward.
                </p>
                <p className={gcc("dark", "dark")}>
                    Our custom approach to mission planning, along with careful and
                    consistent delivery, will lift your project into the stratosphere.
                </p>
            </SectionLayout>
        </Section>
    );
}
