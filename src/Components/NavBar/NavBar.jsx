import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import "./Navbar.css";
import { Link, Navigate } from "react-router-dom";

const NavBar = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    
    return (
        <>
            <Dialog open={open} onClose={handleClose} fullWidth={'lg'}>
                <DialogContent>
                    <h2 className="DialogHeading">Your Location?</h2>
                    <br />
                    <div className="DialogBox">
                        <div className="DialogBoxLeft">
                            <Link to='/bookSlot/?location=Coimbatore'><button>Coimbatore</button></Link>
                        </div>
                        <div className="DialogBoxRight">
                            <Link to='/bookSlot/?location=Chennai'><button>Chennai</button></Link>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            <div className="NavBar">
                <div className="NavBarLogo">
                    <Link to="/"><img src="" alt="" srcset="" /></Link>
                </div>
                <div className="NavBarBtns">
                    {/* <Link to="/bookSlot"> */}
                    <button onClick={handleClickOpen} className="NavBarBtn">Book Slot</button>
                    {/* </Link> */}
                </div>
            </div>
        </>
    );
}

export default NavBar;