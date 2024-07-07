import React from "react";
import "./FileInOrder.css";

const FileInOrder = ({ text, num }) => {
    return (
        <div className="FileInOrder">
            <div className="FileInOrderRow"><p className="FileInOrderNum">{num}</p><p className="FileInOrderText"></p>{text}</div>
            <div className="FileInOrderStraight"></div>
        </div>
    )
}

export default FileInOrder;