import React, { useState } from "react";
import "./SelectPhotography.css";
import Dialog from '@mui/material/Dialog';
import wowImage from "../../../assets/LoversLane.jpg";
import SelectPhotographyCatagory from "./SelectPhotographyCatagory/SelectPhotographyCatagory";

const SelectPhotography = ({ setPhotography, photography, myParam }) => {

    const [dialog, setDialog] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [dialogInfo, setDialogInfo] = useState({ title: "", subTitle: "", image: "", price: "", notes: [], index: 0});

    const DB = [
        {
            key: 0,
            name: "Baby Shoot",
            subName: "Basic",
            image: "https://images.squarespace-cdn.com/content/v1/58c61df220099e3e84dc9578/1664675452832-CL3OFQQZKV0QFVK6PFCO/beerwahfamilyphotoshoot-2.jpg",
            price: myParam == 'Coimbatore'? 75000 : 50000,
            notes: [
                "Traditional Videography",
                "Traditional Photography",
                "Candid Videography",
                "Candid Photography",
                "Size 12x36 Album",
                "Unlimited Sheets",

            ]
        },
        {
            key: 1,
            name: "Copper",
            subName: "",
            color: "",
            image: "https://5.imimg.com/data5/QI/DQ/MY-40449810/wedding-lighting-services.jpeg",
            price: myParam == 'Coimbatore'? 55000 : 35000,
            notes: [
                "Traditional Videography",
                "Traditional Photography",
                "Single Album",
                "Limited Photos = 250",

            ]
        },
        {
            key: 2,
            name: "Copper Wow",
            subName: "",
            color: "",
            image: "https://www.weddingbee.com/wp-content/uploads/2020/08/lights-603660.jpg",
            price: myParam == 'Coimbatore'? 70000 : 48000,
            notes: [
                "Traditional Videography",
                "Traditional Photography",
                "Double Album",
                "Limited Photos = 350",

            ]
        },
        {
            key: 3,
            name: "Sliver",
            subName: "",
            color: "",
            image: "https://www.weddingsutra.com/images/Vendor_Images/Wedding-decor/designs-by-sakshi-jerath/designs-by-sakshi-jerath-08.jpg",
            price: myParam == 'Coimbatore'? 80000 : 55000,
            notes: [
                "Traditional Videography",
                "Traditional Photography",
                "Candid Photography",
                "Double Album",
                "Limited Photos = 450",

            ]
        },
        {
            key: 4,
            name: "Sliver Wow",
            subName: "",
            color: "",
            image: "https://www.weddingsutra.com/images/Vendor_Images/Wedding-decor/designs-by-sakshi-jerath/designs-by-sakshi-jerath-07.jpg",
            price: myParam == 'Coimbatore'? 90000 : 65000,
            notes: [
                "Traditional Videography",
                "Traditional Photography",
                "Candid Photography",
                "Semi Candid Videography",
                "Double Album",
                "Limited Photos = 500",

            ]
        },
        {
            key: 5,
            name: "Gold",
            subName: "",
            color: "",
            image: "https://brighteventproductions.com/wp-content/uploads/2015/06/Bright-Event-Productions-Boho-Nashville-Wedding-Love-is-a-Big-Deal-7.jpg",
            price: myParam == 'Coimbatore'? 100000 :  75000,
            notes: [
                "Traditional Videography",
                "Traditional Photography",
                "Candid Videography",
                "Candid Photography",
                "Double Album",
                "Limited Photos (600)",
                "Variety Sheet",

            ]
        },
        {
            key: 6,
            name: "Gold Wow",
            subName: "",
            color: "",
            image: "https://www.weddingsutra.com/images/Vendor_Images/Wedding-decor/designs-by-sakshi-jerath/designs-by-sakshi-jerath-12.jpg",
            price: myParam == 'Coimbatore'? 110000 :  85000,
            notes: [
                "Traditional Videography",
                "Traditional Photography",
                "Candid Videography",
                "Candid Photography",
                "Double Album",
                "Limited Photos (700)",
                "Variety Sheet",
                "Pre Wedding Complimentary Shoot",
            ]
        },
        {
            key: 7,
            name: "Diamond",
            subName: "",
            color: "",
            image: "https://i.pinimg.com/originals/03/26/67/0326677409641e7894398783ef538311.jpg",
            price: myParam == 'Coimbatore'? 120000 : 96000,
            notes: [
                "Traditional Videography",
                "Traditional Photography",
                "Candid Videography",
                "Candid Photography",
                "Double Album",
                "Limited Photos (750)",
                "Drone Shoot",
                "Variety Sheet",
                "Pre Wedding Complimentary Shoot",
            ]
        },
        {
            key: 8,
            name: "Diamond Wow",
            subName: "",
            color: "",
            image: "https://m.media-amazon.com/images/M/MV5BYWY4OTgzOWYtNjJlMi00MTJjLTgyNGEtMzZiMDc3OTkzOGFjXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg",
            price: myParam == 'Coimbatore'? 130000 : 100000,
            notes: [
                "Traditional Videography",
                "Traditional Photography",
                "Candid Videography",
                "Candid Photography",
                "Double Album",
                "Unlimited Sheets",
                "Unlimited Photo",
                "Drone Shoot (2k)",
                "Variety Sheet",
                "Pre Wedding Complimentary Shoot",
            ]
        },
        {
            key: 9,
            name: "Platinum",
            subName: "",
            color: "",
            image: "https://receptionflipflops.com/cdn/shop/articles/Outdoor_night_wedding_procession.jpg?v=1672263783&width=1500",
            price: myParam == 'Coimbatore'? 140000 : 115000,
            notes: [
                "Traditional Videography",
                "Traditional Photography",
                "Candid Photography",
                "Candid Videography",
                "Double Pro Album",
                "Unlimited Sheets",
                "Unlimited Photo",
                "Drone Shoot (4k)",
                "Variety Sheet",
                "Pre Wedding only Photography Shoot",
                "Post Wedding only Photography Shoot",
            ]
        },
        {
            key: 10,
            name: "Platinum Wow",
            subName: "",
            color: "",
            image: wowImage,
            price: myParam == 'Coimbatore'? 150000 : 125000,
            notes: [
                "Traditional Videography",
                "Traditional Photography",
                "Candid Photography",
                "Candid Videography",
                "Double Pro Album",
                "Unlimited Sheets",
                "Unlimited Photo",
                "Drone Shoot (4k)",
                "Variety Sheet",
                "Pre Wedding Photography Shoot",
                "Pre Wedding Videography Shoot",
                "Post Wedding Photography Shoot",
                "Post Wedding Videography Shoot",
            ]
        },
    ]

    const handleClick = (title, subTitle, image, price, notes, key) => {
        setDialogInfo({ title: title, subTitle: subTitle, image: image, price: price, notes: notes, index: key});
        setSelectedIndex(key);
        setDialog(true);
        setPhotography({ title: title, subTitle: subTitle, image: image, price: price, notes: notes, index: key});
    }

    const handleClose = () => {
        setDialog(false);
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="SelectPhotography">
            <Dialog open={dialog} onClose={() => handleClose()} >
                <div className="SelectPhotographyDialog">
                    <div className="SelectPhotographyDialogFlex">
                        <div className="SelectPhotographyDialogFlexItem">
                            <img className="SelectPhotographyDialogFlexItemImg" src={dialogInfo.image} alt="Baby Shoot" srcSet="" />
                            <div className="SelectPhotographyDialogFlexItemHead">
                              <h2>{dialogInfo.title}</h2>
                              <p>{dialogInfo.subTitle}</p>
                            </div>
                        </div>
                        <div className="SelectPhotographyDialogFlexItem">
                            <div className="SelectPhotographyDialogFlexItemNotes">
                                <h1 className="SelectPhotographyDialogFlexItemNotesHead">Notes:</h1>
                                <ul className="SelectPhotographyDialogFlexItemNotesList">
                                    {
                                        dialogInfo.notes.map((item, index) => {
                                            return (
                                                <div className="InfoFlex">
                                                    <div className="InfoFlexImg"><img className="InfoFlexImgImg" src="https://png.pngtree.com/png-vector/20191113/ourmid/pngtree-green-check-mark-icon-flat-style-png-image_1986021.jpg" alt="" srcset="" /></div>
                                                    <li key={index} className="SelectPhotographyDialogFlexItemNotesListItem">{item}</li>
                                                </div>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                            <p className="SelectPhotographyDialogFlexItemPara">Price: {dialogInfo.price}</p>
                        </div>
                    </div>
                </div>
            </Dialog>
            <br />
            <br />
            <h1 className="SelectPhotographyHead">Book Slot</h1>

            <div className="SelectPhotographyCatagory">
                <div className="SelectPhotographyCatagoryFlex">
                    <br/>
                    <br/>
                    {
                        DB.map((item, index) => {
                            return (
                                <SelectPhotographyCatagory selectedIndex={selectedIndex} index={index} func={(title, subtitle, image, price, notes, key) => handleClick(title, subtitle, image, price, notes, key)} image={item.image} title={item.name} price={item.price} notes={item.notes} subName={item.subName} />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default SelectPhotography;