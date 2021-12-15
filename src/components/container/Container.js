import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  width: ${(props) => (props.map ? "65%" : "35%")};
  display: ${(props) => (props.flex ? "flex" : "block")};
  flex-direction: ${(props) => (props.column ? "column" : "")};
`;

export default Container;
