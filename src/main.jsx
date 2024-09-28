import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { route } from "./Routes/Routes.jsx";
import App from "./App.jsx";
import "./index.css";
import {
  ThemeProvider,
} from "./Contexts/Theme/Theme_context.jsx";
import AuthProvider from "./Contexts/Auth/Auth_cotext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <AuthProvider>
      <RouterProvider router={route}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </ThemeProvider>
);
