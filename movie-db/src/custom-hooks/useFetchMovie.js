import { useEffect, useState, useCallback } from "react";
import API from "../API";
import { persistedState } from "../helpers";

export const useFetchMovie = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);

      const movie = await API.fetchMovie(movieId);
      const credits = await API.fetchCredits(movieId);

      const directors = credits.crew.filter(
        (member) => member.job === "Director"
      );
      setState({ ...movie, actors: credits.cast, directors });
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }, [movieId]);

  useEffect(() => {

    const sessionState = persistedState(movieId);

    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchData();
  }, [movieId, fetchData]);

  // set to session
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state))
  }, [movieId, state])

  return { state, loading, error };
};
