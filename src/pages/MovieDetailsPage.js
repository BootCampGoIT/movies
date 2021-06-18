import React, { Component } from "react";
import { detailsRoutes } from "../routes/detailsRoutes";
import { NavLink, Switch, Route } from "react-router-dom";

class MovieDetailsPage extends Component {
  state = {
    from: "",
  };

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({ from: this.props.location.state.from });
    }
  }

  goBack = () => {
    this.props.history.push({
      pathname: this.state.from,
    });
  };

  render() {
    return (
      <>
        <h2>MovieDetailsPage</h2>
        <button type='button' onClick={this.goBack} disabled={!this.state.from}>
          Go BAck
        </button>
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
    );
  }
}

export default MovieDetailsPage;
