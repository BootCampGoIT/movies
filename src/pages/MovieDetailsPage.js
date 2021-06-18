import React, { Component } from "react";
import { detailsRoutes } from "../routes/detailsRoutes";
import { NavLink, Switch, Route } from "react-router-dom";

class MovieDetailsPage extends Component {
  state = {
    from: "",
    movieID: "",
    film: {},
    search: "",
  };

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({
        from: this.props.location.state.from,
        search: this.props.location.state.search,
        movieID: this.props.match.params.movieID,
      });
    } else {
      // const resp = axios.get(`hgvjbn/${this.props.match.params.movieID}`);
      const resp = { title: "Batman" };
      this.setState({
        movieID: this.props.match.params.movieID,
        film: resp,
      });
    }
  }

  goBack = () => {
    this.props.history.push({
      pathname: this.state.from,
      search: `query=${this.state.search ? this.state.search : null}`,
    });
  };

  render() {
    const { film } = this.state;
    return (
      <>
        <h2>MovieDetailsPage</h2>
        <button type='button' onClick={this.goBack} disabled={!this.state.from}>
          Go BAck
        </button>

        {film && (
          <>
            <div className='filmInfo'>
              <h2>{film.title}</h2>
            </div>
            <ul>
              {detailsRoutes.map(({ name, exact, path }) => (
                <li key={path}>
                  <NavLink to={this.props.match.url + path} exact={exact}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Switch>
              {detailsRoutes.map(({ component, exact, path }) => (
                <Route
                  path={this.props.match.path + path}
                  exact={exact}
                  component={component}
                  key={path}
                />
              ))}
            </Switch>
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
