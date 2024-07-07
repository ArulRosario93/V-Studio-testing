import React from "react";
import "./SlotBookingsBtn.css";

const SlotBookingBtn = ({ text, func }) => {
    return (
        // <div className="">
            <button onClick={() => func()} style={{background: text == "Confirm Text"? "red": "black"}} className="ServicePageBtns">{text}</button>
        // </div>
    );
}

export default SlotBookingBtn;