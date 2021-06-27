import React from "react";
import Layout from "./Layout";
import Loader from "./Loader";
import { useFetchMovie } from "../custom-hooks/useFetchMovie";
import { useParams } from "react-router-dom";
import DetailHeader from "./DetailHeader";
import MovieDetail from "./MovieDetails";
import InfoBar from "./InfoBar";
import Cast from "./Cast";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

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
      <InfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
      <Layout header="Actors">
        {movie.actors.map((actor) => {
          return (
            <Cast key={actor.credit_id} name={actor.name} character={actor.character}
              actorImg={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : 'No Image'} />
          )
        })}
      </Layout>
    </>
  );
};

export default Movies;
