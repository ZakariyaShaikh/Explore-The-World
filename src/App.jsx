
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";
import ReactGA from "react-ga4";

import "./App.css";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./components/Layout/CountryDetails";
import { useEffect } from "react";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Send pageview on route change
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return null;
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
     
  return (
    <>
    <AnalyticsTracker />
    <RouterProvider router={router}> </RouterProvider>;
    </>
  ) 
};

export default App;
