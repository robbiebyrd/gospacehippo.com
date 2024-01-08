import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import {getColorColor as gcc} from "../../components/common/Colors";
import SHButton from "../../components/layout/Button";
import React from "react";
import * as classNames from "classnames";
import "./SpaceIsForAll.scss";

const cn = classNames;

export default function SpaceIsForAll(props) {
    return (
        <Section
            id="SpaceIsForAll"
            color={{color: props.color, shade: props.shade}}
            gradient={props.gradient}
        >
            <SectionLayout layout={1}>
                <h1 className="color-gradient-rainbow-animated-fade-in headline">
                    Space is for all.
                </h1>
                <SectionLayout width={75} className={cn(gcc("light", "light"), "")}>
                    <h2 className="fade-in-animate-with-delay no-margin-top">
                        No small minds: we only think big.
                    </h2>
                </SectionLayout>
                <SectionLayout className={"cols"} width={75}>
                    <p
                        className={cn(
                            "fade-in-animate-with-delay-2",
                            gcc("light", "light"),
                            "shadow",
                        )}
                    >
                        We work best with clients who work well with others. That means
                        accepting everyone, regardless of age, color, disability, gender,
                        gender expression, gender identity, genetic information, national
                        origin, race, religion, sex, sexual orientation, or veteran status.
                    </p>
                    <a
                        id={"NoSpaceForHateMore"}
                        href="#NoSpaceForHate"
                        className={"fade-in-animate-with-delay-3"}
                    >
                        <SHButton
                            color={"sol"}
                            shade={"dark"}
                            shape={"rectangle"}
                            name={"MORE"}
                            blink={true}
                            larger={true}
                        />
                    </a>
                </SectionLayout>
            </SectionLayout>
        </Section>
    );
}
