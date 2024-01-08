"use client";

import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import React from "react";
import "./OllieInSpace.scss";

export default function OllieInSpace(props) {
    return (
        <Section
            id="OllieInSpace"
            color={{color: props.color, shade: props.shade}}
            gradient={props.gradient}
        >
            <SectionLayout layout={"almost-all-4"}>
                <img src={"img/ollie.svg"} id={"ollie2"} className={"ollie2"}/>
            </SectionLayout>
        </Section>
    );
}
