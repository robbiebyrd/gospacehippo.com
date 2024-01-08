import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import {getColorColor as gcc} from "../../components/common/Colors";
import React from "react";
import FlyingWordCloud from "@/app/components/layout/FlyingWordCloud";
import "./LanguagesWeveUsed.scss";

async function getData() {
    const res = await fetch("http://10.10.0.56:5984/spacehippo/home");
    return res.json();
}

export default async function LanguagesWeveUsed(props) {
    const data = await getData();

    const languages = data["content"]["languages"];

    return (
        <Section
            id="LanguagesWeveUsed"
            color={{color: props.color, shade: props.shade}}
            gradient={props.gradient}
        >
            <SectionLayout layout={22}>
                <h3 className={gcc("light", "light")}>
                    40+ (and counting) programming languages we&rsquo;ve used in
                    production environments:
                </h3>
            </SectionLayout>
            <SectionLayout layout={"almost-all-3"}>
                <div id={"wordcloud-contain"}>
                    <FlyingWordCloud
                        color={"sol"}
                        shade={"light"}
                        items={languages}
                    ></FlyingWordCloud>
                </div>
            </SectionLayout>
        </Section>
    );
}
