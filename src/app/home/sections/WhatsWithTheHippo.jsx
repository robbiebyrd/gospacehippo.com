"use client";

import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import {getColorGradient} from "../../components/common/Colors";
import React from "react";
import * as classNames from "classnames";
import "./WhatsWithTheHippo.scss";

const cn = classNames;

export default function WhatsWithTheHippo(props) {
    return (
        <Section
            id="WhatsWithTheHippo"
            color={{color: props.color, shade: props.shade}}
            gradient={props.gradient}
        >
            <SectionLayout layout={13} id={"WhatsWithTheHippoText"}>
                <h2
                    className={cn(
                        "no-margin-no-padding",
                        getColorGradient("venere", "light", "venere", "light", "text"),
                    )}
                >
                    The space part I get but...
                </h2>
                <h1
                    className={cn(
                        getColorGradient("venere", "light", "neptunius", "light", "text"),
                    )}
                >
                    What&rsquo;s with the hippo?
                </h1>
                <p className="color-color-light-light">
                    Adorable and ferocious, the Hippopotamus has been the inspiration for
                    our organization since before it was founded.
                </p>
                <p className="color-color-light-light">
                    As an experiment, our mission directors met and asked themselves a
                    simple question: &ldquo;what&rsquo;s the most outrageous and
                    impossible mission we could accomplish?&rdquo; The first answer, of
                    course, was to launch a hippopotamus into space.
                </p>
                <p className="color-color-light-light">
                    If we can solve even the third item on our list, then we&rsquo;re one
                    step closer to making the impossible come true. Until then,
                    we&rsquo;ll continuing pushing the envelope of what is possible.
                </p>
            </SectionLayout>
            <SectionLayout layout={20}>
                <img className={"hippo shadow"} src="img/hippo-img-1.svg"/>
            </SectionLayout>
        </Section>
    );
}
