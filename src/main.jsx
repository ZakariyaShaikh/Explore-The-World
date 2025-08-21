import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ReactGA from "react-ga4";

// ✅ Initialize GA4 (replace with your GA4 Measurement ID)
ReactGA.initialize("G-PL64E2C3H4");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
