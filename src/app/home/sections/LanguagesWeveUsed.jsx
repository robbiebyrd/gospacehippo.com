import FlyingWordCloud from "@/app/components/layout/FlyingWordCloud";
import React from "react";
import {getColorColor as gcc} from "../../components/common/Colors";
import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import "./LanguagesWeveUsed.scss";


export default async function LanguagesWeveUsed(props) {
    const languages = ["Elixir", "Perl", "Lua", "Bash", "TypeScript", "Lasso", "C#", "dBase", "Java", "Scala", "Visual", "Basic", "Go(lang)", "HyperTalk", "C++", "LotusScript", "Nix", "JavaScript", "TeX", "REXX", "Python", "Groovy", "T-SQL", "MOO", "Delphi", "Ruby", "BASIC", "ActionScript", "C", "Objective", "CFML", "Lingo", "Rust", "LiveCode", "Swift", "Logo", "FOXPRO", "PowerBuilder", "COBOL", "Assembly", "SQL", "Erlang", "PASCAL", "FORTRAN"];

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
                <FlyingWordCloud
                    id={"wordcloud-contain"}
                    color={"sol"}
                    shade={"light"}
                    items={languages}
                ></FlyingWordCloud>
            </SectionLayout>
        </Section>
    );
}
