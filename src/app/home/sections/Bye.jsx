"use client";

import React from "react";
import {getColorColor as gcc} from "@/app/components/common/Colors";

import Section from "@/app/components/layout/Section";
import SectionLayout from "@/app/components/layout/SectionLayout";
import HeadlineList from "@/app/components/layout/HeadlineList";

export default function Bye(props) {
    return (
        <Section
            id="Byeeeee"
            color={{color: props.color, shade: props.shade}}
            gradient={props.gradient}
            grid={"main"}
            style={{zIndex: 100}}
        >
            <SectionLayout layout={"almost-all-2"} width={90}>
                <h2 className="color-color-dark-dark">Thanks for exploring</h2>
                <SectionLayout
                    style={{
                        display: "flex",
                        flexFlow: "row wrap",
                        zIndex: 99,
                        columnGap: "5%",
                    }}
                >
                    <SectionLayout width={45}>
                        <p className={gcc("dark", "dark")}>Our site was built using:</p>
                        <HeadlineList
                            tag={true}
                            color="light"
                            shade="dark"
                            limitBig={0}
                            invertSmaller={true}
                            items={[
                                "Next.js",
                                "React",
                                "Typescript",
                                "SASS",
                                "JSX",
                                "Javscript",
                                "Node.js",
                                "HTML",
                                "JSON",
                                "macOS",
                                " Silicon",
                            ]}
                        />
                    </SectionLayout>
                    <SectionLayout width={50}>
                        <h3 className={"no-margin-bottom"}>
                            <a
                                className={"color-color-venere-dark brand-navigation-download"}
                                href={
                                    "https://gospacehippo.com/rsrc/space-hippo-2024-brand-navigation.pdf"
                                }
                                download={true}
                            >
                                Download a copy of{" "}
                                <b>Space Hippo&rsquo;s Brand Navigation Handbook</b>.
                            </a>
                        </h3>
                        <p className={gcc("dark", "dark")}>
                            Use our Style Guide as a guide to create your own.
                        </p>
                    </SectionLayout>
                </SectionLayout>
            </SectionLayout>
        </Section>
    );
}
