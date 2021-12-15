import React, { Fragment, useContext } from "react";
import { Marker, Tooltip } from "react-leaflet";
import GeolocationStore from "../store/map-store/geolocation-store";

const inline = { display: "inline" };
const iconSize = { fontSize: "1.1em" };
const container = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "5px",
};

const Markers = () => {
  const { exercisesList } = useContext(GeolocationStore);

  return (
    <Fragment>
      {exercisesList.length > 0 &&
        exercisesList.map((exercise) => {
          const icon = exercise.type === "Running" ? "🏃" : "🚲";
          return (
            <Marker position={exercise.position} key={exercise.id}>
              <Tooltip permanent direction="top" offset={[-15, -10]}>
                <div style={container}>
                  <span style={iconSize}>{icon}</span>
                  <h3 style={inline}>{exercise.description}</h3>
                </div>
              </Tooltip>
            </Marker>
          );
        })}
    </Fragment>
  );
};

export default Markers;
