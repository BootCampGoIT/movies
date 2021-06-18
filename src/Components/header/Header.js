import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <ul>
        {mainRoutes.map(
          ({ name, exact, path, isLink }) =>
            isLink && (
              <li>
                <NavLink to={path} exact={exact}>
                  {name}
                </NavLink>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

export default Header;
