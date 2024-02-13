"use client";

import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import React from "react";
import * as classNames from "classnames";
import "./PardonOurStardust.scss";

const cn = classNames;

export default function PardonOurStardust(props) {
    return (
        <Section
            id="PardonOurStardust"
            color={{color: props.color, shade: props.shade}}
            gradient={props.gradient}
        >
            <SectionLayout className="stars"></SectionLayout>
            <SectionLayout layout={1} width="85">
                <h1 className={" color-color-gradient-animated-sol-terra-light"}>
                    Pardon Our Stardust
                </h1>
                <h2>Test flights in progress</h2>
                <p>
                    We believe the truly perfect plan has still yet to launch, so we
                    believe in iteration: try something, and if it&rsquo;s not
                    catastrophic, try it again.
                </p>
                <p>
                    We&rsquo;re still finalizing our flight plans, so we apologize for any
                    loose bolts.
                </p>
            </SectionLayout>
        </Section>
    );
}
