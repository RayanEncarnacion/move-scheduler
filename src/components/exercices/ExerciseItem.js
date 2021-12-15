import StyledItem from "./StyledExerciseItem";

const ExerciseItem = (props) => {
  return (
    <StyledItem type={props.type}>
      <button onClick={props.onClose}>X</button>
      <h4>{props.description}</h4>
      <div>
        <span>{`⌚  ${props.duration} mins`}</span>
        <span>{`${"🥅"}  ${props.distance} km`}</span>
        <span>{`${props.type === "Running" ? "🦶" : "↗"}  ${props.cadence} ${
          props.type === "Running" ? "step/min" : "meters"
        }`}</span>
      </div>
    </StyledItem>
  );
};

export default ExerciseItem;
