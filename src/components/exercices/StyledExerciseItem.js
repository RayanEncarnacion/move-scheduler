import styled from "styled-components";

const StyledItem = styled.li`
  position: relative;
  width: 80%;
  max-width: 400px;
  padding: 1em;
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
    margin: 0 0 0.7em;
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
    font-size: 1.1em;
    cursor: pointer;
  }

  & div {
    font-size: 1em;
    display: flex;
    justify-content: space-between;
    aling-items: center;
  }
`;

export default StyledItem;
