import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Map.css';

import { Space, TimePicker } from 'antd';

import { DatePicker } from 'antd';
const onChange = (time, timeString, date, dateString) => {
    // console.log(time, timeString)(date, dateString);
};

const mapStyles = {
    width: '100%',
    height: '400px',
};

function CabBookingPage({ google }) {
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropOffLocation, setDropOffLocation] = useState('');

    const handlePickupLocationChange = (event) => {
        setPickupLocation(event.target.value);
    };

    const handleDropOffLocationChange = (event) => {
        setDropOffLocation(event.target.value);
    };

    const handleBooking = () => {
        // Perform booking logic
        console.log('Booking cab...');
        console.log('Pickup Location:', pickupLocation);
        console.log('Drop-off Location:', dropOffLocation);
    };

    return (
        <div>
            <h1>Auto Booking</h1>
            <div className='New'>
                <Space wrap>
                    <TimePicker use12Hours format="h:mm a" onChange={onChange} />
                </Space>

                <Space direction="vertical">
                    <DatePicker onChange={onChange} />
                </Space>
            </div>

            <div>
                <label htmlFor="pickupLocation">Pickup Location:</label>
                <input
                    type="text"
                    id="pickupLocation"
                    value={pickupLocation}
                    onChange={handlePickupLocationChange}

                />

            </div>

            <div>
                <label htmlFor="dropOffLocation">Drop-off Location:</label>
                <input
                    type="text"
                    id="dropOffLocation"
                    value={dropOffLocation}
                    onChange={handleDropOffLocationChange}
                />
            </div>

            <Map
                google={google}
                zoom={7}
                style={mapStyles}
                initialCenter={{ lat: 14.5204, lng: 75.7224 }} // Coordinates for Karnataka
            >
                <Marker position={{ lat: 14.4276278, lng: 74.3778929 }} />
            </Map>

            <button onClick={handleBooking}>Book Auto</button>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBvtuk4JdZo0NX4LioVkPQc_R0Od1B5v64',
})(CabBookingPage);