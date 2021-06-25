import styled from "styled-components";

export const NavContainer = styled.div`
  background: var(--lgGray);
  /* background: transparent; */
  padding: 0 20px;
`;

export const NavBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
`;

export const NavLogo = styled.img`
  width: 80px;
  height: 40px;
  @media (max-width: 500px) {
    height: 30px;
    width: 70px;
  }
`;

export const MovieLogo = styled.img`
  width: 50px;
  height: 40px;
  @media (max-width: 500px) {
    width: 40px;
  }
`;
