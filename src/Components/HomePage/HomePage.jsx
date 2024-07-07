import React from "react";
import LoversLane from "./LoversLane/LoversLane";
import CaptuingThoseSpecialMoments from "./CaptureThoseSpecialMoments/CaptuingThoseSpecialMoments";
import WhatIHaveToOffer from "../WhatIHaveToOffer/WhatIHaveToOffer";
import JustALittleGap from "./JustALittleGap/JustALittlegap";
import ALittleAboutMe from "./ALittleAboutMe/ALittleAboutMe";
import HowItAllWorks from "../HowItAllWorks/HowItAllWorks";
import QuoteItPeople from "./QuoteItPeople/QuoteItPeople";
import NavBar from "../NavBar/NavBar";

const HomePage = () => {
    return (
        <div style={{position: 'relative'}}>
            <NavBar />
            <LoversLane />
            <CaptuingThoseSpecialMoments />
            <WhatIHaveToOffer />
            <JustALittleGap />
            <ALittleAboutMe />
            <HowItAllWorks />
            <QuoteItPeople />
        </div>
    );
}

export default HomePage;