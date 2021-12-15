import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5em 1.2em;
  font-size: 0.9em;
  font-weight: bold;
  color: white;
  background-color: ${(props) =>
    props.add ? "#45C02E" : props.cancel ? "#C22929" : "transparent"};
  border: ${(props) => (props.transparent ? "2px solid white" : "none")};
  cursor: pointer;
  box-shadow: 3px 3px 10px #444;
  border-radius: 3px;
`;

const Button = (props) => {
  return (
    <StyledButton
      transparent={props.transparent}
      add={props.add}
      cancel={props.cancel}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
