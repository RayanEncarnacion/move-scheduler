import React from "react";

const GeolocationStore = React.createContext({
  lat: Number,
  lng: Number,
  positionArray: [],
  markersArray: {},
  formIsShown: Boolean,
  getPosition: () => {},
  showForm: () => {},
  hideForm: () => {},
  updatePositionArray: () => {},
  updateMarkersArray: () => {},
});

export default GeolocationStore;
