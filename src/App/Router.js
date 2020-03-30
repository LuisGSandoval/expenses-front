import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "./Menu";
import Shopping from "./Shopping/Shopping";
import Expenses from "./Expenses/Expenses";
import MonthlyList from "./Expenses/Monthly/Monthly";
import ExpenseList from "./Expenses/ExpenseList";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/shopping" component={Shopping} exact />
          <Route path="/expenses" component={Expenses} exact />
          <Route path="/expenses/monthly" component={MonthlyList} exact />
          <Route path="/expenses/list" component={ExpenseList} exact />
          <Route path="/expenses/date/:date" component={ExpenseList} exact />
          <Route path="/" component={Menu} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
