import React, { Component } from "react";
import { Link } from "react-router-dom";

class MoviesPage extends Component {
  state = {
    search: "",
    movies: [],
  };

  onHandleChange = (e) => this.setState({ search: e.target.value });
  onHandleClick = () => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.search}`,
    });
  };

  render() {
    const { location } = this.props;
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>MoviesPage</h2>

        <input type='text' onChange={this.onHandleChange} />
        <button onClick={this.onHandleClick}>Search</button>

        <Link
          to={{
            pathname: "/moviesDetails/gh4234h23",
            state: { from: location.pathname, search: this.state.search },
          }}>
          go to moviesDetails
        </Link>
        <Link
          to={{
            pathname: "/moviesDetails/hj2423j4h32j",
            state: { from: location.pathname, search: this.state.search },
          }}>
          go to moviesDetails
        </Link>
        <Link
          to={{
            pathname: "/moviesDetails/gb23hj423",
            state: { from: location.pathname, search: this.state.search },
          }}>
          go to moviesDetails
        </Link>
      </div>
    );
  }
}

export default MoviesPage;
