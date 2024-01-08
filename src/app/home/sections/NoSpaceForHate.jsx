"use client";

import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import {getColorColor as gcc} from "../../components/common/Colors";
import React from "react";
import * as classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Aside from "../../components/layout/Aside";

const cn = classNames;

export default function NoSpaceForHate(props) {
    return (
        <>
            <Section
                id="NoSpaceForHate"
                color={{color: props.color, shade: props.shade}}
                gradient={props.gradient}
            >
                <div speed={1} className="globe-background-holder">
                    <FontAwesomeIcon
                        icon="fa-solid fa-ban"
                        fontSize={"110vh"}
                        style={{backgroundClip: "text"}}
                        className={cn(gcc("mercurius", "dark"))}
                    />
                </div>
                <div
                    style={{
                        gridArea: "3/ 2 / 8 / 7",
                        zIndex: "2",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <h1 className="color-dark-dark headline">
                        No{" "}
                        <span className="color-text-gradient-dark-dark-to-medium-dark">
              space
            </span>{" "}
                        for{" "}
                        <span className="color-text-gradient-mercurius-light-to-light-light">
              hate
            </span>
                        .
                    </h1>
                    <p className="color-color-light-light extra-margin">
                        We believe that freedom of speech is core to a healthy democracy. We
                        also believe that discrimination is abhorrent and a direct threat to
                        both those principles.
                    </p>
                    <p className="body color-color-light-light extra-margin ">
                        The US Supreme Court&rsquo;s decision in{" "}
                        <i>
                            <a
                                className="color-venere-light"
                                href="https://www.supremecourt.gov/opinions/22pdf/21-476_c185.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <b>303 Creative v. Elenis</b>, U.S. (2023)
                            </a>
                        </i>
                        &nbsp;has effectively legalized discrimination, and another signal
                        of the court&rsquo;s indifference and intolerance.
                    </p>
                    <p className="body color-color-light-light extra-margin ">
                        If{" "}
                        <a
                            className="color-venere-light font"
                            href="https://303creative.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            303 Creative
                        </a>{" "}
                        is allowed to deny clients based on their convictions, then so are
                        we. We refuse to work with anyone who denies the rights or
                        diminishes the validity of any human being.
                    </p>
                </div>
            </Section>
            <Section
                id="Romans310"
                gradient={{
                    cStart: "mercurius",
                    csStart: "dark",
                    cEnd: "mercurius",
                    csEnd: "dark",
                }}
                style={{minHeight: "50vh"}}
            >
                <SectionLayout layout={3}>
                    <Aside
                        color={"mercurius"}
                        shade={"dark"}
                        hover={true}
                        width={50}
                        style={{textAlign: "right"}}
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
                        <h3 className={cn("small", "font-italic", gcc("light", "light"))}>
                            <i>None is righteous; no, not one.</i>
                        </h3>
                        <p className={gcc("light", "light")}>
                            <i>— Romans 3:10</i>
                        </p>
                    </Aside>
                </SectionLayout>
            </Section>
        </>
    );
}
