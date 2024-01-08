"use client";

import "./components/css/style.scss";
import "./components/css/animation.scss";
import "./globals.scss";
import Head from "./components/layout/Head";
import Main from "./components/layout/Main";
import Overlay from "./components/layout/Overlay";
import Scripts from "./components/layout/Scripts";
import Footer from "@/app/components/layout/Footer";
import React from "react";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faArrowDown, faHandWave, faShuttleSpace,} from "@fortawesome/pro-thin-svg-icons";
import {faPlaneCircleCheck} from "@fortawesome/sharp-light-svg-icons";
import {faWindowRestore} from "@fortawesome/sharp-solid-svg-icons";
import {faPlaneDeparture, faPlanetMoon,} from "@fortawesome/sharp-regular-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {
    faBan,
    faBrainCircuit,
    faBrowser,
    faCubes,
    faMobile,
    faPalette,
    faPaperPlane,
} from "@fortawesome/pro-solid-svg-icons";
import {getColorValue} from "@/app/components/common/Colors";
import Script from "next/script";

library.add(
    faHandWave,
    faBan,
    faPalette,
    faBrowser,
    faBrainCircuit,
    faMobile,
    faCubes,
    faArrowDown,
    faShuttleSpace,
    faPaperPlane,
    faGithub,
    faPlaneCircleCheck,
    faWindowRestore,
    faPlaneDeparture,
    faPlanetMoon,
);

export default function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <link rel="icon" href="/favicon.ico"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta
                name="description"
                content={"Space Hippo, an Exploration Agency"}
            />
            <link rel="apple-touch-icon" href="/logo192.png"/>
            <link rel="manifest" href="/manifest.json"/>
            <title>Space Hippo, an Exploration Agency</title>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-J4MSCH02ER"/>
            <Script src="https://cdn.pagesense.io/js/robbiebyrd/18fc44f80afb4a948d557508498b2b4d.js"></Script>
            <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    
                    gtag('config', 'G-J4MSCH02ER');
              `}
            </Script>
        </head>
        <body
            className={"color-background-gradient-dark-dark-to-light-light App"}
        >
        <meta
            name="theme-color"
            content={getColorValue({
                color: "dark",
                shade: "dark",
            })}
        />
        <meta name="color-scheme" content={"dark"}/>
        <Head/>
        <Main themeColor="dark" themeShade="dark">
            {children}
        </Main>
        <Footer></Footer>
        <Overlay/>
        <Scripts/>
        </body>
        </html>
    );
}

// import "./css/style.scss";
