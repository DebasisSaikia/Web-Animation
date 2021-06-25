import React from "react";
import { MovieLogo, NavBody, NavContainer, NavLogo } from "./Navbar.styles";
import movieLogo from "../movie.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavContainer>
      <NavBody>
        <Link to="/">
          <NavLogo
            src="https://forums.launchbox-app.com/uploads/monthly_2017_10/59ee852ebc551_MovieLOGO.png.6377b1fe00600021a5771d520344b123.png"
            alt="nav_logo"
          />
        </Link>
        <MovieLogo src={movieLogo} alt="movie_logo" />
      </NavBody>
    </NavContainer>
  );
};

export default Navbar;
