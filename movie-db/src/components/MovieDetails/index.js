import React from "react";
import Card from "../Card";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import { Fade } from "react-reveal";
import PropTypes from 'prop-types'
import { Text, DetailBody, DetailWrapper } from "./MovieDetail.style";

const MovieDetail = ({ movie }) => {
  return (
    <DetailWrapper backdrop={movie.backdrop_path}>
      <Fade right cascade>
        <DetailBody>
          <Card
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : "Image not available"
            }
            clickable={false}
          />
          <Text>
            <h1>{movie.title}</h1>
            <h3>Summary</h3>
            <p>{movie.overview}</p>

            <div className="other_details">
              <div>
                <h3> RATING</h3>
                <div
                  className={movie.vote_average > 7 ? "rating" : "low_rating"}
                >
                  {movie.vote_average}
                </div>
              </div>
              <div className="director">
                <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
                {movie.directors.map((director) => {
                  return <p key={director.credit_id}>{director.name}</p>;
                })}
              </div>
            </div>
          </Text>
        </DetailBody>
      </Fade>
    </DetailWrapper>
  );
};

MovieDetail.propTypes = {
  movie: PropTypes.object
}

export default MovieDetail;
