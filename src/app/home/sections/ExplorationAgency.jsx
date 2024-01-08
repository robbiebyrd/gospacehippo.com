"use client";

import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import {getColorGradient} from "../../components/common/Colors";
import React from "react";
import * as classNames from "classnames";

const cn = classNames;

export default function ExplorationAgency(props) {
    return (
        <Section
            id="ExplorationAgency"
            color={{color: props.color, shade: props.shade}}
            gradient={props.gradient}
        >
            <SectionLayout layout={1}>
                <h1
                    className={cn(
                        "no-padding",
                        getColorGradient("light", "light", "light", "light", "text")
                    )}
                >
                    We&rsquo;re an{" "}
                    <span
                        className={cn("color-color-gradient-animated-venere-terra-light")}
                    >
            exploration
          </span>
                    &nbsp; agency.
                </h1>
                <h2 className={"pct-75 color-color-light-light"}>
                    We&rsquo;re here for
                    <br/> &rdquo;it&rsquo;s never been done.&ldquo;
                </h2>
                <p className={"pct-75 color-color-light-light"}>
                    Our team excels at creating new products and elevating existing ones.
                </p>
                <p className={"pct-75 color-color-light-light small"}>
                    We have years of experience in producing products and campaigns across
                    all kinds of business domains. We&rsquo;ve worked with everyone from
                    recoring legends to fast-food titans because we love to explore.
                </p>
                <p className={"pct-75 color-color-light-light small"}>
                    We&rsquo;re also polyglots who believe that the right technology is
                    more important than the most comfortable. We train on new languages,
                    frameworks, technologies and hardware constantly to keep our
                    flight-ready status.
                </p>
                <p className={"pct-75 color-color-light-light small"}>
                    Our unqiue blend of experience coupled with our driving curiosity
                    makes us a true Exploration Agency.
                </p>
            </SectionLayout>
        </Section>
    );
}
