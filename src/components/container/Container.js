import styled from "styled-components";

const Container = styled.div`
  display: ${(props) => (props.flex ? "flex" : "block")};
  flex-direction: ${(props) => (props.column ? "column" : "")};
`;

export default Container;
