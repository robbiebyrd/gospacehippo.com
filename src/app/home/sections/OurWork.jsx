"use client";

import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import {getColorColor as gcc, getColorGradient,} from "../../components/common/Colors";
import React from "react";
import * as classNames from "classnames";
import "./OurWork.scss";
import {ReactSVG} from "react-svg";

const cn = classNames;

export default function OurWork(props) {
    return (
        <Section
            id="OurWork"
            color={{color: props.color, shade: props.shade}}
            gradient={props.gradient}
        >
            <SectionLayout layout={13}>
                <h1 className={"color-color-light-light"}>
                    We{" "}
                    <span
                        className={cn(
                            "no-margin-no-padding",
                            getColorGradient("sol", "light", "mercurius", "dark", "text")
                        )}
                    >
            boost
          </span>{" "}
                    great brands
                </h1>
                <SectionLayout width={75}>
                    {/*<h2 className={cn(gcc("light", "light"), "")}>Our primary mission is*/}
                    {/*    your*/}
                    {/*    mission&rsquo;s*/}
                    {/*    success.</h2>*/}
                    <p className={gcc("light", "light")}>
                        We&rsquo;ve had the pleasure of working with some of the most
                        amazing brands in the galaxy.
                    </p>
                    <p className={gcc("light", "light")}>
                        We continue to work with them because we do some of the most amazing
                        work on earth.
                    </p>
                </SectionLayout>
            </SectionLayout>
            <SectionLayout layout={21}>
                <div style={{width: "100%", textAlign: "center"}}>
                    <a href={"#PastMissions"}>
                        <SectionLayout className={"maxq"}>
                            <ReactSVG
                                src={"img/ollie-rocket.svg"}
                                style={{width: "85%"}}
                            ></ReactSVG>
                        </SectionLayout>
                    </a>
                </div>
            </SectionLayout>
        </Section>
    );
}
