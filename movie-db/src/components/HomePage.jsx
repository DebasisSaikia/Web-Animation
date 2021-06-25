import React from "react";
import { useFetchHome } from "../custom-hooks/useFetchHome";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import HeroImage from "./HeroImage";
import Layout from "./Layout";
import Card from "./Card";
import Loader from "./Loader";
import SearchBar from "./SearchBar";
import Button from "./Button";

const HomePage = () => {
  const { state, error, loading, setSearchTerm, searchTerm, setLoadMore } =
    useFetchHome();

  const randomNum = Math.floor(Math.random() * 10) + 1;

  if (error) return <div>Error Occured !! Please Reload the Page</div>;

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

      <Layout
        header={searchTerm ? `Result for ${searchTerm}` : "Popular movies"}
      >
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
      {loading && <Loader />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" clickButton={() => setLoadMore(true)} />
      )}
    </>
  );
};

export default HomePage;
