import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70px;
  background: var(--mdGray);
  color: var(--light);
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;

  button {
    min-width: 110px;
    height: 30px;
    font-weight: 500;
    background: black;
    color: var(--light);
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  span {
    font-size: var(--fontMd);
    color: var(--light);
    padding-left: 2rem;

    @media (max-width: 768px) {
      font-size: var(--fontSm);
    }
  }
`;
