import styled from "styled-components";

export const LoadButton = styled.button`
  display: block;
  background: black;
  /* width: 25%; */
  min-width: 200px;
  height: 40px;
  border-radius: 4px;
  color: var(--light);
  border: 0;
  font-size: 20px;
  margin: 20px auto;
  transition: all 0.3s ease-in-out;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
