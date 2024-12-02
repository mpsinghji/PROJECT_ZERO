import React from "react";
import ReactDOM from "react-dom/client";  // Use 'react-dom/client' instead of 'react-dom'
import App from "./App";
import { AuthProvider } from "./context/authContext.jsx"; // Adjust path as necessary

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root element
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
