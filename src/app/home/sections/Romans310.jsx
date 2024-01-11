"use client";

import * as classNames from "classnames";
import React from "react";
import { getColorColor as gcc } from "../../components/common/Colors";
import Aside from "../../components/layout/Aside";
import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";

const cn = classNames;

export default function Romans310(props) {
    return (
        <Section
            id="Romans310"
            color={{ color: props.color, shade: props.shade }}
            gradient={props.gradient}
        >
            <SectionLayout layout={3}>
                <Aside
                    color={"mercurius"}
                    shade={"dark"}
                    hover={true}
                    width={50}
                    style={{ textAlign: "right" }}
                    noMargin={true}
                >
                    <h1
                        className={cn(gcc("sol", "light"), "small")}
                        style={{
                            fontFamily: "math",
                            textTransform: "none",
                            fontWeight: "bold",
                        }}
                    >
                        Καθὼς γέγραπται, Ὅτι οὐκ ἔστι δίκαιος, οὐδὲ εἷς·
                    </h1>
                    <h3
                        className={cn(
                            "small",
                            "font-italic",
                            gcc("light", "light"),
                        )}
                    >
                        <i>None is righteous; no, not one.</i>
                    </h3>
                    <p className={gcc("light", "light")}>
                        <i>— Romans 3:10</i>
                    </p>
                </Aside>
            </SectionLayout>
        </Section>
    );
}
