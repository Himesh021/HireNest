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
import Description from "./components/components.lite/Description";
import EditProfiileModal from "./components/components.lite/EditProfiileModal";
import Companies from "./components/admincomponent/Companies";
import CompanySetup from "./components/admincomponent/CompanySetup";
import CompanyCreate from "./components/admincomponent/CompanyCreate";
import PostJob from "./components/admincomponent/PostJob";
import AdminJobs from "./components/admincomponent/AdminJobs";
import Applicants from "./components/admincomponent/Applicants";

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
        path: "/description/:id",
        element: <Description />,
      },
      {
        path: "EditProfiileModal",
        element: <EditProfiileModal />,
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

      {
        path: "/admin/companies",
        element: <Companies />,
      },
      {
        path: "/admin/companies/create",
        element: <CompanyCreate />,
      },
      {
        path: "/admin/companies/:id",
        element: <CompanySetup />,
      },
      {
        path: "/admin/jobs",
        element: <AdminJobs />,
      },
      {
        path: "/admin/jobs/create",
        element: <PostJob />,
      },
      {
        path: "/admin/jobs/:id/applicants",
        element: <Applicants />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
