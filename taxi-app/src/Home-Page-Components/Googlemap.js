import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Map.css';

const mapStyles = {
  width: '100%',
  height: '400px',
};

function CabBookingPage({ google }) {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [pickupCoordinates, setPickupCoordinates] = useState(null);
  const [dropOffCoordinates, setDropOffCoordinates] = useState(null);

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
    console.log('Pickup Coordinates:', pickupCoordinates);
    console.log('Drop-off Coordinates:', dropOffCoordinates);
  };

  const handleMapReady = (mapProps, map) => {
    // Enable geocoder service
    const geocoder = new mapProps.google.maps.Geocoder();

    // Geocode pickup location
    geocoder.geocode({ address: pickupLocation }, (results, status) => {
      if (status === 'OK' && results.length > 0) {
        const { lat, lng } = results[0].geometry.location;
        setPickupCoordinates({ lat, lng });
      } else {
        console.error('Geocode for pickup location was not successful:', status);
      }
    });

    // Geocode drop-off location
    geocoder.geocode({ address: dropOffLocation }, (results, status) => {
      if (status === 'OK' && results.length > 0) {
        const { lat, lng } = results[0].geometry.location;
        setDropOffCoordinates({ lat, lng });
      } else {
        console.error('Geocode for drop-off location was not successful:', status);
      }
    });
  };

  return (
    <div>
      <h1>Cab Booking</h1>

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
        onReady={handleMapReady}
      >
        {pickupCoordinates && <Marker position={pickupCoordinates} />}
        {dropOffCoordinates && <Marker position={dropOffCoordinates} />}
      </Map>

      <button onClick={handleBooking}>Book Cab</button>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_API_KEY',
})(CabBookingPage);
