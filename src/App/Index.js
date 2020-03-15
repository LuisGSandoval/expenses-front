import React from "react";
import Menu from "./Menu";
import Shopping from "./Shopping/Shopping";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const index = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/shopping" component={Shopping} exact />
          <Route path="/" component={Menu} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default index;
