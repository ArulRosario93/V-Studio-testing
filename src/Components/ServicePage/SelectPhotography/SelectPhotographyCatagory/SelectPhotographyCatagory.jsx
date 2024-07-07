import React from "react";
import "./SelectPhotographyCatagory.css";

const SelectPhotographyCatagory = ({ image, title, subName, price, notes, func, selectedIndex, index }) => {

    const handleClick = (title, subtitle, image, price, notes, key) => {
        func(title, subtitle, image, price, notes, key);
        console.log(selectedIndex == index, index, selectedIndex);
    }

    // console.log(index)

    return (
        <div className="SelectPhotographyCatagoryFlexItem" style={{border: selectedIndex=== index? '8px solid red': ""}} onClick={() => handleClick(title, subName, image, price, notes, index)}>
            <img className="SelectPhotographyCatagoryFlexItemImg" src={image} alt={title} srcSet="" />
            <div className="SelectPhotographyCatagoryFlexItemHead"><h2>{title}</h2> <p className="SelectPhotographyCatagoryFlexItemHeadPara">{subName}</p></div>
        </div>
    );
}

export default SelectPhotographyCatagory;