import React from "react";
import { Link } from "react-router-dom";

const MoviesPage = ({ location }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>MoviesPage</h2>
      <Link
        to={{ pathname: "/moviesDetails", state: { from: location.pathname } }}>
        go to moviesDetails
      </Link>
      <Link
        to={{ pathname: "/moviesDetails", state: { from: location.pathname } }}>
        go to moviesDetails
      </Link>
      <Link
        to={{ pathname: "/moviesDetails", state: { from: location.pathname } }}>
        go to moviesDetails
      </Link>
      <Link
        to={{ pathname: "/moviesDetails", state: { from: location.pathname } }}>
        go to moviesDetails
      </Link>
      <Link
        to={{ pathname: "/moviesDetails", state: { from: location.pathname } }}>
        go to moviesDetails
      </Link>
      <Link
        to={{ pathname: "/moviesDetails", state: { from: location.pathname } }}>
        go to moviesDetails
      </Link>
    </div>
  );
};

export default MoviesPage;
