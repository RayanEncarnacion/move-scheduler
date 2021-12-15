import styled from "styled-components";

const Form = styled.form`
  width: 90%;
  max-width: 400px;
  margin: 2em auto 0;
  padding: 1.5em;
  background: #555;
  color: #f2f2f2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 0 8px #222;
  animation: slide 0.5s ease-in-out;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & input,
  select {
    width: 90px;
    border-radius: 3px;
    outline: none;
    border: none;
    padding: 5px;
  }

  & input::placeholder {
    text-align: center;
  }
`;

export default Form;
