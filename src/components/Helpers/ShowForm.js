import { useContext } from "react";
import { useMapEvent } from "react-leaflet";
import GeolocationStore from "../store/map-store/geolocation-store";

const ShowFormHandler = () => {
  const { saveClickPosition, showForm, formIsShown } =
    useContext(GeolocationStore);

  useMapEvent("click", (e) => {
    if (formIsShown) return;

    const clickPosition = [e.latlng.lat, e.latlng.lng];
    saveClickPosition(clickPosition);
    showForm();
  });

  return <></>;
};

export default ShowFormHandler;
