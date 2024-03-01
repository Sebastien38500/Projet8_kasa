import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.scss";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
// StrictMode est un outil pour détecter les problèmes potentiels d'une application
//root.render n'est appelé qu'une seule fois au début pour restituer un composant React dans le DOM