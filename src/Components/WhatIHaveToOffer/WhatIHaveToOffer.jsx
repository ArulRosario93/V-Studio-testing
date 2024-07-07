import React from "react";
import "./WhatIHaveToOffer.css";
import Arrow from "../HomePage/Arrow/Arrow";
import { Link } from "react-router-dom";
import ContainerOfferings from "./ContainerOfferings/ContainerOfferings";

const WhatIHaveToOffer = () => {
    return (
        <div className="WhatIHaveToOffer">
            {/* <Arrow /> */}
            <h2 className="WhatIHaveToOfferHead">What I have to offer</h2>
            <div className="ContainerOfferingsFlex">
                <Link to="/bookSlot"><ContainerOfferings image="https://images.herzindagi.info/image/2023/Dec/engagement-wishes-for-friend.jpg" text="Engagement" position="end"/></Link>
                <Link to="/bookSlot"><ContainerOfferings image="https://www.jennakathleen.com/wp-content/uploads/2022/06/the-saddle-room-wedding-photos-2-1500x1000.jpg" text="Weddings" position="start"/></Link>
                <Link to="/bookSlot"><ContainerOfferings image="https://5.imimg.com/data5/SELLER/Default/2022/2/LR/LS/FQ/5295475/baby-shower-photography-services.jpg" text="Baby Shower" position="end" /></Link>
            </div>
        </div>
    );
}

export default WhatIHaveToOffer;