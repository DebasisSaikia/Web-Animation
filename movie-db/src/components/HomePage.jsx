import React, { useState, useEffect } from "react";
import { useFetchHome } from "../custom-hooks/useFetchHome";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

const HomePage = () => {
  const { state, error, loading } = useFetchHome();
  console.log(state);

  return <div>home components</div>;
};

export default HomePage;
