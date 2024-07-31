import React from "react";
import image from "../../../assets/LoversLane.jpg";
import "./Loverslane.css";

const LoversLane = () => {
    return (
        <div className="LoverLane">
            <div className="LoverLaneOverlay">

                <img className="LoverLaneImg" src={image} alt="HeadPhotography" srcset="" />
                <div className="LoverLaneTitle"><h1 className="LoverLaneTitleHead">V</h1> <h1 className="LoverLaneTitleHead">STUDIO</h1><a href=""><span className="LoverLaneTitlePara">Comibature</span> <span className="LoverLaneTitlePara"> | </span> <span className="LoverLaneTitlePara"> Chennai</span></a></div>
            </div>
        </div>
    );
}

export default LoversLane;