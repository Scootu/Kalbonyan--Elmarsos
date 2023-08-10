import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeHeader from "./pages/HomeHeader";
import Products from "./pages/Product";
import Root from "./Layout/RootRouter";
import Error from "./pages/Error";
import ProductsDetails from "./pages/ProductsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomeHeader /> },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:idProduct",
        element: <ProductsDetails />,
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
