import React from "react";
import "./ServicePage.css";
import PickDate from "./PickDate/PickDate";
import SlotBookingBtn from "./Buttons/SlotBookingsBtn";
import Dialog from '@mui/material/Dialog';
import SelectPhotography from "./SelectPhotography/SelectPhotography";
import Forms from "./Forms/Forms";
import ConfirmationPage from "./ConfirmationPage/ConfirmationPage";
import emailjs from '@emailjs/browser';

const ServicePage = () => {

    const [open, setOpen] = React.useState(false);

    const [openTerms, setOpenTerms] = React.useState(false);

    const [selectedAddons, setSelectedAddons] = React.useState([]);

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

    // Find The given parameter from the URL
    const urlParams = new URLSearchParams(document.location.search);
    const myParam = urlParams.get('location');    


    console.log(urlParams);
    console.log(myParam);

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

    const SendEmail = async () => {
        try {
            // SEND EMAIL 1
            await emailjs.send(
                import.meta.env.VITE_API_SERVICE_KEY, 
                import.meta.env.VITE_API_TEMPLATE_ID_1, 
                {
                    name: details.name,
                    to_email: details.email,
                    location: details.address,
                    photography_type: photography?.title,
                    Addons: selectedAddons.map((addon) => addon.item).join(", "),
                    date: date[0].startDate.toDateString() + " to " + date[0].endDate.toDateString(),
                    price: (photography.price + (photography.price * 0.18)) + " INR",
                }, 
                import.meta.env.VITE_API_PUBLIC_KEY
            );
            
            // SEND EMAIL 2
            await emailjs.send(
                import.meta.env.VITE_API_SERVICE_KEY, 
                import.meta.env.VITE_API_TEMPLATE_ID_2, 
                {
                    name: details.name,
                    number: details.phone,
                    photography_type: photography?.title,
                    location: details.address,
                    Addons: selectedAddons.map((addon) => addon.item).join(", "),
                    todays_date: new Date().toDateString(),
                    date: date[0].startDate.toDateString() + " to " + date[0].endDate.toDateString(),
                    price: (photography.price + (photography.price * 0.18)) + " INR",
                }, 
                import.meta.env.VITE_API_PUBLIC_KEY
            );
    
            alert('Successfully Slot Booked <3');
            window.location('/');
            window.location.reload();

        } catch (error) {
            console.error('Failed to send emails:', error);
            throw error;  // Rethrow the error to handle it in the calling function
        }
    };
    
    const handleConfirm = async () => {
        console.log("Order Confirmed. STARTING EMAIL");
    
        try {
            await SendEmail();
            console.log('SUCCESS!');
        } catch (error) {
            alert('FAILED. Please try again later: ' + error.message);
        }
    };
    

    const handleChangeTermsnconditions = () => {
        //Open Terms and Conditions

        setOpenTerms(!openTerms);

        console.log("Calling Here");

    }

    const handleCancelOrder = () => {
        //CANCEL ORDER

        //Go to HOme page

    }

    return (
        <div className="ServicePage">
            <Dialog open={openTerms} onClose={handleChangeTermsnconditions}>
                <div className="TermsAndConditions">
                    <h1 className="TermsAndConditionsHead">Terms and Conditions</h1>
                    <div className="TermsAndConditionsFlex">
                        <div className="TermsAndConditionsRow">
                            <div className="TermsAndConditionsRowImg">
                                <img className="TermsAndConditionsRowImgImg" src="https://icons.iconarchive.com/icons/custom-icon-design/flat-cute-arrows/256/Arrow-Right-1-icon.png" alt="" />
                            </div>
                            <p className="TermsAndConditionsRowP">Client should be submit 1 TB Hard Disk on the Event Date.</p>
                        </div>
                        <div className="TermsAndConditionsRow">
                            <div className="TermsAndConditionsRowImg">
                                <img className="TermsAndConditionsRowImgImg" src="https://icons.iconarchive.com/icons/custom-icon-design/flat-cute-arrows/256/Arrow-Right-1-icon.png" alt="" />
                            </div>
                            <p className="TermsAndConditionsRowP">Video and Reels will be submittedc within 15 days from the Event date.</p>
                        </div>
                        <div className="TermsAndConditionsRow">
                            <div className="TermsAndConditionsRowImg">
                                <img className="TermsAndConditionsRowImgImg" src="https://icons.iconarchive.com/icons/custom-icon-design/flat-cute-arrows/256/Arrow-Right-1-icon.png" alt="" />
                            </div>
                            <p className="TermsAndConditionsRowP">Album will be submitted within 60 to 75 days from the selection date.</p>
                        </div>
                        <div className="TermsAndConditionsRow">
                            <div className="TermsAndConditionsRowImg">
                                <img className="TermsAndConditionsRowImgImg" src="https://icons.iconarchive.com/icons/custom-icon-design/flat-cute-arrows/256/Arrow-Right-1-icon.png" alt="" />
                            </div>
                            <p className="TermsAndConditionsRowP">Cash should be submitted event end Cash / G.Pay / Phone Pay / Amazon Pay / Cheaque 18%</p>
                        </div>
                        <div className="TermsAndConditionsRow">
                            <div className="TermsAndConditionsRowImg">
                                <img className="TermsAndConditionsRowImgImg" src="https://icons.iconarchive.com/icons/custom-icon-design/flat-cute-arrows/256/Arrow-Right-1-icon.png" alt="" />
                            </div>
                            <p className="TermsAndConditionsRowP">Advance should be collected only at 15% to 10%.</p>
                        </div>
                        <div className="TermsAndConditionsRow">
                            <div className="TermsAndConditionsRowImg">
                                <img className="TermsAndConditionsRowImgImg" src="https://icons.iconarchive.com/icons/custom-icon-design/flat-cute-arrows/256/Arrow-Right-1-icon.png" alt="" />
                            </div>
                            <p className="TermsAndConditionsRowP">Inside Chennai Travelling Expenses not required.</p>
                        </div>
                        <div className="TermsAndConditionsRow">
                            <div className="TermsAndConditionsRowImg">
                                <img className="TermsAndConditionsRowImgImg" src="https://icons.iconarchive.com/icons/custom-icon-design/flat-cute-arrows/256/Arrow-Right-1-icon.png" alt="" />
                            </div>
                            <p className="TermsAndConditionsRowP">Outside Chennai, Outstation Travelling Expenses required depend upon the distance.</p>
                        </div>
                    </div>
                </div>x
            </Dialog>

            <Dialog open={open}>
                <div className="ServicePageDialog">
                    <h1>Confirm Order?</h1>

                    <div className="ServicePageDialogCheckIt">
                        <input type="checkbox" onChange={(e) => setCheckbox(e.target.checked)} />
                        <label htmlFor="">I agree to the <i style={{color: 'blue'}} onClick={() => handleChangeTermsnconditions()}>terms and conditions</i></label>
                    </div>

                    {
                        checkbox? <div className="ServicePageDialogBtns">
                            <button onClick={() => handleCancelOrder()} >Cancel</button>
                            <button onClick={() => handleConfirm()}>Confirm</button>
                        </div>: null
                    }
 
                </div>
            </Dialog>
            <div className="ServicePageBG"></div>
            {
                page == 0?<PickDate setDate={setDate} date={date} />: page == 1? <SelectPhotography myParam={myParam} setPhotography={setPhotography} photography={photography} /> : page == 2? <Forms setDetails={setDetails}/> : page==3? <ConfirmationPage setSelectedAddons={setSelectedAddons} date={date} details={details} photography={photography} /> :<div></div>
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