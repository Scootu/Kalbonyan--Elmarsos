// Challenge / Exercise

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import EventDetailPage, {
  loader as eventDetailFetch,
} from "./components/Pages/EventDetailPage";
import EventsPage, {
  loader as fetchRootEvent,
} from "./components/Pages/Events";
import EditEventPage from "./components/Pages/EditEventPage";
import NewEventPage from "./components/Pages/NewEventPage";
import RootLayout from "./components/Pages/Root";
import EventRoot from "./components/Pages/EventRoot";
import ErrorPage from "./components/Pages/Error";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventRoot />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: fetchRootEvent,
            },
            {
              path: ":idEvent",
              element: <EventDetailPage />,
              loader: eventDetailFetch,
            },
            { path: "new", element: <NewEventPage /> },
            { path: ":idEvent/edit", element: <EditEventPage /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
