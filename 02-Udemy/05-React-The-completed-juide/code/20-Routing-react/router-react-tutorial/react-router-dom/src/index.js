import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, { loader as rootLoader } from "./routes/root.jsx";
import { action as actionNewContact } from "./routes/root.jsx";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Info, { loader as getNumbers } from "./routes/Info";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: actionNewContact,
    children: [
      {
        path: "/contacts",
        element: <Info />,
        loader: getNumbers,
        children: [{ path: ":idContact", element: <Contact /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
