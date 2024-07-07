import React, { useState } from 'react';
import "./PickDate.css";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

const PickDate = ({ setDate }) => {

    const [selectionRange, setSelectionRange] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }]);
    
    const handleSelect = (date) => {
        setSelectionRange([date.selection]);
        setDate([date.selection]);
    }

    const handleCanel = () => {
        setSelectionRange([{
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }]);
    }
    
    return (
        <div className="PickDate">
            <h1 className='PickDateHead'>Pick Date</h1>
            {/* <br /> */}
            <p className='PickDateNote'>To select double tap the date and start to drag to select multiple dates.</p>
            <br />
            <DateRangePicker
                className='PickDateCalender'
                color='#e9e0d7d0'
                
                //Max date is set to 1 year from now
                minDate={new Date()}
                maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
                ranges={selectionRange}
                onChange={handleSelect}
            />
            <br />
            <button className='clearAll' onClick={handleCanel}>Clear date</button>
        </div>
    );
}

export default PickDate;