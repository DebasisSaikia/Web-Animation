import React from "react";
import { Image } from "./Card.style";
import Fade from "react-reveal";

const Card = ({ image, movieId, clickable }) => {
  return (
    <Fade>
      <Image src={image} alt="movie-image" />
    </Fade>
  );
};

export default Card;
