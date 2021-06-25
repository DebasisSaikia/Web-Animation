import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  /* background: black; */
`;

export const SearchBody = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: rgba(0, 0, 0, 0.8);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--light);

  input {
    font-size: 28px;
    position: absolute;
    left: 0;
    margin: 8px 0;
    border: 0;
    padding: 0 0 0 60px;
    width: 95%;
    background: transparent;
    outline: none;
    height: 40px;
    color: var(--light);
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  left: 15px;
  top: 14px;
  width: 50px;
  font-size: 1.5rem;
`;
