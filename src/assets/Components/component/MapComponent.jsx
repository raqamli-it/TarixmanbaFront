


// // MapComponent.js
// import React, { useEffect, useRef } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import '../../../../node_modules/leaflet/dist/leaflet.css';
// import 'leaflet-control-geocoder/dist/Control.Geocoder.css'; // Geocoder pluqini CSS faylini import qilish
// import 'leaflet-control-geocoder/dist/Control.Geocoder';
// // import 'leaflet.css';

// import L from 'leaflet';
// // import { markersData } from './Markers';

// // Default marker icon pathini to'g'irlash
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// });

// const MapComponent = () => {
//   const mapRef = useRef("england");

//   useEffect(() => {
//     if (mapRef.current) {
//       const map = mapRef.current.leafletElement;
//       const geocoder = L.Control.geocoder({
//         defaultMarkGeocode: false,
//       }).addTo(map);
//     }
//   }, []);
//   const markersData = [
//     { id: 1, position: [40.7128, -74.0060], popupText: 'obidalarmu' },
//     { id: 2, position: [39.652451, 66.970139], popupText: 'Toshkentdagi aha oho' },
//     { id: 3, position: [41.8781, -87.6298], popupText: 'Chicago, IL' },
//     //   [41.311081, 69.240562], popupText: 'obidalarmu' },
//     // { id: 2, position: [39.652451, 66.970139]
//     // Yana boshqa markerlar qo'shing
//   ];
//   return (
//     <>
//       <MapContainer center={[41.311081, 69.240562]} zoom={4} className="leaflet-container  lg:w-[800px] md:w-[640px] h-[50vh] sm:w-[400px] w-[300px]" ref={mapRef}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {markersData.map(marker => (
//           <Marker key={marker.id} position={marker.position}>
//             <Popup>
//               <b>{marker.popupText}</b>
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </>

//   );
// };

// export default MapComponent;

import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Belgilangan joylar ro'yxati
const locations = [
  { id: 1, name: 'Place 1', position: [51.505, -0.09] },
  { id: 2, name: 'Place 2', position: [51.515, -0.1] },
  { id: 3, name: 'Place 3', position: [51.52, -0.12] },
];

const SearchControl = ({ searchValue, setSearchValue, markers }) => {
  const map = useMap();

  const handleSearch = () => {
    const location = markers.current.find(marker => marker.options.title.toLowerCase().includes(searchValue.toLowerCase()));
    if (location) {
      map.setView(location.getLatLng(), 13);
      location.openPopup();
    } else {
      alert('Location not found');
    }
  };

  return (
    <div style={{ position: 'absolute', top: 30, right: 10, zIndex: 1000, display: 'flex', gap: "0" }}>
      <input
        style={{ border: '1px solid black', borderRadius: '10px', outline: "0", borderTopRightRadius: "0", borderBottomRightRadius: "0", borderRight: "none", padding: "5px" }}
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search location..."
      />
      <button
        style={{ border: '1px solid black', borderTopRightRadius: '10px', borderBottomRightRadius: "10px", borderTopLeftRadius: "0", borderBottomLeftRadius: "0", borderLeft: "none", padding: "5px", background: "#fff", cursor: "pointer" }}

        onClick={handleSearch}>Izlash</button>
    </div>
  );
};

const MapComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  const markersRef = useRef([]);

  return (
    <div className='w-[100%] h-[100%] rounded-[10px]'>
      <MapContainer center={[51.505, -0.09]} zoom={13} className="leaflet-container  lg:w-[800px] md:w-[640px] h-[50vh] sm:w-[400px] w-[300px] rounded-2xl " >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((loc, index) => (
          <Marker
            key={loc.id}
            position={loc.position}
            title={loc.name}
            ref={(el) => markersRef.current[index] = el}
          >
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
        <SearchControl searchValue={searchValue} setSearchValue={setSearchValue} markers={markersRef} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;

