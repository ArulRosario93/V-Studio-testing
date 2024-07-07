import React from "react";
import "./ALittleAboutMe.css";
import Arrow from "../Arrow/Arrow";

const ALittleAboutMe = () => {
    return (
        <div className="ALittleAboutMe">
            {/* <Arrow /> */}
            <h1 className="ALittleAboutMeHead">A little about me</h1>
            <div className="ALittleAbouMeContent"><p className="ALittleAbouMeContentP">As a passionate photographer, I see the world through a lens of wonder and emotion. Every click of the shutter is a love letter to the beauty and complexity of life. I don't just take pictures; I capture the essence of moments, freezing them in time to be cherished forever. Whether it's the candid laughter of a child, the serene beauty of a landscape, or the intimate exchange between loved ones, I strive to tell a story with each photograph. My heart beats in sync with my camera, and through my lens, I celebrate the extraordinary in the ordinary.</p></div>
            <div className="ALittleAbouMeImg">
                <img className="ALittleAbouMeImgImg" src="https://www.findbanquet.com/blog/wp-content/uploads/2024/06/photographers.jpg" alt="" srcset="" />
            </div>
        </div>
    );
}

export default ALittleAboutMe;