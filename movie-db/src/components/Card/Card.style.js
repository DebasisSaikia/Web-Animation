import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s ease-in;
  object-fit: cover;
  border-radius: 4px;
  &:hover {
    opacity: 0.8;
  }
`;
