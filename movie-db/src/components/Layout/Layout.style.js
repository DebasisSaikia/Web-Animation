import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    color: var(--mdGray);
    @media (max-width: 760px) {
      font-size: var(--fontLg);
    }
  }
`;
export const LayoutBody = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
