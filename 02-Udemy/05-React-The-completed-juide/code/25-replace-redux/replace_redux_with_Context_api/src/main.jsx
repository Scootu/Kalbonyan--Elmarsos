import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import { Router } from "./Router/Router";
import Products from "./containers/Products";
import Favorites from "./containers/Favorites";
import { ProductProvider } from "./context/Products-context";
// import { ProductsProvider } from "./context/Products-context";

// const rootReducer = combineReducers({
//   shop: productReducer,
// });

// const store = configureStore({
//   reducer: {
//     shop: productReducer.reducer,
//   },
// });
const router = createBrowserRouter([
  {
    path: "/",
    element: <Router />,
    children: [
      {
        path: "",
        element: <Products />,
      },
      { path: "/favorites", element: <Favorites /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </React.StrictMode>
);
