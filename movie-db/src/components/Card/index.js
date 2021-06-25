import React from "react";
import { Image } from "./Card.style";
import Fade from "react-reveal";
import { Link } from "react-router-dom";

const Card = ({ image, movieId, clickable }) => {
  return (
    <Fade>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movie-image" />
        </Link>
      ) : (
        <Image src={image} alt="movie-image" />
      )}
    </Fade>
  );
};

export default Card;
