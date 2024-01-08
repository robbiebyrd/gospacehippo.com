"use client";

import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import {getColorColor as gcc, getFillColor as gfc,} from "../../components/common/Colors";
import React from "react";
import * as classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SHLogo from "../../../../public/img/logos/logo-sh-full.svg";
import {faHandWave} from "@fortawesome/pro-thin-svg-icons";

const cn = classNames;

export default function Hello(props) {
    return (
        <Section
            id="Hello"
            color={{color: props.color, shade: props.shade}}
            gradient={props.gradient}
        >
            <SectionLayout layout={1} width="85">
                <h2
                    className={[
                        gcc("light", "light"),
                        "no-margin-no-padding",
                        "font-shadow",
                    ].join(" ")}
                >
                    <FontAwesomeIcon icon={faHandWave}/>
                    &nbsp;We are&nbsp;
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
