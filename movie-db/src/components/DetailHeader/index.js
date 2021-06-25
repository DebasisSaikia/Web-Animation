import React from "react";
import { Link } from "react-router-dom";
import { Container, Content } from "./DetailHeader.style";

const DetailHeader = ({ movieName }) => {
  return (
    <Container>
      <Content>
        <Link to="/">
          <button>Back to Home</button>
        </Link>

        <span>{movieName}</span>
      </Content>
    </Container>
  );
};

export default DetailHeader;
