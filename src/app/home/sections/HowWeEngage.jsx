"use client";

import {faPlanetRinged} from "@fortawesome/pro-solid-svg-icons";
import {faRocket} from "@fortawesome/pro-thin-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as classNames from "classnames";
import React from "react";
import {getColorColor as gcc} from "../../components/common/Colors";
import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import "./HowWeEngage.scss";

const cn = classNames;

export default function HowWeEngage(props) {
    return (
        <Section
            id="HowWeEngage"
            color={{color: props.color, shade: props.shade}}
            gradient={props.gradient}
        >
            <SectionLayout layout={1}>
                <SectionLayout width={70}>
                    <h1
                        className={cn(
                            gcc("terra", "light"),
                            "small"
                        )}
                    >
                        Mission Engagements
                    </h1>
                    <p className={cn(gcc("light", "light"))}>
                        Add us as lift to your current launch or project, or engage us to
                        create a long-term mission plan.
                    </p>
                </SectionLayout>
                <SectionLayout width={100}>
                    <SectionLayout className={cn("floatings")}>
                        <aside className={cn("color-color-dark-dark", "contrast")}>
                            <h3 className={cn("no-margin")}>
                                <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon> Booster
                            </h3>
                            <h4>Hourly</h4>
                            <p className={cn("", gcc("dark", "dark"))}>
                                You already have a technology team in place, or you&rsquo;re
                                looking for a one-time development project.
                            </p>
                            <p className={cn("small", gcc("dark", "dark"))}>
                                This type of mission engagement is perfect for advertising
                                campaigns, or software integrations that can run on autopilot.
                                We will create a plan, timeline and estimate before work begins,
                                and will schedule key success and payment milestones throughout
                                the project.
                            </p>
                            <ul>
                                <li>Staff Augmentation</li>
                                <li>Consulting</li>
                                <li>Greenfield Architecture</li>
                                <li>Initial Implementations</li>
                                <li>System Integrations</li>
                                <li>Campaigns</li>
                            </ul>
                        </aside>
                        <aside className={cn("color-color-medium-light", "contrast")}>
                            <h3 className={cn("no-margin")}>
                                <FontAwesomeIcon icon={faPlanetRinged}></FontAwesomeIcon>{" "}
                                Explorer
                            </h3>
                            <h4>Mission Contract + Flight Credits</h4>
                            <p>
                                You need a trusted, long-term digital partner to help you
                                navigate the vast expanse.
                            </p>
                            <p className={cn("small")}>
                                Our Explorer clients engage with us for a year or more. During
                                this time, we listen to your needs and develop a plan to help
                                you get there. We provide a full plan over the course of our
                                engagement, including timelines, deliverables and key success
                                metrics.{" "}
                            </p>
                            <p>
                                We also provide &ldquo;flight credits&rdquo; each month for the
                                new and unexpected, such as creative work or new software
                                features.
                            </p>
                            <ul>
                                <li>Visual Redesigns</li>
                                <li>Branding/Marketing</li>
                                <li>Ecommerce Solutions</li>
                                <li>Multi-stage Projects</li>
                            </ul>
                        </aside>
                    </SectionLayout>
                </SectionLayout>{" "}
            </SectionLayout>
        </Section>
    );
}
