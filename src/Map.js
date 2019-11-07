import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  const [viewport, setViewPort] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 42.430472,
    longitude: -123.334102,
    zoom: 16
  })

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={TOKEN}
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      onViewportChange={viewport => setViewPort({ ...viewport })}
    />
  );
};

export default Map;
