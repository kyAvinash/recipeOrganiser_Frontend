import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import App from "./App.jsx";
import AddRecipe from "./pages/AddRecipe.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/addRecipe",
    element: <AddRecipe />,
  },
  {
    path: "/productdetails/:id",
    element: <ProductDetails />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
