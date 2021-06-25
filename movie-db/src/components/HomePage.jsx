import React from "react";
import { useFetchHome } from "../custom-hooks/useFetchHome";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import HeroImage from "./HeroImage";
import Layout from "./Layout";
import Card from "./Card";
import Loader from "./Loader";
import SearchBar from "./SearchBar";

const HomePage = () => {
  const { state, error, loading, setSearchTerm } = useFetchHome();

  console.log(state);
  const randomNum = Math.floor(Math.random() * 10) + 1;

  return (
    <>
      {state.results[`${randomNum}`] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${
            state.results[`${randomNum}`].backdrop_path
          }`}
          title={state.results[`${randomNum}`].original_title}
          text={state.results[`${randomNum}`].overview}
        />
      ) : null}

      <SearchBar setSearchTerm={setSearchTerm} />

      <Layout header="Popular movies">
        {state.results.map((movie) => {
          return (
            <Card
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : "no Image"
              }
              movieId={movie.id}
            />
          );
        })}
      </Layout>
      <Loader />
    </>
  );
};

export default HomePage;
