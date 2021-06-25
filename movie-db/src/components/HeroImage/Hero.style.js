import styled from "styled-components";

export const HeroContainer = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image}), var(--lgGray);
  background-size: 100%, cover;
  background-position: center;
  height: 600px;
  position: relative;
`;

export const HeroBody = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  color: var(--light);

  h1 {
    font-size: var(--fontXl);
    @media (max-width: 720px) {
      font-size: var(--fontLg);
    }
  }
  p {
    font-size: var(--fontMd);
    @media (max-width: 720px) {
      font-size: var(--fontSm);
    }
  }

  @media (max-width: 720px) {
    max-width: 100%;
  }
`;
