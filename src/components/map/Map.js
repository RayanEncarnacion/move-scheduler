import React, { useCallback, useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Container from "../container/Container";
import ShowFormHandler from "../Helpers/ShowForm";
import GeolocationStore from "../store/map-store/geolocation-store";
import Markers from "../Helpers/Markers";

const style = { color: "#f5f5f5", textShadow: "2px 2px #222" };

const Map = () => {
  const { positionArray } = useContext(GeolocationStore);

  const showMapHandler = useCallback(() => {
    let showMap = <h1 style={style}>Waiting for your location!</h1>;

    if (positionArray.length > 0) {
      showMap = (
        <MapContainer
          doubleClickZoom={false}
          center={positionArray}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Markers />

          <ShowFormHandler />
        </MapContainer>
      );
    }

    return showMap;
  }, [positionArray]);

  return (
    <Container id="map" map>
      {showMapHandler()}
    </Container>
  );
};

export default Map;
