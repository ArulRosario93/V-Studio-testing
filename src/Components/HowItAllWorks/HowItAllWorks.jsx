import React from "react";
import "./HowItAllWorks.css";
import FileInOrder from "./FileInOrder/FileInOrder";
import { Fade } from "react-awesome-reveal";

const HowItAllWorks = () => {
    return (
        <div className="HowItAllWorksContain">
            <div className="HowItAllWorks">
                <h1 className="HowItAllWorksHead">How it all works</h1>
                <div className="HowItAllWorksImg">
                    <img className="HowItAllWorksImgImg" src="https://sharrongibson.co.uk/wp-content/uploads/2022/03/Danielle-and-Andrew-51-scaled.jpg" alt="" srcset="" />
                </div>
                <div className="HowItAllWorksContentContainer">
                    <Fade>
                        <div className="HowItAllWorksContent">
                            <FileInOrder num="01" text="Contact Us: Schedule your dream photo shoot."/>
                            <FileInOrder num="02" text="Book Slot: Select your perfect date and time."/>
                            <FileInOrder num="03" text="Photo Shoot: Capture unforgettable moments."/>
                            <FileInOrder num="04" text="Receive Album: Treasure your photos in a beautiful album."/>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default HowItAllWorks;