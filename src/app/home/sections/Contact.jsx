"use client";

import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import {getColorColor as gcc} from "../../components/common/Colors";
import React from "react";
import SHButton from "../../components/layout/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ArmedButton from "../../components/layout/ArmedButton";

export default function Contact(props) {
    return (
        <Section
            id="Contact"
            color={{color: props.color, shade: props.shade}}
            gradient={props.gradient}
        >
            <SectionLayout layout={18}>
                <h1 className={gcc("light", "light")} style={{zIndex: 10}}>
                    Your mission, awaiting liftoff.
                </h1>
                <p className={gcc("light", "light")} style={{zIndex: 10}}>
                    If you never press the launch button, you’ll never know how high you
                    can go.
                </p>
                <p className={gcc("light", "light")} style={{zIndex: 10}}>
                    <a href={"mailto:comms@gospacehippo.com"}>
                        <FontAwesomeIcon
                            icon="fa-solid fa-paper-plane"
                            fontSize={".75em"}
                        />{" "}
                        comms@gospacehippo.com
                    </a>
                </p>
            </SectionLayout>
            <SectionLayout layout={12}>
                <ArmedButton title={"LAUNCH"} color={"dark"} shade={"dark"}>
                    <form
                        action='https://forms.zohopublic.com/robbiebyrd/form/home/formperma/9nhM2EPjn2AgRtDsT7LxNMia0POd9QW0AYc2BCK5ZMc/htmlRecords/submit'
                        name='form' id='form' method='POST' accept-charset='UTF-8' encType='multipart/form-data'>
                        <input type="hidden" name="zf_redirect_url" value="https://gospacehippo.com/#SignUpThankYou"/>
                        <input type="hidden" name="zc_gad" value=""/>
                        <fieldset className="color-color-medium-light">
                            <legend className={gcc("medium", "light")}>
                                Priority Message
                            </legend>
                            <ul>
                                <li style={{display: "flex", flexFlow: "row nowrap"}}>
                                    <label className="light font-mono">Name</label>
                                    <input
                                        name="SingleLine"
                                        fieldType="1"
                                        type="text"
                                        className="venere"
                                        placeholder="Ollie Hippo"
                                    />
                                </li>
                                <li style={{display: "flex", flexFlow: "row nowrap"}}>
                                    <label className="light font-mono">Email</label>
                                    <input
                                        fieldType={"9"}
                                        name={"Email"}
                                        type="email"
                                        className="venere"
                                        placeholder="blastoff@gospacehippo.com"
                                    />
                                </li>
                                <li style={{display: "flex", flexFlow: "row nowrap"}}>
                                    <label className="light font-mono">Message</label>
                                    <textarea name="MultiLine" className="venere" maxLength="65535"></textarea>
                                </li>
                                <li></li>
                                <SHButton
                                    type={"submit"}
                                    color={"terra"}
                                    shade={"dark"}
                                    shape={"rectangle"}
                                    name={"SEND"}
                                />
                                <SHButton
                                    type={"reset"}
                                    color={"mercurius"}
                                    shade={"dark"}
                                    shape={"rectangle"}
                                    name={"ABORT"}
                                    className={"close"}
                                />
                            </ul>
                        </fieldset>
                    </form>
                </ArmedButton>
            </SectionLayout>
        </Section>
    );
}
