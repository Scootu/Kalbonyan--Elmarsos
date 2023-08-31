import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import RootPage from "./RootPage";
import "./App.css";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/post/:userId",
          element: <Post />,
        },
      ],
    },
  ]);

  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
