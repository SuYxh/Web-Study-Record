import styled from "styled-components";
const Wrapper = styled.div `
  color: ${props=>props.color?'red':'blue'};
  h1 {
    color: red;
  }
`;
const Button = styled(Wrapper)
`font-size:40px;
`
export {
  Wrapper,
  Button
}