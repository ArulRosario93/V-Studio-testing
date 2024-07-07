import React from "react";
import "./Inputs.css";

const Inputs = ({ type, placeholder, value, func, label }) => {
    return (
        <div className="Inputs">
            <p className="InputsPara">{label}</p>
            <input className="InputsInp" type={type} placeholder={placeholder} value={value} onChange={(e) => func(e.target.value)} />
        </div>
    );
}

export default Inputs;