import React from "react";
import Layout from "./Layout";
import Loader from "./Loader";
import { useFetchMovie } from "../custom-hooks/useFetchMovie";
import { useParams } from "react-router-dom";
import DetailHeader from "./DetailHeader";
import MovieDetail from "./MovieDetails";

const Movies = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useFetchMovie(movieId);
  console.log(movie);

  if (loading) return <Loader />;
  if (error) return <div>Loading failed ! Error occured</div>;

  return (
    <>
      <DetailHeader movieName={movie.original_title} />
      <MovieDetail movie={movie} />
    </>
  );
};

export default Movies;
