import { useContext, useRef, useState, useCallback } from "react";
import GeolocationStore from "../store/map-store/geolocation-store";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const ExerciseFormLogic = () => {
  /// Working
  const context = useContext(GeolocationStore);
  const [type, setType] = useState("Running");

  const typeRef = useRef();
  const distanceRef = useRef();
  const durationRef = useRef();
  const cadenceRef = useRef();
  const dateRef = useRef();

  const changeType = useCallback(() => {
    setType(typeRef.current.value);
  }, [typeRef]);

  const refs = {
    typeRef,
    distanceRef,
    durationRef,
    cadenceRef,
    dateRef,
  };

  const hideForm = () => {
    context.hideForm();
  };

  const formIsShown = context.formIsShown;

  const submitHandler = (e) => {
    e.preventDefault();

    const [year, month, day, time] = dateRef.current.value.split(/[-T]/g);
    const description = `${type} on ${
      MONTHS[month - 1]
    } ${day}, ${year} at ${time}`;

    const exercise = {
      type,
      distance: distanceRef.current.value,
      duration: durationRef.current.value,
      cadence: cadenceRef.current.value,
      description,
      position: context.clickPosition,
      id: String(Math.random()).slice(0, 5),
    };

    context.updateExercisesList(exercise);

    typeRef.current.value = "";
    distanceRef.current.value = "";
    durationRef.current.value = "";
    cadenceRef.current.value = "";

    setType("Running");

    hideForm();
  };
  return {
    submitHandler,
    refs,
    hideForm,
    formIsShown,
    type,
    typeRef,
    changeType,
  };
};

export default ExerciseFormLogic;
