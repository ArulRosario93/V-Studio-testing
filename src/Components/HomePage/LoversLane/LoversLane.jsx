import React from "react";
import image from "../../../assets/LoversLane.jpg";
import "./Loverslane.css";

const LoversLane = () => {
    return (
        <div className="LoverLane">
            <img className="LoverLaneImg" src={image} alt="HeadPhotography" srcset="" />
            <div className="LoverLaneTitle"><h1 className="LoverLaneTitleHead">V</h1> <h1 className="LoverLaneTitleHead">STUDIO</h1><p className="LoverLaneTitlePara">Comibature | Chennai</p></div>
            
        </div>
    );
}

export default LoversLane;