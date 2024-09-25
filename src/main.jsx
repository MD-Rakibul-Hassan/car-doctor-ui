import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { route } from "./Routes/Routes.jsx";
import App from "./App.jsx";
import "./index.css";
import {
  ThemeProvider,
} from "./Contexts/Theme/Theme_context.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={route}>
      <App />
    </RouterProvider>
  </ThemeProvider>
);
