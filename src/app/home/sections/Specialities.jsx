"use client";

import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import {getColorColor as gcc} from "../../components/common/Colors";
import React from "react";
import * as classNames from "classnames";
import Flip from "../../components/layout/Flip";

const cn = classNames;

export default function Specialities(props) {
    return (
        <Section
            id="Specialities"
            color={{color: props.color, shade: props.shade}}
            gradient={props.gradient}
        >
            <SectionLayout layout={5}>
                <h2 className={cn(gcc("light", "light"), "no-margin")}>
                    We specialize in
                </h2>
            </SectionLayout>
            <SectionLayout layout={7}>
                <Flip
                    id="expertise"
                    color={{color: "light", shade: "light"}}
                    delay={5000}
                    speed={0.1}
                    items={[
                        "Machine Learning",
                        "Custom Integrations",
                        "Design Systems",
                        "Digital Media",
                        "Cloud_Lifts",
                        "Software Development",
                        "MarTech Solutions",
                        "CMS/DXP",
                        "UI/UX",
                        "Internet of_Things",
                    ]}
                />
            </SectionLayout>
        </Section>
    );
}
