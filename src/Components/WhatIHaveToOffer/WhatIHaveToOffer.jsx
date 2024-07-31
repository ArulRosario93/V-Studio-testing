import React from "react";
import "./WhatIHaveToOffer.css";
// import Arrow from "../HomePage/Arrow/Arrow";
import { Link } from "react-router-dom";
import ContainerOfferings from "./ContainerOfferings/ContainerOfferings";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

const WhatIHaveToOffer = () => {
    return (
        <div className="WhatIHaveToOffer">
            {/* <Arrow /> */}
            <h2 className="WhatIHaveToOfferHead">What I have to offer</h2>
            <Slide delay={1}>
                <span className="ArrowLeft">
                    <div className="ArrowContain">
                        <img className="ArrowContainImg" src="https://www.freeiconspng.com/uploads/right-arrow-png-18.png" alt="" />
                    </div>
                </span>
            </Slide>
            <div className="ContainerOfferingsFlex">
                <Fade>
                    <Link to="/bookSlot"><ContainerOfferings image="https://images.herzindagi.info/image/2023/Dec/engagement-wishes-for-friend.jpg" text="Engagement" position="end"/></Link>
                    <Link to="/bookSlot"><ContainerOfferings image="https://www.jennakathleen.com/wp-content/uploads/2022/06/the-saddle-room-wedding-photos-2-1500x1000.jpg" text="Weddings" position="start"/></Link>
                    <Link to="/bookSlot"><ContainerOfferings image="https://5.imimg.com/data5/SELLER/Default/2022/2/LR/LS/FQ/5295475/baby-shower-photography-services.jpg" text="Baby Shower" position="end" /></Link>
                </Fade>
            </div>
            <span className="ArrowRight">
                <div className="ArrowContain">
                    <img className="ArrowContainImg" src="https://www.freeiconspng.com/uploads/right-arrow-png-18.png" alt="" />
                </div>
            </span>
        </div>
    );
}

export default WhatIHaveToOffer;