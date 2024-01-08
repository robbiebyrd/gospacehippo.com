import React from "react";

import Moon from "@/app/components/layout/Moon";
import SpaceIsForAll from "@/app/home/sections/SpaceIsForAll";
import Hello from "@/app/home/sections/Hello";
import WhatWeDo from "@/app/home/sections/WhatWeDo";
import Technologies from "@/app/home/sections/Technologies";
import MissionObjectives from "@/app/home/sections/MissionObjectives";
import Specialities from "@/app/home/sections/Specialities";
import MissionChecklist from "@/app/home/sections/MissionChecklist";
import ReadyForLaunch from "@/app/home/sections/ReadyForLaunch";
import ExplorersLog from "@/app/home/sections/ExplorersLog";
import OurWork from "@/app/home/sections/OurWork";
import PastMissions from "@/app/home/sections/PastMissions";
import WhatsWithTheHippo from "@/app/home/sections/WhatsWithTheHippo";
import QuoteSunitaWilliams from "@/app/home/sections/QuoteSunitaWilliams";
import OllieInSpace from "@/app/home/sections/OllieInSpace";
import NoSpaceForHate from "@/app/home/sections/NoSpaceForHate";
import ExplorationAgency from "@/app/home/sections/ExplorationAgency";
import LanguagesWeveUsed from "@/app/home/sections/LanguagesWeveUsed";
import HippoLabs from "@/app/home/sections/HippoLabs";
import Contact from "@/app/home/sections/Contact";
import MissionDirectives from "@/app/home/sections/MissionDirectives";
import WeAreSpaceHippoAgain from "@/app/home/sections/WeAreSpaceHippoAgain";
import Bye from "@/app/home/sections/Bye";
import HowWeEngage from "@/app/home/sections/HowWeEngage";
import PardonOurStardust from "@/app/home/sections/PardonOurStardust";

export default async function Home() {
    return (
        <>
            <Moon speed={500} imageDirectory={"moon-rotate"} imageTotal={1350}/>
            <SpaceIsForAll
                gradient={{
                    cStart: "dark",
                    csStart: "dark",
                    cEnd: "dark",
                    csEnd: "dark",
                }}
            ></SpaceIsForAll>
            <Hello
                gradient={{
                    cStart: "dark",
                    csStart: "dark",
                    cEnd: "dark",
                    csEnd: "light",
                }}
            ></Hello>
            <PardonOurStardust
                gradient={{
                    cStart: "dark",
                    csStart: "light",
                    cEnd: "dark",
                    csEnd: "light",
                }}
            ></PardonOurStardust>
            <MissionObjectives
                gradient={{
                    cStart: "dark",
                    csStart: "light",
                    cEnd: "venere",
                    csEnd: "dark",
                }}
            ></MissionObjectives>
            <WhatWeDo
                gradient={{
                    cStart: "venere",
                    csStart: "dark",
                    cEnd: "venere",
                    csEnd: "dark",
                }}
            ></WhatWeDo>
            <Specialities
                gradient={{
                    cStart: "venere",
                    csStart: "dark",
                    cEnd: "venere",
                    csEnd: "light",
                }}
            ></Specialities>
            <Technologies
                gradient={{
                    cStart: "venere",
                    csStart: "light",
                    cEnd: "terra",
                    csEnd: "light",
                }}
            ></Technologies>
            <ReadyForLaunch
                gradient={{
                    cStart: "terra",
                    csStart: "light",
                    cEnd: "terra",
                    csEnd: "light",
                }}
            ></ReadyForLaunch>
            <MissionChecklist
                gradient={{
                    cStart: "terra",
                    csStart: "light",
                    cEnd: "terra",
                    csEnd: "light",
                }}
            ></MissionChecklist>
            <ExplorersLog
                gradient={{
                    cStart: "terra",
                    csStart: "light",
                    cEnd: "terra",
                    csEnd: "dark",
                }}
            ></ExplorersLog>
            <HowWeEngage
                gradient={{
                    cStart: "terra",
                    csStart: "dark",
                    cEnd: "terra",
                    csEnd: "dark",
                }}
            ></HowWeEngage>
            <OurWork
                gradient={{
                    cStart: "terra",
                    csStart: "dark",
                    cEnd: "neptunius",
                    csEnd: "dark",
                }}
            ></OurWork>
            <PastMissions
                gradient={{
                    cStart: "neptunius",
                    csStart: "dark",
                    cEnd: "neptunius",
                    csEnd: "dark",
                }}
            ></PastMissions>
            <WhatsWithTheHippo
                gradient={{
                    cStart: "neptunius",
                    csStart: "dark",
                    cEnd: "neptunius",
                    csEnd: "dark",
                }}
            ></WhatsWithTheHippo>
            <QuoteSunitaWilliams
                gradient={{
                    cStart: "neptunius",
                    csStart: "dark",
                    cEnd: "neptunius",
                    csEnd: "light",
                }}
            ></QuoteSunitaWilliams>
            <OllieInSpace
                gradient={{
                    cStart: "neptunius",
                    csStart: "light",
                    cEnd: "mercurius",
                    csEnd: "light",
                }}
            ></OllieInSpace>
            <NoSpaceForHate
                gradient={{
                    cStart: "mercurius",
                    csStart: "light",
                    cEnd: "mercurius",
                    csEnd: "dark",
                }}
            ></NoSpaceForHate>
            <ExplorationAgency
                gradient={{
                    cStart: "mercurius",
                    csStart: "dark",
                    cEnd: "sol",
                    csEnd: "dark",
                }}
            ></ExplorationAgency>
            <LanguagesWeveUsed
                gradient={{
                    cStart: "sol",
                    csStart: "dark",
                    cEnd: "sol",
                    csEnd: "dark",
                }}
            ></LanguagesWeveUsed>
            <HippoLabs
                gradient={{
                    cStart: "sol",
                    csStart: "dark",
                    cEnd: "medium",
                    csEnd: "dark",
                }}
            ></HippoLabs>
            <Contact
                gradient={{
                    cStart: "medium",
                    csStart: "dark",
                    cEnd: "medium",
                    csEnd: "dark",
                }}
            ></Contact>
            <MissionDirectives
                gradient={{
                    cStart: "medium",
                    csStart: "dark",
                    cEnd: "medium",
                    csEnd: "dark",
                }}
            ></MissionDirectives>
            <WeAreSpaceHippoAgain
                gradient={{
                    cStart: "medium",
                    csStart: "dark",
                    cEnd: "medium",
                    csEnd: "light",
                }}
            ></WeAreSpaceHippoAgain>
            <Bye
                gradient={{
                    cStart: "medium",
                    csStart: "light",
                    cEnd: "light",
                    csEnd: "light",
                }}
            ></Bye>
        </>
    );
}
