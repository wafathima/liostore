import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import store from "./app/store.js";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
<BrowserRouter>
   <App />
</BrowserRouter>
  </Provider>
);

