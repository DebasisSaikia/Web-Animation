import { useState, useEffect, useRef } from "react";
import API from "../API.js";
import { persistedState } from "../helpers.js";

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
    if (!searchTerm) {
      const sessionState = persistedState('homeState');
      if (sessionState) {
        console.log('grabbing from session')
        setState(sessionState);
        return;
      }
      console.log('grabbing from api')
    }
    setState(initialState);
    getMovies(1, searchTerm);
  }, [searchTerm]);

  // load more data
  useEffect(() => {
    if (!loadMore) return;
    getMovies(state.page + 1, searchTerm);
    setLoadMore(false);
  }, [loadMore, searchTerm, state.page]);

  // set session
  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state))
  }, [searchTerm, state])

  return { state, loading, error, setSearchTerm, searchTerm, setLoadMore };
};
