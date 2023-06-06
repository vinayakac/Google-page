import React, { useState } from 'react';
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';
// import './Add.css';

const Map = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [directions, setDirections] = useState(null);

  const handleDirections = () => {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error('Error fetching directions:', result);
        }
      }
    );
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <input
        type="text"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        placeholder="Enter origin"
      />
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Enter destination"
      />
      <button onClick={handleDirections}>Get Directions</button>

      <GoogleMap
        mapContainerStyle={{ height: '100%', width: '100%' }}
        zoom={8}
        center={{ lat: 14.8074, lng: 74.1299 }}
      >
        {directions && <DirectionsRenderer directions={directions} />}
        {origin && <Marker position={{ lat: 14.8074, lng: 74.1299 }} />} 
        {/* // Example marker for origin */}
        {destination && <Marker position={{ lat: 14.8074, lng: 74.1299 }} />} 
        {/* // Example marker for destination */}
      </GoogleMap>
    </div>
  );
};

export default Map;