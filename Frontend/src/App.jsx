import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/components.lite/Navbar";
import Home from "./components/components.lite/Home";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import PrivacyPolicy from "./components/components.lite/PrivacyPolicy";
import TermsofServices from "./components/components.lite/TermsofServices";
import Jobs from "./components/components.lite/Jobs";
import Browse from "./components/components.lite/Browse";
import Profile from "./components/components.lite/Profile";

// Layout component (Navbar always visible)
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        {" "}
        {/* 🔥 push content below fixed navbar */}
        <Outlet />
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // 🔥 Everything goes through Layout
    children: [
      {
        index: true, // ✅ HOME FIXED
        element: <Home />,
      },
      {
        path: "login", // ✅ NO leading /
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "profile",
        element: <Profile />, // ✅ PROFILE NOW WORKS FROM HOME TOO
      },
      {
        path: "privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "termsofservices",
        element: <TermsofServices />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "browse",
        element: <Browse />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
