import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ location }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Home</h2>
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

export default HomePage;
