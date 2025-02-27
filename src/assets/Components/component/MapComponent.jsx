// import React, { useEffect, useState } from 'react';
// import {
//   MapContainer,
//   TileLayer,
//   LayersControl,
//   Marker,
//   Popup,
// } from 'react-leaflet';

// import 'leaflet/dist/leaflet.css';

// import { Link } from 'react-router-dom';
// import L from 'leaflet';
// import { endpoints } from '../../config/endpoints';
// import { DataService } from '../../config/dataService';

// const { BaseLayer } = LayersControl;
// const customIcon = new L.Icon({
//   iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
//   iconSize: [30, 30],
// });

// const MapComponent = () => {
//   const [locations, setLocations] = useState([]);
//   const [selectedCategoryId, setSelectedCategoryId] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(false); // Add loading state
//   const [error, setError] = useState(null); // Add error state

//   const maps = [
//     {
//       name: 'OSM',
//       url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//     },
//     {
//       name: 'Satellite',
//       url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
//     },
//     {
//       name: 'Carto',
//       url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
//     },
//     {
//       name: 'Esri',
//       url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
//     },
//   ];
//   const fetchCategories = async () => {
//     try {
//       const response = await DataService.get(endpoints.categoryResourceApi);
//       setCategories(response);
//     } catch (error) {
//       setError('Error fetching categories');
//       console.error('Error fetching categories:', error);
//     }
//   };

//   const fetchLocations = async (categoryId) => {
//     if (!categoryId) return; // Prevent unnecessary API call for null categoryId

//     setLoading(true); // Set loading state to true
//     try {
//       const response = await DataService.get(
//         endpoints.locationApiById(categoryId),
//       );
//       setLocations(response);
//       setLoading(false); // Set loading state to false after data is fetched
//     } catch (error) {
//       setError('Error fetching locations');
//       console.error('Error fetching locations:', error);
//       setLoading(false); // Set loading state to false in case of error
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     if (selectedCategoryId !== null) {
//       fetchLocations(selectedCategoryId);
//     }
//   }, [selectedCategoryId]);

//   return (
//     <>
//       <div className="flex justify-center">
//         <h1 className="text-2xl font-bold text-white">O'tmishga sayohat</h1>
//       </div>
//       <div className="p-4 flex justify-center">
//         <div className="flex w-2/3 h-full flex-wrap gap-3">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategoryId(category.id)}
//               className={`px-2 md:px-2 lg:px-2 py-1 md:py-0 lg:py-1 rounded-full border text-sm md:text-sm lg:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${
//                 selectedCategoryId === category.id
//                   ? 'bg-blue-600 text-white border-blue-600'
//                   : 'bg-white text-gray-700 border-gray-300'
//               }`}
//             >
//               {category.title}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div className="flex flex-col justify-center items-center h-screen">
//         <div className="w-4/6 h-5/6 md:w-3/4 lg:w-2/3 rounded-lg shadow-lg ">
//           {loading && <div className="text-white">Loading...</div>}{' '}
//           {/* Loading indicator */}
//           {error && <div className="text-red-500">{error}</div>}{' '}
//           {/* Error message */}
//           <MapContainer
//             center={[41.2995, 69.2401]}
//             zoom={6}
//             style={{ zIndex: 0 }}
//             className="w-full h-full z-0"
//             scrollWheelZoom={false}
//           >
//             <LayersControl position="topright">
//               {maps.map((item, index) => (
//                 <BaseLayer name={item.name} index={index} checked={index === 0}>
//                   <TileLayer url={item.url} />
//                 </BaseLayer>
//               ))}
//             </LayersControl>
//             {locations.map((location, index) => (
//               <Marker
//                 key={index}
//                 position={[
//                   parseFloat(location.latitude),
//                   parseFloat(location.longitude),
//                 ]}
//                 icon={customIcon}
//               >
//                 <Popup>
//                   <Link to={`/cardDetail/${location.resource_id}`}>
//                     <strong>{location.resource_title}</strong>
//                   </Link>
//                 </Popup>
//               </Marker>
//             ))}
//           </MapContainer>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MapComponent;

import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  LayersControl,
  Marker,
  Popup,
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import { endpoints } from '../../config/endpoints';
import { DataService } from '../../config/dataService';

const { BaseLayer } = LayersControl;
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [30, 30],
});

const MapComponent = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const DEFAULT_CATEGORY_ID = 5;

  const maps = [
    {
      name: 'OSM',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    },
    {
      name: 'Satellite',
      url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
    },
    {
      name: 'Carto',
      url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    },
    {
      name: 'Esri',
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    },
  ];

  const fetchLocations = async () => {
    setLoading(true);
    try {
      const response = await DataService.get(
        endpoints.locationApiById(DEFAULT_CATEGORY_ID),
      );
      setLocations(response);
    } catch (error) {
      setError('Error fetching locations');
      console.error('Error fetching locations:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-white mb-5 text-[32px]">O'tmishga sayohat</h1>
      <div className="w-4/6 h-5/6 md:w-3/4 lg:w-2/3 rounded-lg shadow-lg">
        {loading && <div className="text-white">Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
        <MapContainer
          center={[41.2995, 69.2401]}
          zoom={6}
          style={{ zIndex: 0 }}
          className="w-full h-full z-0"
          scrollWheelZoom={false}
        >
          <LayersControl position="topright">
            {maps.map((item, index) => (
              <BaseLayer key={index} name={item.name} checked={index === 0}>
                <TileLayer url={item.url} />
              </BaseLayer>
            ))}
          </LayersControl>
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={[
                parseFloat(location.latitude),
                parseFloat(location.longitude),
              ]}
              icon={customIcon}
            >
              <Popup>
                <Link to={`/cardDetail/${location.resource_id}`}>
                  <strong>{location.resource_title}</strong>
                </Link>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
