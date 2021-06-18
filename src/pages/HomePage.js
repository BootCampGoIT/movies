import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ location }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Home</h2>
      <Link
        to={{ pathname: "/moviesDetails/f43g23g2f3ff2th", state: { from: location.pathname } }}>
        go to moviesDetails
      </Link>
      <Link
        to={{ pathname: "/moviesDetails/243gj24jgh2gfjfj23", state: { from: location.pathname } }}>
        go to moviesDetails
      </Link>
      <Link
        to={{ pathname: "/moviesDetails/fsdf68767fdsfs", state: { from: location.pathname } }}>
        go to moviesDetails
      </Link>
      
    </div>
  );
};

export default HomePage;
