import styled from "styled-components";
// --smGray:#eee;
// --mdGray:#353535;
// --lgGray:#1c1c1c;
export const Loader = styled.div`
  border: 5px solid black;
  border-top: 5px solid orange;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 20px auto;
  animation: loader 0.8s linear infinite;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
