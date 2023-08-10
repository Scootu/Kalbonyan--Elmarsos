import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeHeader from "./pages/HomeHeader";
import Products from "./pages/Product";
import Root from "./Layout/RootRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomeHeader /> },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);
function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
