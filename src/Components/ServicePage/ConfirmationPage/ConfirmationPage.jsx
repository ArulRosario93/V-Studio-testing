import React, { useEffect } from "react";
import "./ConfirmationPage.css";
import Dialog from '@material-ui/core/Dialog';

const ConfirmationPage = ({ date, photography, details, setSelectedAddons }) => {

    const [addOns, setAddOns] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [ads, setAds] = React.useState(true);

    const handleAddOn = (item, price, index) => {
        setSelectedAddons([...addOns, { item: item, price: price, index: index }]);
        setAddOns([...addOns, { item: item, price: price, index: index }]);
        setAds(false);
    }


    const addOnsAds = [
        {
            item: "2 LED T.V. (50 inches)",
            price: "₹2000"
        }, 
        {
            item: '360 Camera Stand',
            price: '₹9500 per day',
        },
        {
            item: 'DJ System',
            price: '₹8000-₹9500',
        }
    ]

    const handleClickOnAddOn = () => {
        setAds(true);
    }

    const handleClick = () => {
        // setDialogInfo({ title: title, subTitle: subTitle, image: image, price: price, notes: notes, index: key});
        // setSelectedIndex(key);
        setOpen(true);
        // setPhotography(dialogInfo);
    }

    const handleClose = () => {
        setAds(false);
        setOpen(false);
    }

    // Sum plus GST
    const grandTotal = photography.price + (photography.price * 0.18); 

    // console.log(photography, details, date);
    useEffect(() => {
        setSelectedAddons(addOns);
    }, [addOns]);

    return (
        <div className="ConfirmationPage">
            <Dialog open={ads} onClose={() => handleClose()}>
                <div className="SelectPhotographyDialog">
                    <h1 className="SelectPhotographyDialogHead">Add Ons</h1>
                    {
                        addOnsAds.map((item, index) => {
                            return (
                                <div className="SelectPhotographyDialogFlexADD">
                                    <div><h2 className="SelectPhotographyDialogFlexHead">{item.item}</h2><p>{item.item}</p></div>
                                    <p onClick={() => handleAddOn(item.item, item.item, index)} className="SelectPhotographyDialogFlexPara">Add</p>
                                </div>
                            );
                        })
                    }
                </div>
            </Dialog>
            <Dialog open={open} onClose={() => handleClose()} >
                <div className="SelectPhotographyDialog">
                    <div className="SelectPhotographyDialogFlex">
                        <div className="SelectPhotographyDialogFlexItem">
                            <img className="SelectPhotographyDialogFlexItemImg" src={photography.image} alt="Baby Shoot" srcSet="" />
                            <div className="SelectPhotographyDialogFlexItemHead">
                              <h2>{photography.title}</h2>
                              <p>{photography.subTitle}</p>
                            </div>
                        </div>
                        <div className="SelectPhotographyDialogFlexItem">
                            <div className="SelectPhotographyDialogFlexItemNotes">
                                <h1 className="SelectPhotographyDialogFlexItemNotesHead">Notes:</h1>
                                <ul className="SelectPhotographyDialogFlexItemNotesList">
                                    {
                                        photography.notes.map((item, index) => {
                                            return (
                                                <div className="SelectPhotographyDialogFlexItemNotesListFlexInfo">
                                                    <div className="SelectPhotographyDialogFlexItemNotesListFlexInfoImg"><img className="SelectPhotographyDialogFlexItemNotesListFlexInfoImgImg" src="https://png.pngtree.com/png-vector/20191113/ourmid/pngtree-green-check-mark-icon-flat-style-png-image_1986021.jpg" alt="" srcset="" /></div>
                                                    <li key={index} className="SelectPhotographyDialogFlexItemNotesListItem">{item}</li>
                                                </div>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                            <p className="SelectPhotographyDialogFlexItemPara">Price: {photography.price}</p>
                        </div>
                    </div>
                </div>
            </Dialog>
            <h1 className="ConfirmationPageHead">Confirmation Page</h1>
            <br />
            <br />
            <div className="ConfirmationPageContent1">
                <div className="ConfirmationPageContent1Flex">
                    <div className="ConfirmationPageContent1FlexLeft">
                        <div className="ConfirmationPageContent1Container">
                            <p className="ConfirmationPageContent1ContainerLabel">Name:</p>
                            <p className="ConfirmationPageContent1ContainerPara">{details.name}</p>
                        </div>
                        <br />
                        <div className="ConfirmationPageContent1Container">
                            <p className="ConfirmationPageContent1ContainerLabel">Phone Number:</p>
                            <p className="ConfirmationPageContent1ContainerPara">{details.phone}</p>
                        </div>
                    </div>
                    <div className="ConfirmationPageContent1FlexRight">
                        <div className="ConfirmationPageContent1Container">
                            <p className="ConfirmationPageContent1ContainerLabel">Email:</p>
                            <p className="ConfirmationPageContent1ContainerPara">{details.email}</p>
                        </div>
                        <br />
                        <div className="ConfirmationPageContent1Container">
                            <p className="ConfirmationPageContent1ContainerLabel">Event Address:</p>
                            <p className="ConfirmationPageContent1ContainerPara">{details.address}</p>
                        </div>
                    </div>
                </div>
            </div>
                <br />
                <br />
                <div className="ConfirmationPageDivider"></div>

                {/* <br /> */}
                <br />
            <div className="ConfirmationPageContent2">

                <div className="ConfirmationPageContent2Flex">

                    <div className="ConfirmationPageContent2FlexContent">
                        <div className="ConfirmationPageContent2FlexContentImage"><img className="ConfirmationPageContent2FlexContentImageImg" src={photography.image} alt="Shoot Image" srcset="" /></div>
                        <div className="ConfirmationPageContent2FlexContentDetails">
                            <h2 className="ConfirmationPageContent2FlexContentDetailsTitle">
                                Wedding Photography
                            </h2>
                            <div className="ConfirmationPageContent2FlexContentDetailsMore" onClick={() => handleClick()}>
                                <p className="ConfirmationPageContent2FlexContentDetailsMorePara">More Details</p></div>
                        </div>

                    </div>
                    <div className="ConfirmationPageContent2FlexBillings">
                        <div className="ConfirmationPageContent2FlexBillingsContainer">
                            <p className="ConfirmationPageContent2FlexBillingsContainerLabel">Price:</p>
                            <p className="ConfirmationPageContent2FlexBillingsContainerPara">₹{photography.price}</p>
                        </div>
                        <div className="ConfirmationPageContent2FlexBillingsContainer">
                            <p className="ConfirmationPageContent2FlexBillingsContainerLabel">GST</p>
                            <p className="ConfirmationPageContent2FlexBillingsContainerPara">+18%</p>
                        </div>
                        {/* <div className="ConfirmationPageContent2FlexBillingsContainer">
                            <p className="ConfirmationPageContent2FlexBillingsContainerLabel">Addons:</p>
                            <div className="ConfirmationPageContent2FlexBillingsContainerAddons">
                                {
                                    addOnsAds.map((item, index) => {
                                        return (
                                            <div className="ConfirmationPageContent2FlexBillingsContainerAddonsFlex">
                                                <p className="ConfirmationPageContent2FlexBillingsContainerAddonsFlexPara">{item.item}</p>
                                                <p className="ConfirmationPageContent2FlexBillingsContainerAddonsFlexPrice">{item.price}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div> */}
                        <div className="ConfirmationPageContent2FlexBillingsContainer">
                            <p className="ConfirmationPageContent2FlexBillingsContainerLabel">Total:</p>
                            <p className="ConfirmationPageContent2FlexBillingsContainerPara">₹{grandTotal}</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                addOns.length > 0? <div className="ConfirmationPageAddOns">
                    <h1 onClick={() => handleClickOnAddOn()} className="ConfirmationPageAddOnsHead">Add Ons</h1>
                    <div className="ConfirmationPageAddOnsRow">

                    {
                        addOns.map((item, index) => {
                            return (
                                <div className="ConfirmationPageAddOnsFlex">
                                    <p className="ConfirmationPageAddOnsFlexItem">{item.item}</p>
                                    {/* <p className="ConfirmationPageAddOnsFlexPrice">{item.price}</p> */}
                                </div>
                            );
                        })
                    }
                    </div>
                </div>: <div></div>
            }
        </div>
    );
}

export default ConfirmationPage;