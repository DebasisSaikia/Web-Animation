import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const DetailWrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}')` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
`;

export const DetailBody = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 4px;

  @media (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: #fff;
  overflow: hidden;

  .other_details {
    display: flex;
    justify-content: flex-start;
  }
  .rating {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    color: #111;
    font-weight: 800;
    margin: 0;
    background: orange;
    border-radius: 10rem;
  }
  .low_rating {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    color: #111;
    font-weight: 800;
    margin: 0;
    border-radius: 10rem;
    background: red;
  }
  .director {
    margin: 0 0 0 40px;
    p {
      margin: 0;
    }
  }

  h1 {
    @media (max-width: 768px) {
      font-size: var(--fontLg);
    }
  }
`;
