import Container from "../container/Container";
import styled from "styled-components";
import ExerciseForm from "./ExerciseForm";
import ExercisesList from "./ExercisesList";
import { useContext } from "react";
import GeolocationStore from "../store/map-store/geolocation-store";

const H1 = styled.h1`
  text-align: center;
  margin: 0.5em 0 0 0.3em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const styles = { background: "#222", color: "#f2f2f2" };

const ExercisesContainer = () => {
  const { exercisesList, formIsShown } = useContext(GeolocationStore);

  let begginingText = "";
  if (exercisesList.length <= 0) {
    begginingText = (
      <h2 style={{ margin: "7em auto 0", textAlign: "center" }}>
        Click on the map to add Exercises!
      </h2>
    );
  }

  return (
    <Container flexCol style={styles}>
      <div>
        <H1>Move Scheduler</H1>
        {!formIsShown && begginingText}
      </div>
      <ExercisesList />
      <ExerciseForm />
    </Container>
  );
};

export default ExercisesContainer;
