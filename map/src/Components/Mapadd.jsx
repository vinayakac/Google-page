import React, { useState } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const LocationFinder = ({ google }) => {
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results.length > 0) {
        const location = results[0].geometry.location;
        setLatitude(location.lat());
        setLongitude(location.lng());
      } else {
        console.error('Geocode was not successful for the following reason:', status);
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="Enter an address"
        />
        <button type="submit">Find Location</button>
      </form>
      {latitude && longitude && (
        <div>
          Latitude: {latitude}
          <br />
          Longitude: {longitude}
        </div>
      )}
      <Map
        google={google}
        zoom={14}
        style={{ width: '100%', height: '400px' }}
        initialCenter={{ lat: latitude, lng: longitude }}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBvtuk4JdZo0NX4LioVkPQc_R0Od1B5v64',
})(LocationFinder);
