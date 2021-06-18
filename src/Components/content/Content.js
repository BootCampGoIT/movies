import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import { Route } from "react-router-dom";

const Content = () => {
  return (
    <div>
      {mainRoutes.map(({ path, exact, component }) => (
        <Route path={path} exact={exact} component={component}  key={path}/>
      ))}
    </div>
  );
};

export default Content;
