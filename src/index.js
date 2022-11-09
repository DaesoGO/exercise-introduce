import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import axios from "axios";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("app")).render(
  // <React.StrictMode>
  <RecoilRoot>
    <App />
  </RecoilRoot>
  // </React.StrictMode>
);

axios.defaults.baseURL = "/api";
