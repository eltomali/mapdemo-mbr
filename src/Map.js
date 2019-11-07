import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  const [viewport, setViewPort] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  })

  return (
    <ReactMapGL
      mapboxApiAccessToken={TOKEN}
      {...viewport}
      onViewportChange={viewport => setViewPort({ ...viewport })}
    />
  );
};

export default Map;
