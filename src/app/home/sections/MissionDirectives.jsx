"use client";

import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import {getColorColor as gcc} from "../../components/common/Colors";
import React from "react";
import * as classNames from "classnames";

const cn = classNames;

export default function MissionDirectives(props) {
    return (
        <Section
            id="MissionDirectives"
            color={{color: props.color, shade: props.shade}}
            gradient={props.gradient}
        >
            <SectionLayout layout={"1"} width={75}>
                <h2
                    className={cn("extra-margin", "font-big", "", gcc("light", "light"))}
                >
                    We elevate digital experiences to dizzying new heights.
                </h2>
                <h2
                    className={cn("extra-margin", "font-big", "", gcc("light", "light"))}
                >
                    We aim to continually explore new and exciting technology.
                </h2>
                <h2
                    className={cn("extra-margin", "font-big", "", gcc("light", "light"))}
                >
                    We&rsquo;re powered by a desire to leave nothing unimagined or
                    unexplored.
                </h2>
                <h2
                    className={cn("extra-margin", "font-big", "", gcc("light", "light"))}
                >
                    We build interstellar tools to boost stellar brands.
                </h2>
            </SectionLayout>
        </Section>
    );
}
