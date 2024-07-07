import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {

    

    return (
        <div className="NavBar">
            <div className="NavBarLogo">
                <Link to="/"><img src="" alt="" srcset="" /></Link>
            </div>
            <div className="NavBarBtns">
                <Link to="/bookSlot"><button className="NavBarBtn">Book Slot</button></Link>
            </div>
        </div>
    );
}

export default NavBar;