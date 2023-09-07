import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { path: "quotes", element: <AllQuotes /> },
        { path: ":quoteId", element: <QuoteDetail /> },
        { path: "/new-quote", element: <NewQuote /> },
      ],
    },
  ]);
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
