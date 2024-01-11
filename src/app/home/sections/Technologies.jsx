"use client";

import * as classNames from "classnames";
import React from "react";
import { getColorColor as gcc } from "../../components/common/Colors";
import SHButton from "../../components/layout/Button";
import HeadlineList from "../../components/layout/HeadlineList";
import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import "./Technologies.scss";

const cn = classNames;

export default function Technologies(props) {
    return (
        <>
            <Section
                id="Technologies"
                color={{ color: props.color, shade: props.shade }}
                gradient={props.gradient}
            >
                <SectionLayout layout={1}>
                    <h2
                        className={cn(
                            gcc("dark", "light"),
                            "no-padding",
                            "font-medium",
                            "small",
                        )}
                    >
                        We love working with
                    </h2>
                    <ul className={"topics"}>
                        <li key={"programming-languages-header"}>
                            <h2
                                className={cn(
                                    gcc("dark", "light"),
                                    "no-padding",
                                    "smaller",
                                    "font-medium",
                                )}
                            >
                                Programming Languages
                            </h2>
                        </li>
                        <li key={"programming-languages"}>
                            <HeadlineList
                                id={"programming-languages-list"}
                                tag={true}
                                color="terra"
                                shade="light"
                                limitBig={3}
                                invertSmaller={true}
                                items={[
                                    "Python",
                                    "Go(lang)",
                                    "Typescript",
                                    "PHP",
                                    "Rust",
                                    "C#",
                                    "HTML/CSS",
                                    "SQL",
                                    "C",
                                    "Perl",
                                    "Ruby",
                                    "Scala",
                                ]}
                            />
                        </li>
                    </ul>
                    <ul className={"topics"}>
                        <li key={"frameworks-header"}>
                            <h2
                                className={cn(
                                    gcc("dark", "light"),
                                    "no-padding",
                                    "smaller",
                                    "font-medium",
                                )}
                            >
                                Frameworks
                            </h2>
                        </li>
                        <li key={"frameworks"}>
                            <HeadlineList
                                id={"frameworks-list"}
                                tag={true}
                                color="sol"
                                shade="dark"
                                limitBig={3}
                                invertSmaller={true}
                                items={[
                                    "React",
                                    "Django",
                                    "WordPress",
                                    "GraphQL",
                                    "Drupal",
                                    "Headless CMS",
                                    "Next.JS",
                                    "Gatsby",
                                ]}
                            />
                        </li>
                    </ul>
                    <ul className={"topics"}>
                        <li key={"technologies-header"}>
                            <h2
                                className={cn(
                                    gcc("dark", "light"),
                                    "no-padding",
                                    "smaller",
                                    "font-medium",
                                    "pct-35",
                                )}
                            >
                                Technologies
                            </h2>
                        </li>
                        <li key={"technologies"}>
                            <HeadlineList
                                id={"technologies-list"}
                                tag={true}
                                color="neptunius"
                                shade="dark"
                                limitBig={3}
                                invertSmaller={true}
                                items={[
                                    "IoT",
                                    "Kubernetes",
                                    "Google Cloud",
                                    "AWS",
                                    "Azure",
                                    "Docker",
                                    "Serverless",
                                    "CI/CD",
                                    "Machine Learning",
                                    "Blockchain",
                                    "Kafka",
                                    "Storybook",
                                ]}
                            />
                        </li>
                    </ul>
                    <div
                        style={{
                            width: "100%",
                            textAlign: "center",
                            margin: "35% 0",
                        }}
                    >
                        <a
                            id={"ExplorationAgencyAndMore"}
                            href={"/#ExplorationAgency"}
                            className={cn(gcc("light", "light"))}
                        >
                            <SHButton
                                blink={true}
                                color={"venere"}
                                shade={"dark"}
                                shape={"rectangle"}
                                larger={true}
                                name={"AND MORE"}
                            />
                        </a>
                    </div>
                </SectionLayout>
            </Section>
        </>
    );
}
