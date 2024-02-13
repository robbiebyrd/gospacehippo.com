"use client";

import Section from "../../components/layout/Section";
import SectionLayout from "../../components/layout/SectionLayout";
import React from "react";
import ButtonPanel from "../../components/layout/ButtonPanel";

export default function PastMissions(props) {
    return (
        <Section
            id="PastMissions"
            color={{color: props.color, shade: props.shade}}
            gradient={props.gradient}
        >
            <SectionLayout layout={"almost-all-2"}>
                <ButtonPanel
                    legend={"Previous Missions"}
                    color="medium"
                    shade="light"
                    items={[
                        {
                            name: "Whole Foods",
                            image: "/img/logos/logo-wfm.svg",
                            color: "terra",
                            shade: "dark",
                            content:
                                "<p>Whole Foods Market is more than open about the all ingredients in its products, but not everyone knows about all the ingredients it keeps out. " +
                                "That's why Whole Foods asked Space Hippo Engineers to help develop a visual campaign and web portal to help consumers and manufacturers " +
                                " better understand their ingredient standards.</p>",
                            categories: ["retail"],
                            images: [
                                "/img/past-missions/rock4.png",
                                "/img/past-missions/rock6.png",
                                "/img/past-missions/rock5.png",
                            ],
                            specialities: [
                                "Wordpress",
                                "CMS/DXP",
                                "Branding",
                                "Digital Design",
                                "The Cloud",
                            ],
                        },
                        {
                            name: "Space Hippo",
                            image: "/img/logos/logo-sh-full.svg",
                            color: "medium",
                            shade: "dark",
                            content: "<p>We don't pick favorites, but we might be our own favorite client. Space Hippo is aspirational, whimsical and futuristicly retro, a brand identity we developed from scratch.</p><p><a href='https://gospacehippo.com/rsrc/space-hippo-2024-brand-navigation.pdf'>Download a copy of Space Hippo’s Brand Navigation Handbook.</a></p>",
                            images: [
                                "/img/past-missions/shbg1.png",
                                "/img/past-missions/shbg2.png",
                                "/img/past-missions/shbg3.png",
                                "/img/past-missions/shbg4.png",
                                "/img/past-missions/shbg5.png",
                                "/img/past-missions/shbg6.png",
                                "/img/past-missions/shbg7.png",
                            ],
                            categories: ["agency"],
                            specialities: [
                                "Wordpress",
                                "CMS/DXP",
                                "Development",
                                "Digital Media",
                            ],
                        },
                        {
                            name: "Level Home",
                            image: "/img/logos/logo-level.svg",
                            color: "light",
                            shade: "dark",
                            content:
                                "<p>Staring a new enterprise is hard; relaunching an existing one is even harder. After acquiring a new divison, Level Home was ready to go from providing secuirty to homeowners to securing large apartment complexes for millions of residents.</p>",
                            categories: ["iot"],
                            images: [],
                            specialities: ["Development", "The Cloud", "Internet of Things"],
                        },
                        {
                            name: "Shawn Mendes",
                            image: "/img/logos/logo-shawn-mendes.svg",
                            color: "venere",
                            shade: "dark",
                            content: "<p>Coming Soon...</p>",
                            images: [],
                            categories: ["entertainment"],
                            specialities: [
                                "Development",
                                "WordPress",
                                "Martech",
                                "The Cloud",
                                "CMS/DXP",
                            ],
                        },
                        {
                            name: "Hallmark",
                            color: "neptunius",
                            shade: "dark",
                            content: "<p>Coming Soon...</p>",
                            images: [],
                            image: "/img/logos/logo-hallmark.svg",
                            categories: ["ecommerce"],
                            specialities: [
                                "Development",
                                "Digital Media",
                                "Martech",
                                "The Cloud",
                                "CMS/DXP",
                            ],
                        },
                        {
                            name: "Nexstar",
                            image: "/img/logos/logo-nexstar.svg",
                            color: "mercurius",
                            shade: "dark",
                            content: "<p>Coming Soon...</p>",
                            images: [],
                            categories: ["media"],
                            specialities: [
                                "Development",
                                "Wordpress",
                                "Digital Media",
                                "Martech",
                                "The Cloud",
                            ],
                        },
                        {
                            name: "Taco Bell",
                            color: "medium",
                            shade: "dark",
                            image: "/img/logos/logo-taco-bell.svg",
                            content: "<p>Coming Soon...</p>",
                            images: [],
                            categories: ["ecommerce"],
                            specialities: ["Development", "Martech", "The Cloud"],
                        },
                        {
                            name: "Texas Lottery",
                            image: "/img/logos/logo-texas-lottery.svg",
                            color: "sol",
                            shade: "dark",
                            content: "<p>Coming Soon...</p>",
                            images: [
                                "/img/past-missions/txbingo1.png",
                                "/img/past-missions/txbingo2.png",
                                "/img/past-missions/txbingo3.png",
                                "/img/past-missions/txbingo4.png",
                            ],
                            categories: ["entertainment"],
                            specialities: ["CMS/DXP", "Branding", "Digital Design"],
                        },
                        {
                            name: "Vitalant",
                            color: "medium",
                            shade: "light",
                            image: "/img/logos/logo-vitalant.svg",
                            content: "Coming soon...",
                            images: [],
                            categories: ["non-profit", "healthcare"],
                            specialities: [
                                "MarTech",
                                "Branding",
                                "Digital Design",
                                "Digital Media",
                            ],
                        },
                        {
                            name: "Keeping History",
                            color: "light",
                            shade: "dark",
                            image: "/img/logos/logo-kh.svg",
                            content: "<p>Keeping History is an OSS initiative to preserve, categorize and analyze history through multimedia. Keeping History is developing a state-of-the-art system to help researchers archive digital media, and utilize machine learning to gain new insights into their archives. Space Hippo Engineers are active in this project.</p>",
                            images: [
                                "/img/past-missions/kh.png"
                            ],
                            categories: ["non-profit"],
                            specialities: [
                                "MarTech",
                                "Branding",
                                "Digital Design",
                                "Digital Media",
                            ],
                        },
                    ]}
                />
            </SectionLayout>
        </Section>
    );
}
