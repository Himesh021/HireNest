import React from "react";
import { createBrowserRouter, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/components.lite/Navbar";
import Home from "./components/components.lite/Home";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import { RouterProvider } from "react-router-dom";
import PrivacyPolicy from "./components/components.lite/PrivacyPolicy";
import TermsofServices from "./components/components.lite/TermsofServices";
import Jobs from "./components/components.lite/Jobs";
import Browse from "./components/components.lite/Browse";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/PrivacyPolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/TermsofServices",
    element: <TermsofServices />,
  },
  {
    path: "/Jobs",
    element: <Jobs />,
  },
  {
    path: "/Browse",
    element: <Browse />,
  },
]); //routes can be added later
function App() {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
