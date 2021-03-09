import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { store } from "./Redux/Helper";
import App from "./App/App";
import "./custom.scss";

// setup fake backend
import { configureFakeBackend } from "./Redux/Helper";
configureFakeBackend();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

document.body.style = "background-color: black;";
