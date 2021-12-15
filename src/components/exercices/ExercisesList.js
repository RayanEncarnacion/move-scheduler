import { useContext } from "react";
import GeolocationStore from "../store/map-store/geolocation-store";
import styled from "styled-components";
import ExerciseItem from "./ExerciseItem";

const StyledUL = styled.ul`
  max-height: 60vh;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding-left: 0;
  gap: 0.8em;
  margin-block-start: 1em;
  margin-block-end: 0;
  overflow-y: ${(props) => (props.scroll ? "scroll" : "")};

  @media (min-width: 768px) {
    max-height: 80vh;
  }

  @media (min-width: 1024px) {
    max-height: 75vh;
  }

  @media (min-width: 1280px) {
    max-height: 60vh;
  }

  @media (min-width: 1280px) {
    max-height: 70vh;
  }
`;

const ExercisesList = () => {
  const { exercisesList, removeExercise, mapFlyOnItemClick } =
    useContext(GeolocationStore);

  const onClickedItem = (position) => {
    mapFlyOnItemClick(position);
  };

  const listAllowScroll = exercisesList.length > 4 ? true : false;

  console.log(exercisesList.length);
  return (
    <StyledUL scroll={listAllowScroll}>
      {exercisesList.length > 0 &&
        exercisesList.map((exercise) => (
          <ExerciseItem
            onClick={onClickedItem.bind(null, exercise.position)}
            onClose={removeExercise.bind(null, exercise.id)}
            cadence={exercise.cadence}
            distance={exercise.distance}
            duration={exercise.duration}
            key={exercise.id}
            id={exercise.id}
            type={exercise.type}
            description={exercise.description}
          />
        ))}
    </StyledUL>
  );
};

export default ExercisesList;
