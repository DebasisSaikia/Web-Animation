import { useState, useEffect, useRef } from "react";
import API from "../API.js";

const initialState = {
  page: 0,
  results: [],
  total_page: 0,
  total_results: 0,
};

export const useFetchHome = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  console.log(searchTerm);

  const getMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovies(1);
  }, []);

  useEffect(() => {
    setState(initialState);
    getMovies(1, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (!loadMore) return;
    getMovies(state.page + 1, searchTerm);
    setLoadMore(false);
  }, [loadMore, searchTerm, state.page]);

  return { state, loading, error, setSearchTerm, searchTerm, setLoadMore };
};
