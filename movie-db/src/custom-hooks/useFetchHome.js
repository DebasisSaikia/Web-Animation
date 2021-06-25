import { useState, useEffect, useRef } from "react";
import API from "../API.js";

const initialState = {
  page: 0,
  results: [],
  total_page: 0,
  total_results: 0,
};

export const useFetchHome = () => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

  return { state, loading, error };
};
