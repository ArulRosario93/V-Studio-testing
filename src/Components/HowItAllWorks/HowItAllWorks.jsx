import React from "react";
import "./HowItAllWorks.css";
import FileInOrder from "./FileInOrder/FileInOrder";

const HowItAllWorks = () => {
    return (
        <div className="HowItAllWorksContain">
            <div className="HowItAllWorks">
                <h1 className="HowItAllWorksHead">How it all works</h1>
                <div className="HowItAllWorksImg">
                    <img className="HowItAllWorksImgImg" src="https://i.pinimg.com/736x/b4/69/2c/b4692c9ae517f977e6d8c7f03d73aa96.jpg" alt="" srcset="" />
                </div>
                <div className="HowItAllWorksContent">
                    <FileInOrder num="01" text="Contact Us: Schedule your dream photo shoot."/>
                    <FileInOrder num="02" text="Book Slot: Select your perfect date and time."/>
                    <FileInOrder num="03" text="Photo Shoot: Capture unforgettable moments."/>
                    <FileInOrder num="04" text="Receive Album: Treasure your photos in a beautiful album."/>
                </div>
            </div>
        </div>
    )
}

export default HowItAllWorks;