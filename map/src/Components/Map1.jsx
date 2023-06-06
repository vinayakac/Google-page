import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map1';

const BookingPage = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handlePickupChange = (e) => {
    setPickup(e.target.value);
  };

  const handleDropoffChange = (e) => {
    setDropoff(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    // Simulate booking request
    // Replace this with your actual booking logic

    // Reset form
    setPickup('');
    setDropoff('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <h1>Online Cab Booking</h1>
      <form onSubmit={handleBooking}>
        <label>
          Pickup Location:
          <input
            type="text"
            value={pickup}
            onChange={handlePickupChange}
          />
        </label>
        <br />
        <label>
          Dropoff Location:
          <input
            type="text"
            value={dropoff}
            onChange={handleDropoffChange}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={handleTimeChange}
          />
        </label>
        <br />
        <button type="submit">Book Cab</button>
      </form>
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBvtuk4JdZo0NX4LioVkPQc_R0Od1B5v64' }}
          defaultCenter={{ lat: 37.7749, lng: -122.4194 }} // Default center coordinates (San Francisco)
          defaultZoom={11} // Default zoom level
        ></GoogleMapReact>
      </div>
    </div>
  );
};

export default BookingPage;
