import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { NovuProvider } from "@novu/notification-center";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NovuProvider
    subscriberId={"6342a75ae2a2de81dfe940de"}
    applicationIdentifier={"qYRK9OhcW92r"}
  >
    <App />
  </NovuProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
