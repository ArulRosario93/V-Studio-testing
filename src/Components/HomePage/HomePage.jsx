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

    window.addEventListener('scroll', function() {
        const line = document.querySelector('.animated-line');
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / documentHeight) * 100;
      
        line.style.transform = `translateY(${scrollPercentage}%)`;
      });

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