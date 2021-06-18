import React from "react";
import { detailsRoutes } from "../routes/detailsRoutes";
import { NavLink, Switch, Route } from "react-router-dom";

const MovieDetailsPage = ({ match }) => {
  return (
    <>
      <h2>MovieDetailsPage</h2>
      <ul>
        {detailsRoutes.map(({ name, exact, path }) => (
          <li>
            <NavLink to={match.url + path} exact={exact}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Switch>
        {detailsRoutes.map(({ component, exact, path }) => (
          <Route path={match.path + path} exact={exact} component={component} />
        ))}
      </Switch>
    </>
  );
};

export default MovieDetailsPage;
