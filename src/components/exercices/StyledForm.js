import styled from "styled-components";

const Form = styled.form`
  width: 90%;
  max-width: 400px;
  margin: 1em auto;
  padding: 1em;
  font-size: 0.8em;
  background: #555;
  color: #f2f2f2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  border-radius: 10px;
  box-shadow: 0 0 8px #222;
  animation: slide 0.5s ease-in-out;

  & div {
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & div > * {
    width: 100%;
  }

  & input,
  select {
    min-width: 60px;
    max-width: 90px;
    border-radius: 3px;
    outline: none;
    border: none;
    padding: 5px;
    font-size: 0.8em;
  }

  & input::placeholder {
    text-align: center;
  }

  @media (min-width: 1024px) {
    font-size: 1em;
  }

  @media (min-width: 1280px) {
    margin-top: 2em;
  }
`;

export default Form;

//  width: 90%;
// max-width: 400px;
// margin: 2em auto 0;
// padding: 1.5em;
// background: #555;
// color: #f2f2f2;
// display: grid;
// grid-template-columns: 1fr 1fr;
// gap: 10px 20px;
// border-radius: 10px;
// box-shadow: 0 0 8px #222;
// animation: slide 0.5s ease-in-out;

// div {
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// & input,
// select {
//   width: 90px;
//   border-radius: 3px;
//   outline: none;
//   border: none;
//   padding: 5px;
// }

// & input::placeholder {
//   text-align: center;
// }
