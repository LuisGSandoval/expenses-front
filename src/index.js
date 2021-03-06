import React from "react";
import ReactDOM from "react-dom";
import App from "./App/Router";
import * as serviceWorker from "./serviceWorker";
import Store from "./Store/Store";

import "bootstrap/dist/css/bootstrap.min.css";
import "flatpickr/dist/themes/material_green.css";
import "./index.css";

document.body.classList.add("bg-dark");

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
