'use client';

import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import * as classNames from "classnames";
import "./SignUpThankYou.scss";
import React, {useEffect, useState} from "react";

const cn = classNames;

export default function SignUpThankYou(props) {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (window.location.hash === "#SignUpThankYou") {
            setIsActive(true);
        }
    }, [isActive]);

    return (<>
            {isActive &&
                <Section
                    id="SignUpThankYou"
                    color={{color: props.color, shade: props.shade}}
                    gradient={props.gradient}
                >
                    <SectionLayout layout={1}>
                        <h1>Thank you for reaching out.</h1>
                        <p>We&rsquo;re starting up the satellites and will be in touch soon.</p>
                        <p className={"small"}>We promise not to spam you.</p>
                    </SectionLayout>
                </Section>
            }
        </>
    );
}
