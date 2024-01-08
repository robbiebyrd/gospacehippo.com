"use client";

import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import {getColorColor as gcc, getFillColor as gfc,} from "../../components/common/Colors";
import React from "react";
import * as classNames from "classnames";
import SHLogo from "../../../../public/img/logos/logo-sh-full.svg";

const cn = classNames;

export default function WeAreSpaceHippoAgain(props) {
    return (
        <Section
            id="WeAreSpaceHippoAgain"
            color={{color: props.color, shade: props.shade}}
            gradient={props.gradient}
        >
            <div className={"image-background-clouds"}></div>
            <SectionLayout layout={1} width="85">
                <h2
                    className={[
                        gcc("light", "light"),
                        "no-margin-no-padding",
                        "font-shadow",
                    ].join(" ")}
                >
                    We are&nbsp;
                </h2>
                <SHLogo
                    id={"logo-big"}
                    style={{marginTop: "1em"}}
                    desc="Space Hippo Logo"
                    className={cn(gfc("light", "light"), "shadow", "no-header")}
                />
            </SectionLayout>
        </Section>
    );
}
