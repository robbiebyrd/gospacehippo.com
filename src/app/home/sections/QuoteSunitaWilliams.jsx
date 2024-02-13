"use client";

import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import {getColorColor as gcc} from "../../components/common/Colors";
import React from "react";
import * as classNames from "classnames";
import "./QuoteSunitaWilliams.scss";

const cn = classNames;

export default function QuoteSunitaWilliams(props) {
    return (
        <Section
            id="QuoteSunitaWilliams"
            color={{color: props.color, shade: props.shade}}
            gradient={props.gradient}
        >
            <SectionLayout layout={8}>
                <aside className={cn(gcc("medium", "dark"), "translucent", "contrast")}>
                    <blockquote className={cn(gcc("light", "light"), "shadow")}>
                        <p className="large">
                            &ldquo;Don&rsquo;t get bogged down by the notion of limits; there
                            aren&rsquo;t any.&rdquo;
                        </p>
                        <footer className={gcc("medium", "light")}>
                            —Capt. Sunita Williams
                        </footer>
                    </blockquote>
                    <img src={"img/sunita_williams.png"}/>
                </aside>
            </SectionLayout>
        </Section>
    );
}
