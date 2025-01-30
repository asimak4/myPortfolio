import React, { useState } from 'react';
import { Box, Tooltip, Paper, Typography } from '@mui/material';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { visitedPlaces, wishlistPlaces } from './visitedPlaces';

// You'll need to replace this with your Mapbox access token
const MAPBOX_TOKEN = 'pk.eyJ1IjoicHl0aG9udGVzdGVyNiIsImEiOiJjbTZqcmJyZjcwM3pnMmpwdDh2eHBwYmg2In0.7wUCgKKThuBW-0XjIsTT1g';

const TravelGlobe: React.FC = () => {
  const [viewState, setViewState] = useState({
    longitude: -98.5795,  // Center of the USA
    latitude: 39.8283,    // Center of the USA
    zoom: 3.5,           // Zoom level to show continental USA
    pitch: 45,
    bearing: 0
  });

  return (
    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        terrain={{ source: 'mapbox-dem', exaggeration: 1.5 }}
        projection={{ name: 'globe' }}
        minZoom={2}      // Prevent zooming out too far
      >
        <NavigationControl />
        
        {/* Visited Places */}
        {visitedPlaces.map((place, index) => (
          <Marker
            key={`visited-${index}`}
            longitude={place.coordinates[1]}
            latitude={place.coordinates[0]}
            anchor="bottom"
          >
            <Tooltip title={place.name} arrow placement="top">
              <Box
                sx={{
                  width: '12px',
                  height: '12px',
                  bgcolor: '#f50057',
                  borderRadius: '50%',
                  border: '2px solid white',
                  boxShadow: '0 0 10px rgba(245, 0, 87, 0.5)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.2)',
                  }
                }}
              />
            </Tooltip>
          </Marker>
        ))}

        {/* Wishlist Places */}
        {wishlistPlaces.map((place, index) => (
          <Marker
            key={`wishlist-${index}`}
            longitude={place.coordinates[1]}
            latitude={place.coordinates[0]}
            anchor="bottom"
          >
            <Tooltip title={`Wishlist: ${place.name}`} arrow placement="top">
              <Box
                sx={{
                  width: '12px',
                  height: '12px',
                  bgcolor: '#2196f3',
                  borderRadius: '50%',
                  border: '2px solid white',
                  boxShadow: '0 0 10px rgba(33, 150, 243, 0.5)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.2)',
                  }
                }}
              />
            </Tooltip>
          </Marker>
        ))}
      </Map>

      {/* Legend */}
      <Paper
        elevation={3}
        sx={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          p: 2,
          bgcolor: 'rgba(0, 0, 0, 0.8)',
          borderRadius: 2,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Typography variant="subtitle2" sx={{ color: 'white', mb: 1 }}>
          Travel Map Legend
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Box
            sx={{
              width: '12px',
              height: '12px',
              bgcolor: '#f50057',
              borderRadius: '50%',
              border: '2px solid white',
              mr: 1
            }}
          />
          <Typography variant="body2" sx={{ color: 'white' }}>
            Places Visited ({visitedPlaces.length})
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              width: '12px',
              height: '12px',
              bgcolor: '#2196f3',
              borderRadius: '50%',
              border: '2px solid white',
              mr: 1
            }}
          />
          <Typography variant="body2" sx={{ color: 'white' }}>
            Wishlist ({wishlistPlaces.length})
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default TravelGlobe; 
