import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";
import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
