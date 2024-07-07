import React, { useEffect } from "react";
import "./Forms.css";
import Inputs from "./Inputs/Inputs";

const Forms = ({ setDetails }) => {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [address, setAddress] = React.useState("");

    const handleChange = (name, email, phone, address) => {
        setDetails({
            name: name,
            email: email,
            phone: phone,
            address: address
        });
    }

    useEffect(() => {
        handleChange(name, email, phone, address);
    }, [name, email, phone, address]);

    // React.useEffect(() => {
    //     details({
    //         name: name,
    //         email: email,
    //         phone: phone,
    //         address: address
    //     });
    // }, [name, email, phone, address]);

    return (
        <div className="Forms">
            <h1 className="FormsHead">Details</h1>
            <div className="FormsFlex">
                <Inputs type="text" placeholder="Name" value={name} func={(name) => setName(name)} label="Name:" />
                <br />
                <Inputs type="email" placeholder="Email" value={email} func={(email) => setEmail(email)} label="Email:" />
                <br />
                <Inputs type="number" placeholder="Phone" value={phone} func={(phone) => setPhone(phone)} label="Phone:" />
                <br />
                <Inputs type="text" placeholder="Full Event Address" value={address} func={(address) => setAddress(address)} label="Address:" />
            </div>
        </div>
    );
}

export default Forms;