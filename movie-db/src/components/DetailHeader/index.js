import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
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

DetailHeader.propTypes = {
  movieName: PropTypes.string
}

export default DetailHeader;
