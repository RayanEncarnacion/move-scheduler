import styled from "styled-components";
import Button from "../../components/UI/Button";

const FormBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  justify-content: end !important;
  align-items: center;
  gap: 5px;
`;

const ExercisesFormButtons = (props) => {
  return (
    <FormBtnContainer>
      <Button type="submit" add>
        Add
      </Button>
      <Button onClick={props.onCancel} cancel>
        Cancel
      </Button>
    </FormBtnContainer>
  );
};

export default ExercisesFormButtons;
