import styled from "styled-components";

const StyledItem = styled.li`
  position: relative;
  width: 90%;
  max-width: 400px;
  font-size: 0.8em;
  padding: 0.7em;
  background: #555;
  color: #f2f2f2;
  list-style: none;
  box-shadow: 0 0 15px #111;
  border-left: ${(props) =>
    props.type === "Cycling"
      ? "3px solid rgb(18, 189, 158)"
      : "3px solid rgb(216, 204, 35)"};
  border-bottom: ${(props) =>
    props.type === "Cycling"
      ? "3px solid rgb(18, 189, 158)"
      : "3px solid rgb(216, 204, 35)"};

  border-radius: 10px;
  animation: slide 0.5s ease-in-out;

  & h4 {
    margin: 0.2em 0 0.5em;
  }

  & button {
    position: absolute;
    top: 8px;
    right: 8px;
    background: transparent;
    border: none;
    outline: none;
    color: #f3f3f3;
    font-weight: bold;
    font-size: 1em;
    cursor: pointer;
  }

  & div {
    font-size: 0.9em;
    display: flex;
    justify-content: space-between;
    aling-items: center;
  }

  @media (min-width: 1024px) {
    font-size: 1em;
  }
`;

export default StyledItem;
