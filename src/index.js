import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./Page";

const apiKeyMaps = process.env.API_KEY_MAPS;
<script
  src={`https://maps.googleapis.com/maps/api/js?key=${apiKeyMaps}`}
></script>;

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
