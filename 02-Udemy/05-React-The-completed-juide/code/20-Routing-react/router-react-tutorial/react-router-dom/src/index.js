import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, { loader as rootLoader } from "./routes/root.jsx";
import { action as actionNewContact } from "./routes/root.jsx";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact, { action as actionEditContact } from "./routes/edit";
// import Info, { loader as getNumbers } from "./routes/Info";

// const Info = lazy(import("./routes/Info"));
//  children: [
//       {
//         path: "/contacts",
//         element: (
//           // <Suspense fallback={<p>Loading...</p>}>
//           <Info />
//           // </Suspense>
//         ),

//         loader: getNumbers,
//         // loader: () => import("./routes/Info").then((module) => module.loader()),
//         children: [{ path: ":idContact", element: <Contact /> }],
//       },
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: actionNewContact,
    children: [
      {
        path: "contacts/:idContact",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:idContact/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: actionEditContact,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
