import React, { Suspense } from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

const rootNode = document.getElementById("root");
ReactDOM.createRoot(rootNode!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

serviceWorker.unregister();

