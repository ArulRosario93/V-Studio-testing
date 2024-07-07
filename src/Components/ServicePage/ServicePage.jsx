import React from "react";
import "./ServicePage.css";
import PickDate from "./PickDate/PickDate";
import SlotBookingBtn from "./Buttons/SlotBookingsBtn";
import Dialog from '@material-ui/core/Dialog';
import SelectPhotography from "./SelectPhotography/SelectPhotography";
import Forms from "./Forms/Forms";
import ConfirmationPage from "./ConfirmationPage/ConfirmationPage";

const ServicePage = () => {

    const [open, setOpen] = React.useState(false);

    const [checkbox, setCheckbox] = React.useState(false);

    const [page, setPage] = React.useState(0);
    const [date, setDate] = React.useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }]);
    const [photography, setPhotography] = React.useState({});
    const [details, setDetails] = React.useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const nextPage = () => {
        if(page == 0) {
            setPage(1);
        }

        if(page == 1) {
            setPage(2);
        }
        if (page == 2) {
            if (details.name != "" && details.email != "" && details.phone != "" && details.address != "") {
                setPage(3);
            }
        }

        if (page == 3) {
            setOpen(true);
        }
    }

    const prevPage = () => {
        if(page == 1) {
            setPage(0);
        }

        if(page == 2) {
            setPage(1);
        }

        if(page == 3) {
            setPage(2);
        }
    }

    const handleConfirm = () => {
        //CONFIRM ORDER
    }

    const handleCancelOrder = () => {
        //CANCEL ORDER

        //Go to HOme page

    }

    return (
        <div className="ServicePage">
            <Dialog open={open}>
                <div className="ServicePageDialog">
                    <h1>Confirm Order?</h1>

                    <div className="ServicePageDialogCheckIt">
                        <input type="checkbox" onChange={(e) => setCheckbox(e.target.checked)} />
                        <label htmlFor="">I agree to the <i>terms and conditions</i></label>
                    </div>

                    {
                        checkbox? <div className="ServicePageDialogBtns">
                            <button onClick={() => handleConfirm} >Cancel</button>
                            <button onClick={() => handleCancelOrder}>Confirm</button>
                        </div>: null
                    }
 
                </div>
            </Dialog>
            <div className="ServicePageBG"></div>
            {
                page == 0?<PickDate setDate={setDate} date={date} />: page == 1? <SelectPhotography setPhotography={setPhotography} photography={photography} /> : page == 2? <Forms setDetails={setDetails}/> : page==3? <ConfirmationPage date={date} details={details} photography={photography} /> :<div></div>
            }
            
            <div className="ServicePageBtn">
                <div className="ServicePageBtnFlex">
                    {
                        page != 0 ? <SlotBookingBtn text="Previous Page" func={() => prevPage()} />: <div></div>
                    }
                    
                    <SlotBookingBtn text={page == 0? "Confirm Date": page == 1? "Confirm Photography": page == 2? "Confirm Details" : page==3? "Confirm Order":""} func={() => nextPage()} />
                </div>
            </div>
        </div>
    );
}

export default ServicePage;