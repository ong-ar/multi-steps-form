import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home";

const AppPresenter: React.SFC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

const Routes: React.SFC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={Home} />
  </Switch>
);

export default AppPresenter;
