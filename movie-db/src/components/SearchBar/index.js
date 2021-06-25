import React, { useState, useEffect, useRef } from "react";
import { SearchBody, SearchContainer, SearchIcon } from "./Search.style";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const firstRender = useRef(true);

  //   timer to delay search
  useEffect(() => {
    // it will not fetch the data in initial render(skip initial render in useEffect)
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const searchTime = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(searchTime);
  }, [setSearchTerm, state]);

  return (
    <SearchContainer>
      <SearchBody>
        <SearchIcon />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Movie"
          onChange={(e) => setState(e.currentTarget.value)}
          value={state}
        />
      </SearchBody>
    </SearchContainer>
  );
};

export default SearchBar;
