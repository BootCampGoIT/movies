import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import { NavLink, withRouter } from "react-router-dom";

const Header = ({ location }) => {
  return (
    <nav>
      <ul>
        {mainRoutes.map(
          ({ name, exact, path, isLink }) =>
            isLink && (
              <li key={path}>
                <NavLink
                  to={{
                    pathname: path,
                    state: {
                      from: location.pathname,
                    },
                  }}
                  exact={exact}>
                  {name}
                </NavLink>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

export default withRouter(Header);
