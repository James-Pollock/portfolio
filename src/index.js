import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./css/styles.min.css";
import "./css/parallax.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
