import { useCallback, useEffect, useState } from "react";
import GeolocationStore from "./geolocation-store";

const GeolocationProvider = (props) => {
  const [currentPosition, setCurrentPosition] = useState([]);
  const [formIsShown, setFormIsShown] = useState(false);
  const [exercisesList, setExercisesList] = useState([]);
  const [clickPosition, setClickPosition] = useState([]);

  //

  useEffect(() => {
    if (
      localStorage.getItem("exercises") === null ||
      exercisesList.length >
        JSON.parse(localStorage.getItem("exercises")).length
    ) {
      localStorage.setItem("exercises", JSON.stringify(exercisesList));
    }
    if (
      JSON.parse(localStorage.getItem("exercises")).length >
      exercisesList.length
    ) {
      const storedExercises = JSON.parse(localStorage.getItem("exercises"));
      setExercisesList(storedExercises);
    }
  }, [exercisesList]);

  const getPositionHandler = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPosition = [
            position.coords.latitude,
            position.coords.longitude,
          ];
          setCurrentPosition(userPosition);
        },
        () => alert("We need your location to display the app!")
      );
    } else {
      alert("We need your location to display the app!");
    }
  }, []);

  const showFormHandler = useCallback(() => {
    setFormIsShown((prevState) => !prevState);
  }, []);

  const hideFormHandler = useCallback(() => {
    setFormIsShown(false);
  }, []);

  const saveClickPositionHandler = useCallback((position) => {
    setClickPosition(position);
  }, []);

  const updateExercisesListHandler = useCallback(
    (exercise) => {
      if (exercisesList.length > 0) {
        const newList = [...exercisesList, exercise];

        setExercisesList(newList);
      } else {
        setExercisesList([exercise]);
      }
    },
    [exercisesList]
  );

  const removeExerciseHandler = useCallback(
    (id) => {
      const newExercisesList = exercisesList.filter(
        (exercise) => exercise.id !== id
      );
      setExercisesList(newExercisesList);
      localStorage.setItem("exercises", JSON.stringify(newExercisesList));
    },
    [exercisesList]
  );

  useEffect(() => getPositionHandler(), [getPositionHandler]);

  const value = {
    formIsShown,
    exercisesList,
    clickPosition,
    positionArray: currentPosition,
    getPosition: getPositionHandler,
    showForm: showFormHandler,
    hideForm: hideFormHandler,
    removeExercise: removeExerciseHandler,
    saveClickPosition: saveClickPositionHandler,
    updateExercisesList: updateExercisesListHandler,
  };

  return (
    <GeolocationStore.Provider value={value}>
      {props.children}
    </GeolocationStore.Provider>
  );
};

export default GeolocationProvider;
