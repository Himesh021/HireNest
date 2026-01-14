import React from "react";
import { createBrowserRouter, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/components.lite/Navbar";
import Home from "./components/components.lite/Home";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import {RouterProvider } from "react-router-dom";  

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Login/> 
  },
  {
    path:"/Signup",
    element:<Signup/>
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