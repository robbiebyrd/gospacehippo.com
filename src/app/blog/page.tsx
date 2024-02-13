import Section from "../components/layout/Section";
import SectionLayout from "../components/layout/SectionLayout";
import {getColorColor as gcc} from "@/app/components/common/Colors";
import classNames from "classnames";

export default function Home() {
    return (
        <main id={"mainer"}>
            <Section id="SpaceIsForAll" gradient={{
                cStart: "dark",
                csStart: "dark",
                cEnd: "dark",
                csEnd: "light",
                gradientType: "background"
            }} grid="open">
                <SectionLayout layout={1}>
                    <h1 className={classNames(gcc("light", "light"))}>Blog</h1>
                    <h2 className={classNames(gcc("light", "light"))}>Title</h2>
                    <p className={classNames(gcc("light", "light"))}>Lorem ipsum</p>
                </SectionLayout>
            </Section>
        </main>
    )
}
